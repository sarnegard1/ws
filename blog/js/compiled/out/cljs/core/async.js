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
var args28931 = [];
var len__27054__auto___28937 = arguments.length;
var i__27055__auto___28938 = (0);
while(true){
if((i__27055__auto___28938 < len__27054__auto___28937)){
args28931.push((arguments[i__27055__auto___28938]));

var G__28939 = (i__27055__auto___28938 + (1));
i__27055__auto___28938 = G__28939;
continue;
} else {
}
break;
}

var G__28933 = args28931.length;
switch (G__28933) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28931.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28934 = (function (f,blockable,meta28935){
this.f = f;
this.blockable = blockable;
this.meta28935 = meta28935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28936,meta28935__$1){
var self__ = this;
var _28936__$1 = this;
return (new cljs.core.async.t_cljs$core$async28934(self__.f,self__.blockable,meta28935__$1));
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28936){
var self__ = this;
var _28936__$1 = this;
return self__.meta28935;
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28935","meta28935",-1461280668,null)], null);
});

cljs.core.async.t_cljs$core$async28934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28934";

cljs.core.async.t_cljs$core$async28934.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28934");
});

cljs.core.async.__GT_t_cljs$core$async28934 = (function cljs$core$async$__GT_t_cljs$core$async28934(f__$1,blockable__$1,meta28935){
return (new cljs.core.async.t_cljs$core$async28934(f__$1,blockable__$1,meta28935));
});

}

return (new cljs.core.async.t_cljs$core$async28934(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28943 = [];
var len__27054__auto___28946 = arguments.length;
var i__27055__auto___28947 = (0);
while(true){
if((i__27055__auto___28947 < len__27054__auto___28946)){
args28943.push((arguments[i__27055__auto___28947]));

var G__28948 = (i__27055__auto___28947 + (1));
i__27055__auto___28947 = G__28948;
continue;
} else {
}
break;
}

var G__28945 = args28943.length;
switch (G__28945) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28943.length)].join('')));

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
var args28950 = [];
var len__27054__auto___28953 = arguments.length;
var i__27055__auto___28954 = (0);
while(true){
if((i__27055__auto___28954 < len__27054__auto___28953)){
args28950.push((arguments[i__27055__auto___28954]));

var G__28955 = (i__27055__auto___28954 + (1));
i__27055__auto___28954 = G__28955;
continue;
} else {
}
break;
}

var G__28952 = args28950.length;
switch (G__28952) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28950.length)].join('')));

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
var args28957 = [];
var len__27054__auto___28960 = arguments.length;
var i__27055__auto___28961 = (0);
while(true){
if((i__27055__auto___28961 < len__27054__auto___28960)){
args28957.push((arguments[i__27055__auto___28961]));

var G__28962 = (i__27055__auto___28961 + (1));
i__27055__auto___28961 = G__28962;
continue;
} else {
}
break;
}

var G__28959 = args28957.length;
switch (G__28959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28957.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28964 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28964);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28964,ret){
return (function (){
return fn1.call(null,val_28964);
});})(val_28964,ret))
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
var args28965 = [];
var len__27054__auto___28968 = arguments.length;
var i__27055__auto___28969 = (0);
while(true){
if((i__27055__auto___28969 < len__27054__auto___28968)){
args28965.push((arguments[i__27055__auto___28969]));

var G__28970 = (i__27055__auto___28969 + (1));
i__27055__auto___28969 = G__28970;
continue;
} else {
}
break;
}

var G__28967 = args28965.length;
switch (G__28967) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28965.length)].join('')));

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
var n__26894__auto___28972 = n;
var x_28973 = (0);
while(true){
if((x_28973 < n__26894__auto___28972)){
(a[x_28973] = (0));

var G__28974 = (x_28973 + (1));
x_28973 = G__28974;
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

var G__28975 = (i + (1));
i = G__28975;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28979 = (function (alt_flag,flag,meta28980){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28980 = meta28980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28981,meta28980__$1){
var self__ = this;
var _28981__$1 = this;
return (new cljs.core.async.t_cljs$core$async28979(self__.alt_flag,self__.flag,meta28980__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28981){
var self__ = this;
var _28981__$1 = this;
return self__.meta28980;
});})(flag))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28979.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28980","meta28980",1629451235,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28979";

cljs.core.async.t_cljs$core$async28979.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28979");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28979 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28979(alt_flag__$1,flag__$1,meta28980){
return (new cljs.core.async.t_cljs$core$async28979(alt_flag__$1,flag__$1,meta28980));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28979(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28985 = (function (alt_handler,flag,cb,meta28986){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28986 = meta28986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28987,meta28986__$1){
var self__ = this;
var _28987__$1 = this;
return (new cljs.core.async.t_cljs$core$async28985(self__.alt_handler,self__.flag,self__.cb,meta28986__$1));
});

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28987){
var self__ = this;
var _28987__$1 = this;
return self__.meta28986;
});

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28986","meta28986",1632223767,null)], null);
});

cljs.core.async.t_cljs$core$async28985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28985";

cljs.core.async.t_cljs$core$async28985.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28985");
});

cljs.core.async.__GT_t_cljs$core$async28985 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28985(alt_handler__$1,flag__$1,cb__$1,meta28986){
return (new cljs.core.async.t_cljs$core$async28985(alt_handler__$1,flag__$1,cb__$1,meta28986));
});

}

return (new cljs.core.async.t_cljs$core$async28985(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28988_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28989_SHARP_,port], null));
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
var G__28990 = (i + (1));
i = G__28990;
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
var len__27054__auto___28996 = arguments.length;
var i__27055__auto___28997 = (0);
while(true){
if((i__27055__auto___28997 < len__27054__auto___28996)){
args__27061__auto__.push((arguments[i__27055__auto___28997]));

var G__28998 = (i__27055__auto___28997 + (1));
i__27055__auto___28997 = G__28998;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28993){
var map__28994 = p__28993;
var map__28994__$1 = ((((!((map__28994 == null)))?((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var opts = map__28994__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28991){
var G__28992 = cljs.core.first.call(null,seq28991);
var seq28991__$1 = cljs.core.next.call(null,seq28991);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28992,seq28991__$1);
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
var args28999 = [];
var len__27054__auto___29049 = arguments.length;
var i__27055__auto___29050 = (0);
while(true){
if((i__27055__auto___29050 < len__27054__auto___29049)){
args28999.push((arguments[i__27055__auto___29050]));

var G__29051 = (i__27055__auto___29050 + (1));
i__27055__auto___29050 = G__29051;
continue;
} else {
}
break;
}

var G__29001 = args28999.length;
switch (G__29001) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28999.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28886__auto___29053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___29053){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___29053){
return (function (state_29025){
var state_val_29026 = (state_29025[(1)]);
if((state_val_29026 === (7))){
var inst_29021 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29027_29054 = state_29025__$1;
(statearr_29027_29054[(2)] = inst_29021);

(statearr_29027_29054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (1))){
var state_29025__$1 = state_29025;
var statearr_29028_29055 = state_29025__$1;
(statearr_29028_29055[(2)] = null);

(statearr_29028_29055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (4))){
var inst_29004 = (state_29025[(7)]);
var inst_29004__$1 = (state_29025[(2)]);
var inst_29005 = (inst_29004__$1 == null);
var state_29025__$1 = (function (){var statearr_29029 = state_29025;
(statearr_29029[(7)] = inst_29004__$1);

return statearr_29029;
})();
if(cljs.core.truth_(inst_29005)){
var statearr_29030_29056 = state_29025__$1;
(statearr_29030_29056[(1)] = (5));

} else {
var statearr_29031_29057 = state_29025__$1;
(statearr_29031_29057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (13))){
var state_29025__$1 = state_29025;
var statearr_29032_29058 = state_29025__$1;
(statearr_29032_29058[(2)] = null);

(statearr_29032_29058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (6))){
var inst_29004 = (state_29025[(7)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29025__$1,(11),to,inst_29004);
} else {
if((state_val_29026 === (3))){
var inst_29023 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29025__$1,inst_29023);
} else {
if((state_val_29026 === (12))){
var state_29025__$1 = state_29025;
var statearr_29033_29059 = state_29025__$1;
(statearr_29033_29059[(2)] = null);

(statearr_29033_29059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (2))){
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29025__$1,(4),from);
} else {
if((state_val_29026 === (11))){
var inst_29014 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
if(cljs.core.truth_(inst_29014)){
var statearr_29034_29060 = state_29025__$1;
(statearr_29034_29060[(1)] = (12));

} else {
var statearr_29035_29061 = state_29025__$1;
(statearr_29035_29061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (9))){
var state_29025__$1 = state_29025;
var statearr_29036_29062 = state_29025__$1;
(statearr_29036_29062[(2)] = null);

(statearr_29036_29062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (5))){
var state_29025__$1 = state_29025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29037_29063 = state_29025__$1;
(statearr_29037_29063[(1)] = (8));

} else {
var statearr_29038_29064 = state_29025__$1;
(statearr_29038_29064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (14))){
var inst_29019 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29039_29065 = state_29025__$1;
(statearr_29039_29065[(2)] = inst_29019);

(statearr_29039_29065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (10))){
var inst_29011 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29040_29066 = state_29025__$1;
(statearr_29040_29066[(2)] = inst_29011);

(statearr_29040_29066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (8))){
var inst_29008 = cljs.core.async.close_BANG_.call(null,to);
var state_29025__$1 = state_29025;
var statearr_29041_29067 = state_29025__$1;
(statearr_29041_29067[(2)] = inst_29008);

(statearr_29041_29067[(1)] = (10));


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
});})(c__28886__auto___29053))
;
return ((function (switch__28774__auto__,c__28886__auto___29053){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_29045 = [null,null,null,null,null,null,null,null];
(statearr_29045[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_29045[(1)] = (1));

return statearr_29045;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_29025){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29046){if((e29046 instanceof Object)){
var ex__28778__auto__ = e29046;
var statearr_29047_29068 = state_29025;
(statearr_29047_29068[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29069 = state_29025;
state_29025 = G__29069;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_29025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_29025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___29053))
})();
var state__28888__auto__ = (function (){var statearr_29048 = f__28887__auto__.call(null);
(statearr_29048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___29053);

return statearr_29048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___29053))
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
return (function (p__29257){
var vec__29258 = p__29257;
var v = cljs.core.nth.call(null,vec__29258,(0),null);
var p = cljs.core.nth.call(null,vec__29258,(1),null);
var job = vec__29258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28886__auto___29444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___29444,res,vec__29258,v,p,job,jobs,results){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___29444,res,vec__29258,v,p,job,jobs,results){
return (function (state_29265){
var state_val_29266 = (state_29265[(1)]);
if((state_val_29266 === (1))){
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29265__$1,(2),res,v);
} else {
if((state_val_29266 === (2))){
var inst_29262 = (state_29265[(2)]);
var inst_29263 = cljs.core.async.close_BANG_.call(null,res);
var state_29265__$1 = (function (){var statearr_29267 = state_29265;
(statearr_29267[(7)] = inst_29262);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29265__$1,inst_29263);
} else {
return null;
}
}
});})(c__28886__auto___29444,res,vec__29258,v,p,job,jobs,results))
;
return ((function (switch__28774__auto__,c__28886__auto___29444,res,vec__29258,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0 = (function (){
var statearr_29271 = [null,null,null,null,null,null,null,null];
(statearr_29271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__);

(statearr_29271[(1)] = (1));

return statearr_29271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1 = (function (state_29265){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29272){if((e29272 instanceof Object)){
var ex__28778__auto__ = e29272;
var statearr_29273_29445 = state_29265;
(statearr_29273_29445[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29446 = state_29265;
state_29265 = G__29446;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = function(state_29265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1.call(this,state_29265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___29444,res,vec__29258,v,p,job,jobs,results))
})();
var state__28888__auto__ = (function (){var statearr_29274 = f__28887__auto__.call(null);
(statearr_29274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___29444);

return statearr_29274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___29444,res,vec__29258,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29275){
var vec__29276 = p__29275;
var v = cljs.core.nth.call(null,vec__29276,(0),null);
var p = cljs.core.nth.call(null,vec__29276,(1),null);
var job = vec__29276;
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
var n__26894__auto___29447 = n;
var __29448 = (0);
while(true){
if((__29448 < n__26894__auto___29447)){
var G__29279_29449 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29279_29449) {
case "compute":
var c__28886__auto___29451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29448,c__28886__auto___29451,G__29279_29449,n__26894__auto___29447,jobs,results,process,async){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (__29448,c__28886__auto___29451,G__29279_29449,n__26894__auto___29447,jobs,results,process,async){
return (function (state_29292){
var state_val_29293 = (state_29292[(1)]);
if((state_val_29293 === (1))){
var state_29292__$1 = state_29292;
var statearr_29294_29452 = state_29292__$1;
(statearr_29294_29452[(2)] = null);

(statearr_29294_29452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (2))){
var state_29292__$1 = state_29292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29292__$1,(4),jobs);
} else {
if((state_val_29293 === (3))){
var inst_29290 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29292__$1,inst_29290);
} else {
if((state_val_29293 === (4))){
var inst_29282 = (state_29292[(2)]);
var inst_29283 = process.call(null,inst_29282);
var state_29292__$1 = state_29292;
if(cljs.core.truth_(inst_29283)){
var statearr_29295_29453 = state_29292__$1;
(statearr_29295_29453[(1)] = (5));

} else {
var statearr_29296_29454 = state_29292__$1;
(statearr_29296_29454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (5))){
var state_29292__$1 = state_29292;
var statearr_29297_29455 = state_29292__$1;
(statearr_29297_29455[(2)] = null);

(statearr_29297_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (6))){
var state_29292__$1 = state_29292;
var statearr_29298_29456 = state_29292__$1;
(statearr_29298_29456[(2)] = null);

(statearr_29298_29456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (7))){
var inst_29288 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
var statearr_29299_29457 = state_29292__$1;
(statearr_29299_29457[(2)] = inst_29288);

(statearr_29299_29457[(1)] = (3));


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
});})(__29448,c__28886__auto___29451,G__29279_29449,n__26894__auto___29447,jobs,results,process,async))
;
return ((function (__29448,switch__28774__auto__,c__28886__auto___29451,G__29279_29449,n__26894__auto___29447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0 = (function (){
var statearr_29303 = [null,null,null,null,null,null,null];
(statearr_29303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__);

(statearr_29303[(1)] = (1));

return statearr_29303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1 = (function (state_29292){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29304){if((e29304 instanceof Object)){
var ex__28778__auto__ = e29304;
var statearr_29305_29458 = state_29292;
(statearr_29305_29458[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29459 = state_29292;
state_29292 = G__29459;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = function(state_29292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1.call(this,state_29292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__;
})()
;})(__29448,switch__28774__auto__,c__28886__auto___29451,G__29279_29449,n__26894__auto___29447,jobs,results,process,async))
})();
var state__28888__auto__ = (function (){var statearr_29306 = f__28887__auto__.call(null);
(statearr_29306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___29451);

return statearr_29306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(__29448,c__28886__auto___29451,G__29279_29449,n__26894__auto___29447,jobs,results,process,async))
);


break;
case "async":
var c__28886__auto___29460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29448,c__28886__auto___29460,G__29279_29449,n__26894__auto___29447,jobs,results,process,async){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (__29448,c__28886__auto___29460,G__29279_29449,n__26894__auto___29447,jobs,results,process,async){
return (function (state_29319){
var state_val_29320 = (state_29319[(1)]);
if((state_val_29320 === (1))){
var state_29319__$1 = state_29319;
var statearr_29321_29461 = state_29319__$1;
(statearr_29321_29461[(2)] = null);

(statearr_29321_29461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (2))){
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29319__$1,(4),jobs);
} else {
if((state_val_29320 === (3))){
var inst_29317 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29319__$1,inst_29317);
} else {
if((state_val_29320 === (4))){
var inst_29309 = (state_29319[(2)]);
var inst_29310 = async.call(null,inst_29309);
var state_29319__$1 = state_29319;
if(cljs.core.truth_(inst_29310)){
var statearr_29322_29462 = state_29319__$1;
(statearr_29322_29462[(1)] = (5));

} else {
var statearr_29323_29463 = state_29319__$1;
(statearr_29323_29463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (5))){
var state_29319__$1 = state_29319;
var statearr_29324_29464 = state_29319__$1;
(statearr_29324_29464[(2)] = null);

(statearr_29324_29464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (6))){
var state_29319__$1 = state_29319;
var statearr_29325_29465 = state_29319__$1;
(statearr_29325_29465[(2)] = null);

(statearr_29325_29465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29320 === (7))){
var inst_29315 = (state_29319[(2)]);
var state_29319__$1 = state_29319;
var statearr_29326_29466 = state_29319__$1;
(statearr_29326_29466[(2)] = inst_29315);

(statearr_29326_29466[(1)] = (3));


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
});})(__29448,c__28886__auto___29460,G__29279_29449,n__26894__auto___29447,jobs,results,process,async))
;
return ((function (__29448,switch__28774__auto__,c__28886__auto___29460,G__29279_29449,n__26894__auto___29447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0 = (function (){
var statearr_29330 = [null,null,null,null,null,null,null];
(statearr_29330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__);

(statearr_29330[(1)] = (1));

return statearr_29330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1 = (function (state_29319){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29331){if((e29331 instanceof Object)){
var ex__28778__auto__ = e29331;
var statearr_29332_29467 = state_29319;
(statearr_29332_29467[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29468 = state_29319;
state_29319 = G__29468;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = function(state_29319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1.call(this,state_29319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__;
})()
;})(__29448,switch__28774__auto__,c__28886__auto___29460,G__29279_29449,n__26894__auto___29447,jobs,results,process,async))
})();
var state__28888__auto__ = (function (){var statearr_29333 = f__28887__auto__.call(null);
(statearr_29333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___29460);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(__29448,c__28886__auto___29460,G__29279_29449,n__26894__auto___29447,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29469 = (__29448 + (1));
__29448 = G__29469;
continue;
} else {
}
break;
}

var c__28886__auto___29470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___29470,jobs,results,process,async){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___29470,jobs,results,process,async){
return (function (state_29355){
var state_val_29356 = (state_29355[(1)]);
if((state_val_29356 === (1))){
var state_29355__$1 = state_29355;
var statearr_29357_29471 = state_29355__$1;
(statearr_29357_29471[(2)] = null);

(statearr_29357_29471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (2))){
var state_29355__$1 = state_29355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29355__$1,(4),from);
} else {
if((state_val_29356 === (3))){
var inst_29353 = (state_29355[(2)]);
var state_29355__$1 = state_29355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29355__$1,inst_29353);
} else {
if((state_val_29356 === (4))){
var inst_29336 = (state_29355[(7)]);
var inst_29336__$1 = (state_29355[(2)]);
var inst_29337 = (inst_29336__$1 == null);
var state_29355__$1 = (function (){var statearr_29358 = state_29355;
(statearr_29358[(7)] = inst_29336__$1);

return statearr_29358;
})();
if(cljs.core.truth_(inst_29337)){
var statearr_29359_29472 = state_29355__$1;
(statearr_29359_29472[(1)] = (5));

} else {
var statearr_29360_29473 = state_29355__$1;
(statearr_29360_29473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (5))){
var inst_29339 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29355__$1 = state_29355;
var statearr_29361_29474 = state_29355__$1;
(statearr_29361_29474[(2)] = inst_29339);

(statearr_29361_29474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (6))){
var inst_29336 = (state_29355[(7)]);
var inst_29341 = (state_29355[(8)]);
var inst_29341__$1 = cljs.core.async.chan.call(null,(1));
var inst_29342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29343 = [inst_29336,inst_29341__$1];
var inst_29344 = (new cljs.core.PersistentVector(null,2,(5),inst_29342,inst_29343,null));
var state_29355__$1 = (function (){var statearr_29362 = state_29355;
(statearr_29362[(8)] = inst_29341__$1);

return statearr_29362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29355__$1,(8),jobs,inst_29344);
} else {
if((state_val_29356 === (7))){
var inst_29351 = (state_29355[(2)]);
var state_29355__$1 = state_29355;
var statearr_29363_29475 = state_29355__$1;
(statearr_29363_29475[(2)] = inst_29351);

(statearr_29363_29475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (8))){
var inst_29341 = (state_29355[(8)]);
var inst_29346 = (state_29355[(2)]);
var state_29355__$1 = (function (){var statearr_29364 = state_29355;
(statearr_29364[(9)] = inst_29346);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29355__$1,(9),results,inst_29341);
} else {
if((state_val_29356 === (9))){
var inst_29348 = (state_29355[(2)]);
var state_29355__$1 = (function (){var statearr_29365 = state_29355;
(statearr_29365[(10)] = inst_29348);

return statearr_29365;
})();
var statearr_29366_29476 = state_29355__$1;
(statearr_29366_29476[(2)] = null);

(statearr_29366_29476[(1)] = (2));


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
});})(c__28886__auto___29470,jobs,results,process,async))
;
return ((function (switch__28774__auto__,c__28886__auto___29470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0 = (function (){
var statearr_29370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__);

(statearr_29370[(1)] = (1));

return statearr_29370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1 = (function (state_29355){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29371){if((e29371 instanceof Object)){
var ex__28778__auto__ = e29371;
var statearr_29372_29477 = state_29355;
(statearr_29372_29477[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29478 = state_29355;
state_29355 = G__29478;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = function(state_29355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1.call(this,state_29355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___29470,jobs,results,process,async))
})();
var state__28888__auto__ = (function (){var statearr_29373 = f__28887__auto__.call(null);
(statearr_29373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___29470);

return statearr_29373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___29470,jobs,results,process,async))
);


var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__,jobs,results,process,async){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__,jobs,results,process,async){
return (function (state_29411){
var state_val_29412 = (state_29411[(1)]);
if((state_val_29412 === (7))){
var inst_29407 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29413_29479 = state_29411__$1;
(statearr_29413_29479[(2)] = inst_29407);

(statearr_29413_29479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (20))){
var state_29411__$1 = state_29411;
var statearr_29414_29480 = state_29411__$1;
(statearr_29414_29480[(2)] = null);

(statearr_29414_29480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (1))){
var state_29411__$1 = state_29411;
var statearr_29415_29481 = state_29411__$1;
(statearr_29415_29481[(2)] = null);

(statearr_29415_29481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (4))){
var inst_29376 = (state_29411[(7)]);
var inst_29376__$1 = (state_29411[(2)]);
var inst_29377 = (inst_29376__$1 == null);
var state_29411__$1 = (function (){var statearr_29416 = state_29411;
(statearr_29416[(7)] = inst_29376__$1);

return statearr_29416;
})();
if(cljs.core.truth_(inst_29377)){
var statearr_29417_29482 = state_29411__$1;
(statearr_29417_29482[(1)] = (5));

} else {
var statearr_29418_29483 = state_29411__$1;
(statearr_29418_29483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (15))){
var inst_29389 = (state_29411[(8)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29411__$1,(18),to,inst_29389);
} else {
if((state_val_29412 === (21))){
var inst_29402 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29419_29484 = state_29411__$1;
(statearr_29419_29484[(2)] = inst_29402);

(statearr_29419_29484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (13))){
var inst_29404 = (state_29411[(2)]);
var state_29411__$1 = (function (){var statearr_29420 = state_29411;
(statearr_29420[(9)] = inst_29404);

return statearr_29420;
})();
var statearr_29421_29485 = state_29411__$1;
(statearr_29421_29485[(2)] = null);

(statearr_29421_29485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (6))){
var inst_29376 = (state_29411[(7)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(11),inst_29376);
} else {
if((state_val_29412 === (17))){
var inst_29397 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
if(cljs.core.truth_(inst_29397)){
var statearr_29422_29486 = state_29411__$1;
(statearr_29422_29486[(1)] = (19));

} else {
var statearr_29423_29487 = state_29411__$1;
(statearr_29423_29487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (3))){
var inst_29409 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29411__$1,inst_29409);
} else {
if((state_val_29412 === (12))){
var inst_29386 = (state_29411[(10)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(14),inst_29386);
} else {
if((state_val_29412 === (2))){
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(4),results);
} else {
if((state_val_29412 === (19))){
var state_29411__$1 = state_29411;
var statearr_29424_29488 = state_29411__$1;
(statearr_29424_29488[(2)] = null);

(statearr_29424_29488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (11))){
var inst_29386 = (state_29411[(2)]);
var state_29411__$1 = (function (){var statearr_29425 = state_29411;
(statearr_29425[(10)] = inst_29386);

return statearr_29425;
})();
var statearr_29426_29489 = state_29411__$1;
(statearr_29426_29489[(2)] = null);

(statearr_29426_29489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (9))){
var state_29411__$1 = state_29411;
var statearr_29427_29490 = state_29411__$1;
(statearr_29427_29490[(2)] = null);

(statearr_29427_29490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (5))){
var state_29411__$1 = state_29411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29428_29491 = state_29411__$1;
(statearr_29428_29491[(1)] = (8));

} else {
var statearr_29429_29492 = state_29411__$1;
(statearr_29429_29492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (14))){
var inst_29391 = (state_29411[(11)]);
var inst_29389 = (state_29411[(8)]);
var inst_29389__$1 = (state_29411[(2)]);
var inst_29390 = (inst_29389__$1 == null);
var inst_29391__$1 = cljs.core.not.call(null,inst_29390);
var state_29411__$1 = (function (){var statearr_29430 = state_29411;
(statearr_29430[(11)] = inst_29391__$1);

(statearr_29430[(8)] = inst_29389__$1);

return statearr_29430;
})();
if(inst_29391__$1){
var statearr_29431_29493 = state_29411__$1;
(statearr_29431_29493[(1)] = (15));

} else {
var statearr_29432_29494 = state_29411__$1;
(statearr_29432_29494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (16))){
var inst_29391 = (state_29411[(11)]);
var state_29411__$1 = state_29411;
var statearr_29433_29495 = state_29411__$1;
(statearr_29433_29495[(2)] = inst_29391);

(statearr_29433_29495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (10))){
var inst_29383 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29434_29496 = state_29411__$1;
(statearr_29434_29496[(2)] = inst_29383);

(statearr_29434_29496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (18))){
var inst_29394 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29435_29497 = state_29411__$1;
(statearr_29435_29497[(2)] = inst_29394);

(statearr_29435_29497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (8))){
var inst_29380 = cljs.core.async.close_BANG_.call(null,to);
var state_29411__$1 = state_29411;
var statearr_29436_29498 = state_29411__$1;
(statearr_29436_29498[(2)] = inst_29380);

(statearr_29436_29498[(1)] = (10));


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
});})(c__28886__auto__,jobs,results,process,async))
;
return ((function (switch__28774__auto__,c__28886__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0 = (function (){
var statearr_29440 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__);

(statearr_29440[(1)] = (1));

return statearr_29440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1 = (function (state_29411){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29441){if((e29441 instanceof Object)){
var ex__28778__auto__ = e29441;
var statearr_29442_29499 = state_29411;
(statearr_29442_29499[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29500 = state_29411;
state_29411 = G__29500;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__ = function(state_29411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1.call(this,state_29411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__,jobs,results,process,async))
})();
var state__28888__auto__ = (function (){var statearr_29443 = f__28887__auto__.call(null);
(statearr_29443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__,jobs,results,process,async))
);

return c__28886__auto__;
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
var args29501 = [];
var len__27054__auto___29504 = arguments.length;
var i__27055__auto___29505 = (0);
while(true){
if((i__27055__auto___29505 < len__27054__auto___29504)){
args29501.push((arguments[i__27055__auto___29505]));

var G__29506 = (i__27055__auto___29505 + (1));
i__27055__auto___29505 = G__29506;
continue;
} else {
}
break;
}

var G__29503 = args29501.length;
switch (G__29503) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29501.length)].join('')));

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
var args29508 = [];
var len__27054__auto___29511 = arguments.length;
var i__27055__auto___29512 = (0);
while(true){
if((i__27055__auto___29512 < len__27054__auto___29511)){
args29508.push((arguments[i__27055__auto___29512]));

var G__29513 = (i__27055__auto___29512 + (1));
i__27055__auto___29512 = G__29513;
continue;
} else {
}
break;
}

var G__29510 = args29508.length;
switch (G__29510) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29508.length)].join('')));

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
var args29515 = [];
var len__27054__auto___29568 = arguments.length;
var i__27055__auto___29569 = (0);
while(true){
if((i__27055__auto___29569 < len__27054__auto___29568)){
args29515.push((arguments[i__27055__auto___29569]));

var G__29570 = (i__27055__auto___29569 + (1));
i__27055__auto___29569 = G__29570;
continue;
} else {
}
break;
}

var G__29517 = args29515.length;
switch (G__29517) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29515.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28886__auto___29572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___29572,tc,fc){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___29572,tc,fc){
return (function (state_29543){
var state_val_29544 = (state_29543[(1)]);
if((state_val_29544 === (7))){
var inst_29539 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29545_29573 = state_29543__$1;
(statearr_29545_29573[(2)] = inst_29539);

(statearr_29545_29573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (1))){
var state_29543__$1 = state_29543;
var statearr_29546_29574 = state_29543__$1;
(statearr_29546_29574[(2)] = null);

(statearr_29546_29574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (4))){
var inst_29520 = (state_29543[(7)]);
var inst_29520__$1 = (state_29543[(2)]);
var inst_29521 = (inst_29520__$1 == null);
var state_29543__$1 = (function (){var statearr_29547 = state_29543;
(statearr_29547[(7)] = inst_29520__$1);

return statearr_29547;
})();
if(cljs.core.truth_(inst_29521)){
var statearr_29548_29575 = state_29543__$1;
(statearr_29548_29575[(1)] = (5));

} else {
var statearr_29549_29576 = state_29543__$1;
(statearr_29549_29576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (13))){
var state_29543__$1 = state_29543;
var statearr_29550_29577 = state_29543__$1;
(statearr_29550_29577[(2)] = null);

(statearr_29550_29577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (6))){
var inst_29520 = (state_29543[(7)]);
var inst_29526 = p.call(null,inst_29520);
var state_29543__$1 = state_29543;
if(cljs.core.truth_(inst_29526)){
var statearr_29551_29578 = state_29543__$1;
(statearr_29551_29578[(1)] = (9));

} else {
var statearr_29552_29579 = state_29543__$1;
(statearr_29552_29579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (3))){
var inst_29541 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29543__$1,inst_29541);
} else {
if((state_val_29544 === (12))){
var state_29543__$1 = state_29543;
var statearr_29553_29580 = state_29543__$1;
(statearr_29553_29580[(2)] = null);

(statearr_29553_29580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (2))){
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29543__$1,(4),ch);
} else {
if((state_val_29544 === (11))){
var inst_29520 = (state_29543[(7)]);
var inst_29530 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29543__$1,(8),inst_29530,inst_29520);
} else {
if((state_val_29544 === (9))){
var state_29543__$1 = state_29543;
var statearr_29554_29581 = state_29543__$1;
(statearr_29554_29581[(2)] = tc);

(statearr_29554_29581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (5))){
var inst_29523 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29524 = cljs.core.async.close_BANG_.call(null,fc);
var state_29543__$1 = (function (){var statearr_29555 = state_29543;
(statearr_29555[(8)] = inst_29523);

return statearr_29555;
})();
var statearr_29556_29582 = state_29543__$1;
(statearr_29556_29582[(2)] = inst_29524);

(statearr_29556_29582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (14))){
var inst_29537 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29557_29583 = state_29543__$1;
(statearr_29557_29583[(2)] = inst_29537);

(statearr_29557_29583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (10))){
var state_29543__$1 = state_29543;
var statearr_29558_29584 = state_29543__$1;
(statearr_29558_29584[(2)] = fc);

(statearr_29558_29584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (8))){
var inst_29532 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
if(cljs.core.truth_(inst_29532)){
var statearr_29559_29585 = state_29543__$1;
(statearr_29559_29585[(1)] = (12));

} else {
var statearr_29560_29586 = state_29543__$1;
(statearr_29560_29586[(1)] = (13));

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
});})(c__28886__auto___29572,tc,fc))
;
return ((function (switch__28774__auto__,c__28886__auto___29572,tc,fc){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_29564 = [null,null,null,null,null,null,null,null,null];
(statearr_29564[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_29564[(1)] = (1));

return statearr_29564;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_29543){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29565){if((e29565 instanceof Object)){
var ex__28778__auto__ = e29565;
var statearr_29566_29587 = state_29543;
(statearr_29566_29587[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29588 = state_29543;
state_29543 = G__29588;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_29543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_29543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___29572,tc,fc))
})();
var state__28888__auto__ = (function (){var statearr_29567 = f__28887__auto__.call(null);
(statearr_29567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___29572);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___29572,tc,fc))
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
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__){
return (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (7))){
var inst_29648 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29654_29675 = state_29652__$1;
(statearr_29654_29675[(2)] = inst_29648);

(statearr_29654_29675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var inst_29632 = init;
var state_29652__$1 = (function (){var statearr_29655 = state_29652;
(statearr_29655[(7)] = inst_29632);

return statearr_29655;
})();
var statearr_29656_29676 = state_29652__$1;
(statearr_29656_29676[(2)] = null);

(statearr_29656_29676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29635 = (state_29652[(8)]);
var inst_29635__$1 = (state_29652[(2)]);
var inst_29636 = (inst_29635__$1 == null);
var state_29652__$1 = (function (){var statearr_29657 = state_29652;
(statearr_29657[(8)] = inst_29635__$1);

return statearr_29657;
})();
if(cljs.core.truth_(inst_29636)){
var statearr_29658_29677 = state_29652__$1;
(statearr_29658_29677[(1)] = (5));

} else {
var statearr_29659_29678 = state_29652__$1;
(statearr_29659_29678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var inst_29632 = (state_29652[(7)]);
var inst_29635 = (state_29652[(8)]);
var inst_29639 = (state_29652[(9)]);
var inst_29639__$1 = f.call(null,inst_29632,inst_29635);
var inst_29640 = cljs.core.reduced_QMARK_.call(null,inst_29639__$1);
var state_29652__$1 = (function (){var statearr_29660 = state_29652;
(statearr_29660[(9)] = inst_29639__$1);

return statearr_29660;
})();
if(inst_29640){
var statearr_29661_29679 = state_29652__$1;
(statearr_29661_29679[(1)] = (8));

} else {
var statearr_29662_29680 = state_29652__$1;
(statearr_29662_29680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29650 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (2))){
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29652__$1,(4),ch);
} else {
if((state_val_29653 === (9))){
var inst_29639 = (state_29652[(9)]);
var inst_29632 = inst_29639;
var state_29652__$1 = (function (){var statearr_29663 = state_29652;
(statearr_29663[(7)] = inst_29632);

return statearr_29663;
})();
var statearr_29664_29681 = state_29652__$1;
(statearr_29664_29681[(2)] = null);

(statearr_29664_29681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (5))){
var inst_29632 = (state_29652[(7)]);
var state_29652__$1 = state_29652;
var statearr_29665_29682 = state_29652__$1;
(statearr_29665_29682[(2)] = inst_29632);

(statearr_29665_29682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29646 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29666_29683 = state_29652__$1;
(statearr_29666_29683[(2)] = inst_29646);

(statearr_29666_29683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29639 = (state_29652[(9)]);
var inst_29642 = cljs.core.deref.call(null,inst_29639);
var state_29652__$1 = state_29652;
var statearr_29667_29684 = state_29652__$1;
(statearr_29667_29684[(2)] = inst_29642);

(statearr_29667_29684[(1)] = (10));


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
});})(c__28886__auto__))
;
return ((function (switch__28774__auto__,c__28886__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28775__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28775__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29671[(0)] = cljs$core$async$reduce_$_state_machine__28775__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var cljs$core$async$reduce_$_state_machine__28775__auto____1 = (function (state_29652){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29672){if((e29672 instanceof Object)){
var ex__28778__auto__ = e29672;
var statearr_29673_29685 = state_29652;
(statearr_29673_29685[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29686 = state_29652;
state_29652 = G__29686;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28775__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28775__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28775__auto____0;
cljs$core$async$reduce_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28775__auto____1;
return cljs$core$async$reduce_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__))
})();
var state__28888__auto__ = (function (){var statearr_29674 = f__28887__auto__.call(null);
(statearr_29674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__))
);

return c__28886__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__,f__$1){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__,f__$1){
return (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (1))){
var inst_29701 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(2),inst_29701);
} else {
if((state_val_29707 === (2))){
var inst_29703 = (state_29706[(2)]);
var inst_29704 = f__$1.call(null,inst_29703);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
return null;
}
}
});})(c__28886__auto__,f__$1))
;
return ((function (switch__28774__auto__,c__28886__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28775__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28775__auto____0 = (function (){
var statearr_29711 = [null,null,null,null,null,null,null];
(statearr_29711[(0)] = cljs$core$async$transduce_$_state_machine__28775__auto__);

(statearr_29711[(1)] = (1));

return statearr_29711;
});
var cljs$core$async$transduce_$_state_machine__28775__auto____1 = (function (state_29706){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29712){if((e29712 instanceof Object)){
var ex__28778__auto__ = e29712;
var statearr_29713_29715 = state_29706;
(statearr_29713_29715[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29716 = state_29706;
state_29706 = G__29716;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28775__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28775__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28775__auto____0;
cljs$core$async$transduce_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28775__auto____1;
return cljs$core$async$transduce_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__,f__$1))
})();
var state__28888__auto__ = (function (){var statearr_29714 = f__28887__auto__.call(null);
(statearr_29714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__,f__$1))
);

return c__28886__auto__;
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
var args29717 = [];
var len__27054__auto___29769 = arguments.length;
var i__27055__auto___29770 = (0);
while(true){
if((i__27055__auto___29770 < len__27054__auto___29769)){
args29717.push((arguments[i__27055__auto___29770]));

var G__29771 = (i__27055__auto___29770 + (1));
i__27055__auto___29770 = G__29771;
continue;
} else {
}
break;
}

var G__29719 = args29717.length;
switch (G__29719) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29717.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__){
return (function (state_29744){
var state_val_29745 = (state_29744[(1)]);
if((state_val_29745 === (7))){
var inst_29726 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29746_29773 = state_29744__$1;
(statearr_29746_29773[(2)] = inst_29726);

(statearr_29746_29773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (1))){
var inst_29720 = cljs.core.seq.call(null,coll);
var inst_29721 = inst_29720;
var state_29744__$1 = (function (){var statearr_29747 = state_29744;
(statearr_29747[(7)] = inst_29721);

return statearr_29747;
})();
var statearr_29748_29774 = state_29744__$1;
(statearr_29748_29774[(2)] = null);

(statearr_29748_29774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (4))){
var inst_29721 = (state_29744[(7)]);
var inst_29724 = cljs.core.first.call(null,inst_29721);
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29744__$1,(7),ch,inst_29724);
} else {
if((state_val_29745 === (13))){
var inst_29738 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29749_29775 = state_29744__$1;
(statearr_29749_29775[(2)] = inst_29738);

(statearr_29749_29775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (6))){
var inst_29729 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
if(cljs.core.truth_(inst_29729)){
var statearr_29750_29776 = state_29744__$1;
(statearr_29750_29776[(1)] = (8));

} else {
var statearr_29751_29777 = state_29744__$1;
(statearr_29751_29777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (3))){
var inst_29742 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29744__$1,inst_29742);
} else {
if((state_val_29745 === (12))){
var state_29744__$1 = state_29744;
var statearr_29752_29778 = state_29744__$1;
(statearr_29752_29778[(2)] = null);

(statearr_29752_29778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (2))){
var inst_29721 = (state_29744[(7)]);
var state_29744__$1 = state_29744;
if(cljs.core.truth_(inst_29721)){
var statearr_29753_29779 = state_29744__$1;
(statearr_29753_29779[(1)] = (4));

} else {
var statearr_29754_29780 = state_29744__$1;
(statearr_29754_29780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (11))){
var inst_29735 = cljs.core.async.close_BANG_.call(null,ch);
var state_29744__$1 = state_29744;
var statearr_29755_29781 = state_29744__$1;
(statearr_29755_29781[(2)] = inst_29735);

(statearr_29755_29781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (9))){
var state_29744__$1 = state_29744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29756_29782 = state_29744__$1;
(statearr_29756_29782[(1)] = (11));

} else {
var statearr_29757_29783 = state_29744__$1;
(statearr_29757_29783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (5))){
var inst_29721 = (state_29744[(7)]);
var state_29744__$1 = state_29744;
var statearr_29758_29784 = state_29744__$1;
(statearr_29758_29784[(2)] = inst_29721);

(statearr_29758_29784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (10))){
var inst_29740 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29759_29785 = state_29744__$1;
(statearr_29759_29785[(2)] = inst_29740);

(statearr_29759_29785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (8))){
var inst_29721 = (state_29744[(7)]);
var inst_29731 = cljs.core.next.call(null,inst_29721);
var inst_29721__$1 = inst_29731;
var state_29744__$1 = (function (){var statearr_29760 = state_29744;
(statearr_29760[(7)] = inst_29721__$1);

return statearr_29760;
})();
var statearr_29761_29786 = state_29744__$1;
(statearr_29761_29786[(2)] = null);

(statearr_29761_29786[(1)] = (2));


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
});})(c__28886__auto__))
;
return ((function (switch__28774__auto__,c__28886__auto__){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_29765 = [null,null,null,null,null,null,null,null];
(statearr_29765[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_29765[(1)] = (1));

return statearr_29765;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_29744){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_29744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e29766){if((e29766 instanceof Object)){
var ex__28778__auto__ = e29766;
var statearr_29767_29787 = state_29744;
(statearr_29767_29787[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_29744;
state_29744 = G__29788;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_29744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_29744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__))
})();
var state__28888__auto__ = (function (){var statearr_29768 = f__28887__auto__.call(null);
(statearr_29768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_29768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__))
);

return c__28886__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30014 = (function (mult,ch,cs,meta30015){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30015 = meta30015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30016,meta30015__$1){
var self__ = this;
var _30016__$1 = this;
return (new cljs.core.async.t_cljs$core$async30014(self__.mult,self__.ch,self__.cs,meta30015__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30016){
var self__ = this;
var _30016__$1 = this;
return self__.meta30015;
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30015","meta30015",1959197601,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30014";

cljs.core.async.t_cljs$core$async30014.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30014");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30014 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30014(mult__$1,ch__$1,cs__$1,meta30015){
return (new cljs.core.async.t_cljs$core$async30014(mult__$1,ch__$1,cs__$1,meta30015));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30014(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28886__auto___30239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___30239,cs,m,dchan,dctr,done){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___30239,cs,m,dchan,dctr,done){
return (function (state_30151){
var state_val_30152 = (state_30151[(1)]);
if((state_val_30152 === (7))){
var inst_30147 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30153_30240 = state_30151__$1;
(statearr_30153_30240[(2)] = inst_30147);

(statearr_30153_30240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (20))){
var inst_30050 = (state_30151[(7)]);
var inst_30062 = cljs.core.first.call(null,inst_30050);
var inst_30063 = cljs.core.nth.call(null,inst_30062,(0),null);
var inst_30064 = cljs.core.nth.call(null,inst_30062,(1),null);
var state_30151__$1 = (function (){var statearr_30154 = state_30151;
(statearr_30154[(8)] = inst_30063);

return statearr_30154;
})();
if(cljs.core.truth_(inst_30064)){
var statearr_30155_30241 = state_30151__$1;
(statearr_30155_30241[(1)] = (22));

} else {
var statearr_30156_30242 = state_30151__$1;
(statearr_30156_30242[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (27))){
var inst_30099 = (state_30151[(9)]);
var inst_30092 = (state_30151[(10)]);
var inst_30094 = (state_30151[(11)]);
var inst_30019 = (state_30151[(12)]);
var inst_30099__$1 = cljs.core._nth.call(null,inst_30092,inst_30094);
var inst_30100 = cljs.core.async.put_BANG_.call(null,inst_30099__$1,inst_30019,done);
var state_30151__$1 = (function (){var statearr_30157 = state_30151;
(statearr_30157[(9)] = inst_30099__$1);

return statearr_30157;
})();
if(cljs.core.truth_(inst_30100)){
var statearr_30158_30243 = state_30151__$1;
(statearr_30158_30243[(1)] = (30));

} else {
var statearr_30159_30244 = state_30151__$1;
(statearr_30159_30244[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (1))){
var state_30151__$1 = state_30151;
var statearr_30160_30245 = state_30151__$1;
(statearr_30160_30245[(2)] = null);

(statearr_30160_30245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (24))){
var inst_30050 = (state_30151[(7)]);
var inst_30069 = (state_30151[(2)]);
var inst_30070 = cljs.core.next.call(null,inst_30050);
var inst_30028 = inst_30070;
var inst_30029 = null;
var inst_30030 = (0);
var inst_30031 = (0);
var state_30151__$1 = (function (){var statearr_30161 = state_30151;
(statearr_30161[(13)] = inst_30028);

(statearr_30161[(14)] = inst_30031);

(statearr_30161[(15)] = inst_30030);

(statearr_30161[(16)] = inst_30029);

(statearr_30161[(17)] = inst_30069);

return statearr_30161;
})();
var statearr_30162_30246 = state_30151__$1;
(statearr_30162_30246[(2)] = null);

(statearr_30162_30246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (39))){
var state_30151__$1 = state_30151;
var statearr_30166_30247 = state_30151__$1;
(statearr_30166_30247[(2)] = null);

(statearr_30166_30247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (4))){
var inst_30019 = (state_30151[(12)]);
var inst_30019__$1 = (state_30151[(2)]);
var inst_30020 = (inst_30019__$1 == null);
var state_30151__$1 = (function (){var statearr_30167 = state_30151;
(statearr_30167[(12)] = inst_30019__$1);

return statearr_30167;
})();
if(cljs.core.truth_(inst_30020)){
var statearr_30168_30248 = state_30151__$1;
(statearr_30168_30248[(1)] = (5));

} else {
var statearr_30169_30249 = state_30151__$1;
(statearr_30169_30249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (15))){
var inst_30028 = (state_30151[(13)]);
var inst_30031 = (state_30151[(14)]);
var inst_30030 = (state_30151[(15)]);
var inst_30029 = (state_30151[(16)]);
var inst_30046 = (state_30151[(2)]);
var inst_30047 = (inst_30031 + (1));
var tmp30163 = inst_30028;
var tmp30164 = inst_30030;
var tmp30165 = inst_30029;
var inst_30028__$1 = tmp30163;
var inst_30029__$1 = tmp30165;
var inst_30030__$1 = tmp30164;
var inst_30031__$1 = inst_30047;
var state_30151__$1 = (function (){var statearr_30170 = state_30151;
(statearr_30170[(13)] = inst_30028__$1);

(statearr_30170[(14)] = inst_30031__$1);

(statearr_30170[(15)] = inst_30030__$1);

(statearr_30170[(18)] = inst_30046);

(statearr_30170[(16)] = inst_30029__$1);

return statearr_30170;
})();
var statearr_30171_30250 = state_30151__$1;
(statearr_30171_30250[(2)] = null);

(statearr_30171_30250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (21))){
var inst_30073 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30175_30251 = state_30151__$1;
(statearr_30175_30251[(2)] = inst_30073);

(statearr_30175_30251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (31))){
var inst_30099 = (state_30151[(9)]);
var inst_30103 = done.call(null,null);
var inst_30104 = cljs.core.async.untap_STAR_.call(null,m,inst_30099);
var state_30151__$1 = (function (){var statearr_30176 = state_30151;
(statearr_30176[(19)] = inst_30103);

return statearr_30176;
})();
var statearr_30177_30252 = state_30151__$1;
(statearr_30177_30252[(2)] = inst_30104);

(statearr_30177_30252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (32))){
var inst_30093 = (state_30151[(20)]);
var inst_30092 = (state_30151[(10)]);
var inst_30094 = (state_30151[(11)]);
var inst_30091 = (state_30151[(21)]);
var inst_30106 = (state_30151[(2)]);
var inst_30107 = (inst_30094 + (1));
var tmp30172 = inst_30093;
var tmp30173 = inst_30092;
var tmp30174 = inst_30091;
var inst_30091__$1 = tmp30174;
var inst_30092__$1 = tmp30173;
var inst_30093__$1 = tmp30172;
var inst_30094__$1 = inst_30107;
var state_30151__$1 = (function (){var statearr_30178 = state_30151;
(statearr_30178[(20)] = inst_30093__$1);

(statearr_30178[(10)] = inst_30092__$1);

(statearr_30178[(11)] = inst_30094__$1);

(statearr_30178[(21)] = inst_30091__$1);

(statearr_30178[(22)] = inst_30106);

return statearr_30178;
})();
var statearr_30179_30253 = state_30151__$1;
(statearr_30179_30253[(2)] = null);

(statearr_30179_30253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (40))){
var inst_30119 = (state_30151[(23)]);
var inst_30123 = done.call(null,null);
var inst_30124 = cljs.core.async.untap_STAR_.call(null,m,inst_30119);
var state_30151__$1 = (function (){var statearr_30180 = state_30151;
(statearr_30180[(24)] = inst_30123);

return statearr_30180;
})();
var statearr_30181_30254 = state_30151__$1;
(statearr_30181_30254[(2)] = inst_30124);

(statearr_30181_30254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (33))){
var inst_30110 = (state_30151[(25)]);
var inst_30112 = cljs.core.chunked_seq_QMARK_.call(null,inst_30110);
var state_30151__$1 = state_30151;
if(inst_30112){
var statearr_30182_30255 = state_30151__$1;
(statearr_30182_30255[(1)] = (36));

} else {
var statearr_30183_30256 = state_30151__$1;
(statearr_30183_30256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (13))){
var inst_30040 = (state_30151[(26)]);
var inst_30043 = cljs.core.async.close_BANG_.call(null,inst_30040);
var state_30151__$1 = state_30151;
var statearr_30184_30257 = state_30151__$1;
(statearr_30184_30257[(2)] = inst_30043);

(statearr_30184_30257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (22))){
var inst_30063 = (state_30151[(8)]);
var inst_30066 = cljs.core.async.close_BANG_.call(null,inst_30063);
var state_30151__$1 = state_30151;
var statearr_30185_30258 = state_30151__$1;
(statearr_30185_30258[(2)] = inst_30066);

(statearr_30185_30258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (36))){
var inst_30110 = (state_30151[(25)]);
var inst_30114 = cljs.core.chunk_first.call(null,inst_30110);
var inst_30115 = cljs.core.chunk_rest.call(null,inst_30110);
var inst_30116 = cljs.core.count.call(null,inst_30114);
var inst_30091 = inst_30115;
var inst_30092 = inst_30114;
var inst_30093 = inst_30116;
var inst_30094 = (0);
var state_30151__$1 = (function (){var statearr_30186 = state_30151;
(statearr_30186[(20)] = inst_30093);

(statearr_30186[(10)] = inst_30092);

(statearr_30186[(11)] = inst_30094);

(statearr_30186[(21)] = inst_30091);

return statearr_30186;
})();
var statearr_30187_30259 = state_30151__$1;
(statearr_30187_30259[(2)] = null);

(statearr_30187_30259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (41))){
var inst_30110 = (state_30151[(25)]);
var inst_30126 = (state_30151[(2)]);
var inst_30127 = cljs.core.next.call(null,inst_30110);
var inst_30091 = inst_30127;
var inst_30092 = null;
var inst_30093 = (0);
var inst_30094 = (0);
var state_30151__$1 = (function (){var statearr_30188 = state_30151;
(statearr_30188[(20)] = inst_30093);

(statearr_30188[(10)] = inst_30092);

(statearr_30188[(27)] = inst_30126);

(statearr_30188[(11)] = inst_30094);

(statearr_30188[(21)] = inst_30091);

return statearr_30188;
})();
var statearr_30189_30260 = state_30151__$1;
(statearr_30189_30260[(2)] = null);

(statearr_30189_30260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (43))){
var state_30151__$1 = state_30151;
var statearr_30190_30261 = state_30151__$1;
(statearr_30190_30261[(2)] = null);

(statearr_30190_30261[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (29))){
var inst_30135 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30191_30262 = state_30151__$1;
(statearr_30191_30262[(2)] = inst_30135);

(statearr_30191_30262[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (44))){
var inst_30144 = (state_30151[(2)]);
var state_30151__$1 = (function (){var statearr_30192 = state_30151;
(statearr_30192[(28)] = inst_30144);

return statearr_30192;
})();
var statearr_30193_30263 = state_30151__$1;
(statearr_30193_30263[(2)] = null);

(statearr_30193_30263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (6))){
var inst_30083 = (state_30151[(29)]);
var inst_30082 = cljs.core.deref.call(null,cs);
var inst_30083__$1 = cljs.core.keys.call(null,inst_30082);
var inst_30084 = cljs.core.count.call(null,inst_30083__$1);
var inst_30085 = cljs.core.reset_BANG_.call(null,dctr,inst_30084);
var inst_30090 = cljs.core.seq.call(null,inst_30083__$1);
var inst_30091 = inst_30090;
var inst_30092 = null;
var inst_30093 = (0);
var inst_30094 = (0);
var state_30151__$1 = (function (){var statearr_30194 = state_30151;
(statearr_30194[(30)] = inst_30085);

(statearr_30194[(29)] = inst_30083__$1);

(statearr_30194[(20)] = inst_30093);

(statearr_30194[(10)] = inst_30092);

(statearr_30194[(11)] = inst_30094);

(statearr_30194[(21)] = inst_30091);

return statearr_30194;
})();
var statearr_30195_30264 = state_30151__$1;
(statearr_30195_30264[(2)] = null);

(statearr_30195_30264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (28))){
var inst_30110 = (state_30151[(25)]);
var inst_30091 = (state_30151[(21)]);
var inst_30110__$1 = cljs.core.seq.call(null,inst_30091);
var state_30151__$1 = (function (){var statearr_30196 = state_30151;
(statearr_30196[(25)] = inst_30110__$1);

return statearr_30196;
})();
if(inst_30110__$1){
var statearr_30197_30265 = state_30151__$1;
(statearr_30197_30265[(1)] = (33));

} else {
var statearr_30198_30266 = state_30151__$1;
(statearr_30198_30266[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (25))){
var inst_30093 = (state_30151[(20)]);
var inst_30094 = (state_30151[(11)]);
var inst_30096 = (inst_30094 < inst_30093);
var inst_30097 = inst_30096;
var state_30151__$1 = state_30151;
if(cljs.core.truth_(inst_30097)){
var statearr_30199_30267 = state_30151__$1;
(statearr_30199_30267[(1)] = (27));

} else {
var statearr_30200_30268 = state_30151__$1;
(statearr_30200_30268[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (34))){
var state_30151__$1 = state_30151;
var statearr_30201_30269 = state_30151__$1;
(statearr_30201_30269[(2)] = null);

(statearr_30201_30269[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (17))){
var state_30151__$1 = state_30151;
var statearr_30202_30270 = state_30151__$1;
(statearr_30202_30270[(2)] = null);

(statearr_30202_30270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (3))){
var inst_30149 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30151__$1,inst_30149);
} else {
if((state_val_30152 === (12))){
var inst_30078 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30203_30271 = state_30151__$1;
(statearr_30203_30271[(2)] = inst_30078);

(statearr_30203_30271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (2))){
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(4),ch);
} else {
if((state_val_30152 === (23))){
var state_30151__$1 = state_30151;
var statearr_30204_30272 = state_30151__$1;
(statearr_30204_30272[(2)] = null);

(statearr_30204_30272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (35))){
var inst_30133 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30205_30273 = state_30151__$1;
(statearr_30205_30273[(2)] = inst_30133);

(statearr_30205_30273[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (19))){
var inst_30050 = (state_30151[(7)]);
var inst_30054 = cljs.core.chunk_first.call(null,inst_30050);
var inst_30055 = cljs.core.chunk_rest.call(null,inst_30050);
var inst_30056 = cljs.core.count.call(null,inst_30054);
var inst_30028 = inst_30055;
var inst_30029 = inst_30054;
var inst_30030 = inst_30056;
var inst_30031 = (0);
var state_30151__$1 = (function (){var statearr_30206 = state_30151;
(statearr_30206[(13)] = inst_30028);

(statearr_30206[(14)] = inst_30031);

(statearr_30206[(15)] = inst_30030);

(statearr_30206[(16)] = inst_30029);

return statearr_30206;
})();
var statearr_30207_30274 = state_30151__$1;
(statearr_30207_30274[(2)] = null);

(statearr_30207_30274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (11))){
var inst_30050 = (state_30151[(7)]);
var inst_30028 = (state_30151[(13)]);
var inst_30050__$1 = cljs.core.seq.call(null,inst_30028);
var state_30151__$1 = (function (){var statearr_30208 = state_30151;
(statearr_30208[(7)] = inst_30050__$1);

return statearr_30208;
})();
if(inst_30050__$1){
var statearr_30209_30275 = state_30151__$1;
(statearr_30209_30275[(1)] = (16));

} else {
var statearr_30210_30276 = state_30151__$1;
(statearr_30210_30276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (9))){
var inst_30080 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30211_30277 = state_30151__$1;
(statearr_30211_30277[(2)] = inst_30080);

(statearr_30211_30277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (5))){
var inst_30026 = cljs.core.deref.call(null,cs);
var inst_30027 = cljs.core.seq.call(null,inst_30026);
var inst_30028 = inst_30027;
var inst_30029 = null;
var inst_30030 = (0);
var inst_30031 = (0);
var state_30151__$1 = (function (){var statearr_30212 = state_30151;
(statearr_30212[(13)] = inst_30028);

(statearr_30212[(14)] = inst_30031);

(statearr_30212[(15)] = inst_30030);

(statearr_30212[(16)] = inst_30029);

return statearr_30212;
})();
var statearr_30213_30278 = state_30151__$1;
(statearr_30213_30278[(2)] = null);

(statearr_30213_30278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (14))){
var state_30151__$1 = state_30151;
var statearr_30214_30279 = state_30151__$1;
(statearr_30214_30279[(2)] = null);

(statearr_30214_30279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (45))){
var inst_30141 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30215_30280 = state_30151__$1;
(statearr_30215_30280[(2)] = inst_30141);

(statearr_30215_30280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (26))){
var inst_30083 = (state_30151[(29)]);
var inst_30137 = (state_30151[(2)]);
var inst_30138 = cljs.core.seq.call(null,inst_30083);
var state_30151__$1 = (function (){var statearr_30216 = state_30151;
(statearr_30216[(31)] = inst_30137);

return statearr_30216;
})();
if(inst_30138){
var statearr_30217_30281 = state_30151__$1;
(statearr_30217_30281[(1)] = (42));

} else {
var statearr_30218_30282 = state_30151__$1;
(statearr_30218_30282[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (16))){
var inst_30050 = (state_30151[(7)]);
var inst_30052 = cljs.core.chunked_seq_QMARK_.call(null,inst_30050);
var state_30151__$1 = state_30151;
if(inst_30052){
var statearr_30219_30283 = state_30151__$1;
(statearr_30219_30283[(1)] = (19));

} else {
var statearr_30220_30284 = state_30151__$1;
(statearr_30220_30284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (38))){
var inst_30130 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30221_30285 = state_30151__$1;
(statearr_30221_30285[(2)] = inst_30130);

(statearr_30221_30285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (30))){
var state_30151__$1 = state_30151;
var statearr_30222_30286 = state_30151__$1;
(statearr_30222_30286[(2)] = null);

(statearr_30222_30286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (10))){
var inst_30031 = (state_30151[(14)]);
var inst_30029 = (state_30151[(16)]);
var inst_30039 = cljs.core._nth.call(null,inst_30029,inst_30031);
var inst_30040 = cljs.core.nth.call(null,inst_30039,(0),null);
var inst_30041 = cljs.core.nth.call(null,inst_30039,(1),null);
var state_30151__$1 = (function (){var statearr_30223 = state_30151;
(statearr_30223[(26)] = inst_30040);

return statearr_30223;
})();
if(cljs.core.truth_(inst_30041)){
var statearr_30224_30287 = state_30151__$1;
(statearr_30224_30287[(1)] = (13));

} else {
var statearr_30225_30288 = state_30151__$1;
(statearr_30225_30288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (18))){
var inst_30076 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30226_30289 = state_30151__$1;
(statearr_30226_30289[(2)] = inst_30076);

(statearr_30226_30289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (42))){
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(45),dchan);
} else {
if((state_val_30152 === (37))){
var inst_30110 = (state_30151[(25)]);
var inst_30119 = (state_30151[(23)]);
var inst_30019 = (state_30151[(12)]);
var inst_30119__$1 = cljs.core.first.call(null,inst_30110);
var inst_30120 = cljs.core.async.put_BANG_.call(null,inst_30119__$1,inst_30019,done);
var state_30151__$1 = (function (){var statearr_30227 = state_30151;
(statearr_30227[(23)] = inst_30119__$1);

return statearr_30227;
})();
if(cljs.core.truth_(inst_30120)){
var statearr_30228_30290 = state_30151__$1;
(statearr_30228_30290[(1)] = (39));

} else {
var statearr_30229_30291 = state_30151__$1;
(statearr_30229_30291[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (8))){
var inst_30031 = (state_30151[(14)]);
var inst_30030 = (state_30151[(15)]);
var inst_30033 = (inst_30031 < inst_30030);
var inst_30034 = inst_30033;
var state_30151__$1 = state_30151;
if(cljs.core.truth_(inst_30034)){
var statearr_30230_30292 = state_30151__$1;
(statearr_30230_30292[(1)] = (10));

} else {
var statearr_30231_30293 = state_30151__$1;
(statearr_30231_30293[(1)] = (11));

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
});})(c__28886__auto___30239,cs,m,dchan,dctr,done))
;
return ((function (switch__28774__auto__,c__28886__auto___30239,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28775__auto__ = null;
var cljs$core$async$mult_$_state_machine__28775__auto____0 = (function (){
var statearr_30235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30235[(0)] = cljs$core$async$mult_$_state_machine__28775__auto__);

(statearr_30235[(1)] = (1));

return statearr_30235;
});
var cljs$core$async$mult_$_state_machine__28775__auto____1 = (function (state_30151){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_30151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e30236){if((e30236 instanceof Object)){
var ex__28778__auto__ = e30236;
var statearr_30237_30294 = state_30151;
(statearr_30237_30294[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30295 = state_30151;
state_30151 = G__30295;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28775__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28775__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28775__auto____0;
cljs$core$async$mult_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28775__auto____1;
return cljs$core$async$mult_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___30239,cs,m,dchan,dctr,done))
})();
var state__28888__auto__ = (function (){var statearr_30238 = f__28887__auto__.call(null);
(statearr_30238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___30239);

return statearr_30238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___30239,cs,m,dchan,dctr,done))
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
var args30296 = [];
var len__27054__auto___30299 = arguments.length;
var i__27055__auto___30300 = (0);
while(true){
if((i__27055__auto___30300 < len__27054__auto___30299)){
args30296.push((arguments[i__27055__auto___30300]));

var G__30301 = (i__27055__auto___30300 + (1));
i__27055__auto___30300 = G__30301;
continue;
} else {
}
break;
}

var G__30298 = args30296.length;
switch (G__30298) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30296.length)].join('')));

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
var len__27054__auto___30313 = arguments.length;
var i__27055__auto___30314 = (0);
while(true){
if((i__27055__auto___30314 < len__27054__auto___30313)){
args__27061__auto__.push((arguments[i__27055__auto___30314]));

var G__30315 = (i__27055__auto___30314 + (1));
i__27055__auto___30314 = G__30315;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30307){
var map__30308 = p__30307;
var map__30308__$1 = ((((!((map__30308 == null)))?((((map__30308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30308):map__30308);
var opts = map__30308__$1;
var statearr_30310_30316 = state;
(statearr_30310_30316[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30308,map__30308__$1,opts){
return (function (val){
var statearr_30311_30317 = state;
(statearr_30311_30317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30308,map__30308__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30312_30318 = state;
(statearr_30312_30318[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30303){
var G__30304 = cljs.core.first.call(null,seq30303);
var seq30303__$1 = cljs.core.next.call(null,seq30303);
var G__30305 = cljs.core.first.call(null,seq30303__$1);
var seq30303__$2 = cljs.core.next.call(null,seq30303__$1);
var G__30306 = cljs.core.first.call(null,seq30303__$2);
var seq30303__$3 = cljs.core.next.call(null,seq30303__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30304,G__30305,G__30306,seq30303__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30484 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30485){
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
this.meta30485 = meta30485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30486,meta30485__$1){
var self__ = this;
var _30486__$1 = this;
return (new cljs.core.async.t_cljs$core$async30484(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30485__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30486){
var self__ = this;
var _30486__$1 = this;
return self__.meta30485;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30484.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30485","meta30485",1239234988,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30484";

cljs.core.async.t_cljs$core$async30484.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30484");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30484 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30484(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30485){
return (new cljs.core.async.t_cljs$core$async30484(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30485));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30484(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28886__auto___30649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___30649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___30649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30586){
var state_val_30587 = (state_30586[(1)]);
if((state_val_30587 === (7))){
var inst_30502 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30588_30650 = state_30586__$1;
(statearr_30588_30650[(2)] = inst_30502);

(statearr_30588_30650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (20))){
var inst_30514 = (state_30586[(7)]);
var state_30586__$1 = state_30586;
var statearr_30589_30651 = state_30586__$1;
(statearr_30589_30651[(2)] = inst_30514);

(statearr_30589_30651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (27))){
var state_30586__$1 = state_30586;
var statearr_30590_30652 = state_30586__$1;
(statearr_30590_30652[(2)] = null);

(statearr_30590_30652[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (1))){
var inst_30490 = (state_30586[(8)]);
var inst_30490__$1 = calc_state.call(null);
var inst_30492 = (inst_30490__$1 == null);
var inst_30493 = cljs.core.not.call(null,inst_30492);
var state_30586__$1 = (function (){var statearr_30591 = state_30586;
(statearr_30591[(8)] = inst_30490__$1);

return statearr_30591;
})();
if(inst_30493){
var statearr_30592_30653 = state_30586__$1;
(statearr_30592_30653[(1)] = (2));

} else {
var statearr_30593_30654 = state_30586__$1;
(statearr_30593_30654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (24))){
var inst_30537 = (state_30586[(9)]);
var inst_30546 = (state_30586[(10)]);
var inst_30560 = (state_30586[(11)]);
var inst_30560__$1 = inst_30537.call(null,inst_30546);
var state_30586__$1 = (function (){var statearr_30594 = state_30586;
(statearr_30594[(11)] = inst_30560__$1);

return statearr_30594;
})();
if(cljs.core.truth_(inst_30560__$1)){
var statearr_30595_30655 = state_30586__$1;
(statearr_30595_30655[(1)] = (29));

} else {
var statearr_30596_30656 = state_30586__$1;
(statearr_30596_30656[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (4))){
var inst_30505 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30505)){
var statearr_30597_30657 = state_30586__$1;
(statearr_30597_30657[(1)] = (8));

} else {
var statearr_30598_30658 = state_30586__$1;
(statearr_30598_30658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (15))){
var inst_30531 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30531)){
var statearr_30599_30659 = state_30586__$1;
(statearr_30599_30659[(1)] = (19));

} else {
var statearr_30600_30660 = state_30586__$1;
(statearr_30600_30660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (21))){
var inst_30536 = (state_30586[(12)]);
var inst_30536__$1 = (state_30586[(2)]);
var inst_30537 = cljs.core.get.call(null,inst_30536__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30538 = cljs.core.get.call(null,inst_30536__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30539 = cljs.core.get.call(null,inst_30536__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30586__$1 = (function (){var statearr_30601 = state_30586;
(statearr_30601[(9)] = inst_30537);

(statearr_30601[(12)] = inst_30536__$1);

(statearr_30601[(13)] = inst_30538);

return statearr_30601;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30586__$1,(22),inst_30539);
} else {
if((state_val_30587 === (31))){
var inst_30568 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30568)){
var statearr_30602_30661 = state_30586__$1;
(statearr_30602_30661[(1)] = (32));

} else {
var statearr_30603_30662 = state_30586__$1;
(statearr_30603_30662[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (32))){
var inst_30545 = (state_30586[(14)]);
var state_30586__$1 = state_30586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30586__$1,(35),out,inst_30545);
} else {
if((state_val_30587 === (33))){
var inst_30536 = (state_30586[(12)]);
var inst_30514 = inst_30536;
var state_30586__$1 = (function (){var statearr_30604 = state_30586;
(statearr_30604[(7)] = inst_30514);

return statearr_30604;
})();
var statearr_30605_30663 = state_30586__$1;
(statearr_30605_30663[(2)] = null);

(statearr_30605_30663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (13))){
var inst_30514 = (state_30586[(7)]);
var inst_30521 = inst_30514.cljs$lang$protocol_mask$partition0$;
var inst_30522 = (inst_30521 & (64));
var inst_30523 = inst_30514.cljs$core$ISeq$;
var inst_30524 = (inst_30522) || (inst_30523);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30524)){
var statearr_30606_30664 = state_30586__$1;
(statearr_30606_30664[(1)] = (16));

} else {
var statearr_30607_30665 = state_30586__$1;
(statearr_30607_30665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (22))){
var inst_30545 = (state_30586[(14)]);
var inst_30546 = (state_30586[(10)]);
var inst_30544 = (state_30586[(2)]);
var inst_30545__$1 = cljs.core.nth.call(null,inst_30544,(0),null);
var inst_30546__$1 = cljs.core.nth.call(null,inst_30544,(1),null);
var inst_30547 = (inst_30545__$1 == null);
var inst_30548 = cljs.core._EQ_.call(null,inst_30546__$1,change);
var inst_30549 = (inst_30547) || (inst_30548);
var state_30586__$1 = (function (){var statearr_30608 = state_30586;
(statearr_30608[(14)] = inst_30545__$1);

(statearr_30608[(10)] = inst_30546__$1);

return statearr_30608;
})();
if(cljs.core.truth_(inst_30549)){
var statearr_30609_30666 = state_30586__$1;
(statearr_30609_30666[(1)] = (23));

} else {
var statearr_30610_30667 = state_30586__$1;
(statearr_30610_30667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (36))){
var inst_30536 = (state_30586[(12)]);
var inst_30514 = inst_30536;
var state_30586__$1 = (function (){var statearr_30611 = state_30586;
(statearr_30611[(7)] = inst_30514);

return statearr_30611;
})();
var statearr_30612_30668 = state_30586__$1;
(statearr_30612_30668[(2)] = null);

(statearr_30612_30668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (29))){
var inst_30560 = (state_30586[(11)]);
var state_30586__$1 = state_30586;
var statearr_30613_30669 = state_30586__$1;
(statearr_30613_30669[(2)] = inst_30560);

(statearr_30613_30669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (6))){
var state_30586__$1 = state_30586;
var statearr_30614_30670 = state_30586__$1;
(statearr_30614_30670[(2)] = false);

(statearr_30614_30670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (28))){
var inst_30556 = (state_30586[(2)]);
var inst_30557 = calc_state.call(null);
var inst_30514 = inst_30557;
var state_30586__$1 = (function (){var statearr_30615 = state_30586;
(statearr_30615[(7)] = inst_30514);

(statearr_30615[(15)] = inst_30556);

return statearr_30615;
})();
var statearr_30616_30671 = state_30586__$1;
(statearr_30616_30671[(2)] = null);

(statearr_30616_30671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (25))){
var inst_30582 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30617_30672 = state_30586__$1;
(statearr_30617_30672[(2)] = inst_30582);

(statearr_30617_30672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (34))){
var inst_30580 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30618_30673 = state_30586__$1;
(statearr_30618_30673[(2)] = inst_30580);

(statearr_30618_30673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (17))){
var state_30586__$1 = state_30586;
var statearr_30619_30674 = state_30586__$1;
(statearr_30619_30674[(2)] = false);

(statearr_30619_30674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (3))){
var state_30586__$1 = state_30586;
var statearr_30620_30675 = state_30586__$1;
(statearr_30620_30675[(2)] = false);

(statearr_30620_30675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (12))){
var inst_30584 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30586__$1,inst_30584);
} else {
if((state_val_30587 === (2))){
var inst_30490 = (state_30586[(8)]);
var inst_30495 = inst_30490.cljs$lang$protocol_mask$partition0$;
var inst_30496 = (inst_30495 & (64));
var inst_30497 = inst_30490.cljs$core$ISeq$;
var inst_30498 = (inst_30496) || (inst_30497);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30498)){
var statearr_30621_30676 = state_30586__$1;
(statearr_30621_30676[(1)] = (5));

} else {
var statearr_30622_30677 = state_30586__$1;
(statearr_30622_30677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (23))){
var inst_30545 = (state_30586[(14)]);
var inst_30551 = (inst_30545 == null);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30551)){
var statearr_30623_30678 = state_30586__$1;
(statearr_30623_30678[(1)] = (26));

} else {
var statearr_30624_30679 = state_30586__$1;
(statearr_30624_30679[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (35))){
var inst_30571 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
if(cljs.core.truth_(inst_30571)){
var statearr_30625_30680 = state_30586__$1;
(statearr_30625_30680[(1)] = (36));

} else {
var statearr_30626_30681 = state_30586__$1;
(statearr_30626_30681[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (19))){
var inst_30514 = (state_30586[(7)]);
var inst_30533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30514);
var state_30586__$1 = state_30586;
var statearr_30627_30682 = state_30586__$1;
(statearr_30627_30682[(2)] = inst_30533);

(statearr_30627_30682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (11))){
var inst_30514 = (state_30586[(7)]);
var inst_30518 = (inst_30514 == null);
var inst_30519 = cljs.core.not.call(null,inst_30518);
var state_30586__$1 = state_30586;
if(inst_30519){
var statearr_30628_30683 = state_30586__$1;
(statearr_30628_30683[(1)] = (13));

} else {
var statearr_30629_30684 = state_30586__$1;
(statearr_30629_30684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (9))){
var inst_30490 = (state_30586[(8)]);
var state_30586__$1 = state_30586;
var statearr_30630_30685 = state_30586__$1;
(statearr_30630_30685[(2)] = inst_30490);

(statearr_30630_30685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (5))){
var state_30586__$1 = state_30586;
var statearr_30631_30686 = state_30586__$1;
(statearr_30631_30686[(2)] = true);

(statearr_30631_30686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (14))){
var state_30586__$1 = state_30586;
var statearr_30632_30687 = state_30586__$1;
(statearr_30632_30687[(2)] = false);

(statearr_30632_30687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (26))){
var inst_30546 = (state_30586[(10)]);
var inst_30553 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30546);
var state_30586__$1 = state_30586;
var statearr_30633_30688 = state_30586__$1;
(statearr_30633_30688[(2)] = inst_30553);

(statearr_30633_30688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (16))){
var state_30586__$1 = state_30586;
var statearr_30634_30689 = state_30586__$1;
(statearr_30634_30689[(2)] = true);

(statearr_30634_30689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (38))){
var inst_30576 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30635_30690 = state_30586__$1;
(statearr_30635_30690[(2)] = inst_30576);

(statearr_30635_30690[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (30))){
var inst_30537 = (state_30586[(9)]);
var inst_30546 = (state_30586[(10)]);
var inst_30538 = (state_30586[(13)]);
var inst_30563 = cljs.core.empty_QMARK_.call(null,inst_30537);
var inst_30564 = inst_30538.call(null,inst_30546);
var inst_30565 = cljs.core.not.call(null,inst_30564);
var inst_30566 = (inst_30563) && (inst_30565);
var state_30586__$1 = state_30586;
var statearr_30636_30691 = state_30586__$1;
(statearr_30636_30691[(2)] = inst_30566);

(statearr_30636_30691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (10))){
var inst_30490 = (state_30586[(8)]);
var inst_30510 = (state_30586[(2)]);
var inst_30511 = cljs.core.get.call(null,inst_30510,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30512 = cljs.core.get.call(null,inst_30510,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30513 = cljs.core.get.call(null,inst_30510,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30514 = inst_30490;
var state_30586__$1 = (function (){var statearr_30637 = state_30586;
(statearr_30637[(16)] = inst_30511);

(statearr_30637[(17)] = inst_30512);

(statearr_30637[(7)] = inst_30514);

(statearr_30637[(18)] = inst_30513);

return statearr_30637;
})();
var statearr_30638_30692 = state_30586__$1;
(statearr_30638_30692[(2)] = null);

(statearr_30638_30692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (18))){
var inst_30528 = (state_30586[(2)]);
var state_30586__$1 = state_30586;
var statearr_30639_30693 = state_30586__$1;
(statearr_30639_30693[(2)] = inst_30528);

(statearr_30639_30693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (37))){
var state_30586__$1 = state_30586;
var statearr_30640_30694 = state_30586__$1;
(statearr_30640_30694[(2)] = null);

(statearr_30640_30694[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (8))){
var inst_30490 = (state_30586[(8)]);
var inst_30507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30490);
var state_30586__$1 = state_30586;
var statearr_30641_30695 = state_30586__$1;
(statearr_30641_30695[(2)] = inst_30507);

(statearr_30641_30695[(1)] = (10));


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
});})(c__28886__auto___30649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28774__auto__,c__28886__auto___30649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28775__auto__ = null;
var cljs$core$async$mix_$_state_machine__28775__auto____0 = (function (){
var statearr_30645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30645[(0)] = cljs$core$async$mix_$_state_machine__28775__auto__);

(statearr_30645[(1)] = (1));

return statearr_30645;
});
var cljs$core$async$mix_$_state_machine__28775__auto____1 = (function (state_30586){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_30586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e30646){if((e30646 instanceof Object)){
var ex__28778__auto__ = e30646;
var statearr_30647_30696 = state_30586;
(statearr_30647_30696[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30697 = state_30586;
state_30586 = G__30697;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28775__auto__ = function(state_30586){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28775__auto____1.call(this,state_30586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28775__auto____0;
cljs$core$async$mix_$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28775__auto____1;
return cljs$core$async$mix_$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___30649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28888__auto__ = (function (){var statearr_30648 = f__28887__auto__.call(null);
(statearr_30648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___30649);

return statearr_30648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___30649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30698 = [];
var len__27054__auto___30701 = arguments.length;
var i__27055__auto___30702 = (0);
while(true){
if((i__27055__auto___30702 < len__27054__auto___30701)){
args30698.push((arguments[i__27055__auto___30702]));

var G__30703 = (i__27055__auto___30702 + (1));
i__27055__auto___30702 = G__30703;
continue;
} else {
}
break;
}

var G__30700 = args30698.length;
switch (G__30700) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30698.length)].join('')));

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
var args30706 = [];
var len__27054__auto___30831 = arguments.length;
var i__27055__auto___30832 = (0);
while(true){
if((i__27055__auto___30832 < len__27054__auto___30831)){
args30706.push((arguments[i__27055__auto___30832]));

var G__30833 = (i__27055__auto___30832 + (1));
i__27055__auto___30832 = G__30833;
continue;
} else {
}
break;
}

var G__30708 = args30706.length;
switch (G__30708) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30706.length)].join('')));

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
return (function (p1__30705_SHARP_){
if(cljs.core.truth_(p1__30705_SHARP_.call(null,topic))){
return p1__30705_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30705_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30709 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30710){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30710 = meta30710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30711,meta30710__$1){
var self__ = this;
var _30711__$1 = this;
return (new cljs.core.async.t_cljs$core$async30709(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30710__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30711){
var self__ = this;
var _30711__$1 = this;
return self__.meta30710;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30710","meta30710",1165503475,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30709";

cljs.core.async.t_cljs$core$async30709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30709");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30709 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30710){
return (new cljs.core.async.t_cljs$core$async30709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30710));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30709(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28886__auto___30835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___30835,mults,ensure_mult,p){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___30835,mults,ensure_mult,p){
return (function (state_30783){
var state_val_30784 = (state_30783[(1)]);
if((state_val_30784 === (7))){
var inst_30779 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30785_30836 = state_30783__$1;
(statearr_30785_30836[(2)] = inst_30779);

(statearr_30785_30836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (20))){
var state_30783__$1 = state_30783;
var statearr_30786_30837 = state_30783__$1;
(statearr_30786_30837[(2)] = null);

(statearr_30786_30837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (1))){
var state_30783__$1 = state_30783;
var statearr_30787_30838 = state_30783__$1;
(statearr_30787_30838[(2)] = null);

(statearr_30787_30838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (24))){
var inst_30762 = (state_30783[(7)]);
var inst_30771 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30762);
var state_30783__$1 = state_30783;
var statearr_30788_30839 = state_30783__$1;
(statearr_30788_30839[(2)] = inst_30771);

(statearr_30788_30839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (4))){
var inst_30714 = (state_30783[(8)]);
var inst_30714__$1 = (state_30783[(2)]);
var inst_30715 = (inst_30714__$1 == null);
var state_30783__$1 = (function (){var statearr_30789 = state_30783;
(statearr_30789[(8)] = inst_30714__$1);

return statearr_30789;
})();
if(cljs.core.truth_(inst_30715)){
var statearr_30790_30840 = state_30783__$1;
(statearr_30790_30840[(1)] = (5));

} else {
var statearr_30791_30841 = state_30783__$1;
(statearr_30791_30841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (15))){
var inst_30756 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30792_30842 = state_30783__$1;
(statearr_30792_30842[(2)] = inst_30756);

(statearr_30792_30842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (21))){
var inst_30776 = (state_30783[(2)]);
var state_30783__$1 = (function (){var statearr_30793 = state_30783;
(statearr_30793[(9)] = inst_30776);

return statearr_30793;
})();
var statearr_30794_30843 = state_30783__$1;
(statearr_30794_30843[(2)] = null);

(statearr_30794_30843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (13))){
var inst_30738 = (state_30783[(10)]);
var inst_30740 = cljs.core.chunked_seq_QMARK_.call(null,inst_30738);
var state_30783__$1 = state_30783;
if(inst_30740){
var statearr_30795_30844 = state_30783__$1;
(statearr_30795_30844[(1)] = (16));

} else {
var statearr_30796_30845 = state_30783__$1;
(statearr_30796_30845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (22))){
var inst_30768 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
if(cljs.core.truth_(inst_30768)){
var statearr_30797_30846 = state_30783__$1;
(statearr_30797_30846[(1)] = (23));

} else {
var statearr_30798_30847 = state_30783__$1;
(statearr_30798_30847[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (6))){
var inst_30762 = (state_30783[(7)]);
var inst_30764 = (state_30783[(11)]);
var inst_30714 = (state_30783[(8)]);
var inst_30762__$1 = topic_fn.call(null,inst_30714);
var inst_30763 = cljs.core.deref.call(null,mults);
var inst_30764__$1 = cljs.core.get.call(null,inst_30763,inst_30762__$1);
var state_30783__$1 = (function (){var statearr_30799 = state_30783;
(statearr_30799[(7)] = inst_30762__$1);

(statearr_30799[(11)] = inst_30764__$1);

return statearr_30799;
})();
if(cljs.core.truth_(inst_30764__$1)){
var statearr_30800_30848 = state_30783__$1;
(statearr_30800_30848[(1)] = (19));

} else {
var statearr_30801_30849 = state_30783__$1;
(statearr_30801_30849[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (25))){
var inst_30773 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30802_30850 = state_30783__$1;
(statearr_30802_30850[(2)] = inst_30773);

(statearr_30802_30850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (17))){
var inst_30738 = (state_30783[(10)]);
var inst_30747 = cljs.core.first.call(null,inst_30738);
var inst_30748 = cljs.core.async.muxch_STAR_.call(null,inst_30747);
var inst_30749 = cljs.core.async.close_BANG_.call(null,inst_30748);
var inst_30750 = cljs.core.next.call(null,inst_30738);
var inst_30724 = inst_30750;
var inst_30725 = null;
var inst_30726 = (0);
var inst_30727 = (0);
var state_30783__$1 = (function (){var statearr_30803 = state_30783;
(statearr_30803[(12)] = inst_30726);

(statearr_30803[(13)] = inst_30724);

(statearr_30803[(14)] = inst_30725);

(statearr_30803[(15)] = inst_30727);

(statearr_30803[(16)] = inst_30749);

return statearr_30803;
})();
var statearr_30804_30851 = state_30783__$1;
(statearr_30804_30851[(2)] = null);

(statearr_30804_30851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (3))){
var inst_30781 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30783__$1,inst_30781);
} else {
if((state_val_30784 === (12))){
var inst_30758 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30805_30852 = state_30783__$1;
(statearr_30805_30852[(2)] = inst_30758);

(statearr_30805_30852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (2))){
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30783__$1,(4),ch);
} else {
if((state_val_30784 === (23))){
var state_30783__$1 = state_30783;
var statearr_30806_30853 = state_30783__$1;
(statearr_30806_30853[(2)] = null);

(statearr_30806_30853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (19))){
var inst_30764 = (state_30783[(11)]);
var inst_30714 = (state_30783[(8)]);
var inst_30766 = cljs.core.async.muxch_STAR_.call(null,inst_30764);
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30783__$1,(22),inst_30766,inst_30714);
} else {
if((state_val_30784 === (11))){
var inst_30724 = (state_30783[(13)]);
var inst_30738 = (state_30783[(10)]);
var inst_30738__$1 = cljs.core.seq.call(null,inst_30724);
var state_30783__$1 = (function (){var statearr_30807 = state_30783;
(statearr_30807[(10)] = inst_30738__$1);

return statearr_30807;
})();
if(inst_30738__$1){
var statearr_30808_30854 = state_30783__$1;
(statearr_30808_30854[(1)] = (13));

} else {
var statearr_30809_30855 = state_30783__$1;
(statearr_30809_30855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (9))){
var inst_30760 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30810_30856 = state_30783__$1;
(statearr_30810_30856[(2)] = inst_30760);

(statearr_30810_30856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (5))){
var inst_30721 = cljs.core.deref.call(null,mults);
var inst_30722 = cljs.core.vals.call(null,inst_30721);
var inst_30723 = cljs.core.seq.call(null,inst_30722);
var inst_30724 = inst_30723;
var inst_30725 = null;
var inst_30726 = (0);
var inst_30727 = (0);
var state_30783__$1 = (function (){var statearr_30811 = state_30783;
(statearr_30811[(12)] = inst_30726);

(statearr_30811[(13)] = inst_30724);

(statearr_30811[(14)] = inst_30725);

(statearr_30811[(15)] = inst_30727);

return statearr_30811;
})();
var statearr_30812_30857 = state_30783__$1;
(statearr_30812_30857[(2)] = null);

(statearr_30812_30857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (14))){
var state_30783__$1 = state_30783;
var statearr_30816_30858 = state_30783__$1;
(statearr_30816_30858[(2)] = null);

(statearr_30816_30858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (16))){
var inst_30738 = (state_30783[(10)]);
var inst_30742 = cljs.core.chunk_first.call(null,inst_30738);
var inst_30743 = cljs.core.chunk_rest.call(null,inst_30738);
var inst_30744 = cljs.core.count.call(null,inst_30742);
var inst_30724 = inst_30743;
var inst_30725 = inst_30742;
var inst_30726 = inst_30744;
var inst_30727 = (0);
var state_30783__$1 = (function (){var statearr_30817 = state_30783;
(statearr_30817[(12)] = inst_30726);

(statearr_30817[(13)] = inst_30724);

(statearr_30817[(14)] = inst_30725);

(statearr_30817[(15)] = inst_30727);

return statearr_30817;
})();
var statearr_30818_30859 = state_30783__$1;
(statearr_30818_30859[(2)] = null);

(statearr_30818_30859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (10))){
var inst_30726 = (state_30783[(12)]);
var inst_30724 = (state_30783[(13)]);
var inst_30725 = (state_30783[(14)]);
var inst_30727 = (state_30783[(15)]);
var inst_30732 = cljs.core._nth.call(null,inst_30725,inst_30727);
var inst_30733 = cljs.core.async.muxch_STAR_.call(null,inst_30732);
var inst_30734 = cljs.core.async.close_BANG_.call(null,inst_30733);
var inst_30735 = (inst_30727 + (1));
var tmp30813 = inst_30726;
var tmp30814 = inst_30724;
var tmp30815 = inst_30725;
var inst_30724__$1 = tmp30814;
var inst_30725__$1 = tmp30815;
var inst_30726__$1 = tmp30813;
var inst_30727__$1 = inst_30735;
var state_30783__$1 = (function (){var statearr_30819 = state_30783;
(statearr_30819[(12)] = inst_30726__$1);

(statearr_30819[(17)] = inst_30734);

(statearr_30819[(13)] = inst_30724__$1);

(statearr_30819[(14)] = inst_30725__$1);

(statearr_30819[(15)] = inst_30727__$1);

return statearr_30819;
})();
var statearr_30820_30860 = state_30783__$1;
(statearr_30820_30860[(2)] = null);

(statearr_30820_30860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (18))){
var inst_30753 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30821_30861 = state_30783__$1;
(statearr_30821_30861[(2)] = inst_30753);

(statearr_30821_30861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (8))){
var inst_30726 = (state_30783[(12)]);
var inst_30727 = (state_30783[(15)]);
var inst_30729 = (inst_30727 < inst_30726);
var inst_30730 = inst_30729;
var state_30783__$1 = state_30783;
if(cljs.core.truth_(inst_30730)){
var statearr_30822_30862 = state_30783__$1;
(statearr_30822_30862[(1)] = (10));

} else {
var statearr_30823_30863 = state_30783__$1;
(statearr_30823_30863[(1)] = (11));

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
});})(c__28886__auto___30835,mults,ensure_mult,p))
;
return ((function (switch__28774__auto__,c__28886__auto___30835,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30827[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_30783){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_30783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e30828){if((e30828 instanceof Object)){
var ex__28778__auto__ = e30828;
var statearr_30829_30864 = state_30783;
(statearr_30829_30864[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30865 = state_30783;
state_30783 = G__30865;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_30783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_30783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___30835,mults,ensure_mult,p))
})();
var state__28888__auto__ = (function (){var statearr_30830 = f__28887__auto__.call(null);
(statearr_30830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___30835);

return statearr_30830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___30835,mults,ensure_mult,p))
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
var args30866 = [];
var len__27054__auto___30869 = arguments.length;
var i__27055__auto___30870 = (0);
while(true){
if((i__27055__auto___30870 < len__27054__auto___30869)){
args30866.push((arguments[i__27055__auto___30870]));

var G__30871 = (i__27055__auto___30870 + (1));
i__27055__auto___30870 = G__30871;
continue;
} else {
}
break;
}

var G__30868 = args30866.length;
switch (G__30868) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30866.length)].join('')));

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
var args30873 = [];
var len__27054__auto___30876 = arguments.length;
var i__27055__auto___30877 = (0);
while(true){
if((i__27055__auto___30877 < len__27054__auto___30876)){
args30873.push((arguments[i__27055__auto___30877]));

var G__30878 = (i__27055__auto___30877 + (1));
i__27055__auto___30877 = G__30878;
continue;
} else {
}
break;
}

var G__30875 = args30873.length;
switch (G__30875) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30873.length)].join('')));

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
var args30880 = [];
var len__27054__auto___30951 = arguments.length;
var i__27055__auto___30952 = (0);
while(true){
if((i__27055__auto___30952 < len__27054__auto___30951)){
args30880.push((arguments[i__27055__auto___30952]));

var G__30953 = (i__27055__auto___30952 + (1));
i__27055__auto___30952 = G__30953;
continue;
} else {
}
break;
}

var G__30882 = args30880.length;
switch (G__30882) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30880.length)].join('')));

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
var c__28886__auto___30955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___30955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___30955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30921){
var state_val_30922 = (state_30921[(1)]);
if((state_val_30922 === (7))){
var state_30921__$1 = state_30921;
var statearr_30923_30956 = state_30921__$1;
(statearr_30923_30956[(2)] = null);

(statearr_30923_30956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (1))){
var state_30921__$1 = state_30921;
var statearr_30924_30957 = state_30921__$1;
(statearr_30924_30957[(2)] = null);

(statearr_30924_30957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (4))){
var inst_30885 = (state_30921[(7)]);
var inst_30887 = (inst_30885 < cnt);
var state_30921__$1 = state_30921;
if(cljs.core.truth_(inst_30887)){
var statearr_30925_30958 = state_30921__$1;
(statearr_30925_30958[(1)] = (6));

} else {
var statearr_30926_30959 = state_30921__$1;
(statearr_30926_30959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (15))){
var inst_30917 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30927_30960 = state_30921__$1;
(statearr_30927_30960[(2)] = inst_30917);

(statearr_30927_30960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (13))){
var inst_30910 = cljs.core.async.close_BANG_.call(null,out);
var state_30921__$1 = state_30921;
var statearr_30928_30961 = state_30921__$1;
(statearr_30928_30961[(2)] = inst_30910);

(statearr_30928_30961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (6))){
var state_30921__$1 = state_30921;
var statearr_30929_30962 = state_30921__$1;
(statearr_30929_30962[(2)] = null);

(statearr_30929_30962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (3))){
var inst_30919 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30921__$1,inst_30919);
} else {
if((state_val_30922 === (12))){
var inst_30907 = (state_30921[(8)]);
var inst_30907__$1 = (state_30921[(2)]);
var inst_30908 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30907__$1);
var state_30921__$1 = (function (){var statearr_30930 = state_30921;
(statearr_30930[(8)] = inst_30907__$1);

return statearr_30930;
})();
if(cljs.core.truth_(inst_30908)){
var statearr_30931_30963 = state_30921__$1;
(statearr_30931_30963[(1)] = (13));

} else {
var statearr_30932_30964 = state_30921__$1;
(statearr_30932_30964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (2))){
var inst_30884 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30885 = (0);
var state_30921__$1 = (function (){var statearr_30933 = state_30921;
(statearr_30933[(9)] = inst_30884);

(statearr_30933[(7)] = inst_30885);

return statearr_30933;
})();
var statearr_30934_30965 = state_30921__$1;
(statearr_30934_30965[(2)] = null);

(statearr_30934_30965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (11))){
var inst_30885 = (state_30921[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30921,(10),Object,null,(9));
var inst_30894 = chs__$1.call(null,inst_30885);
var inst_30895 = done.call(null,inst_30885);
var inst_30896 = cljs.core.async.take_BANG_.call(null,inst_30894,inst_30895);
var state_30921__$1 = state_30921;
var statearr_30935_30966 = state_30921__$1;
(statearr_30935_30966[(2)] = inst_30896);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30921__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (9))){
var inst_30885 = (state_30921[(7)]);
var inst_30898 = (state_30921[(2)]);
var inst_30899 = (inst_30885 + (1));
var inst_30885__$1 = inst_30899;
var state_30921__$1 = (function (){var statearr_30936 = state_30921;
(statearr_30936[(10)] = inst_30898);

(statearr_30936[(7)] = inst_30885__$1);

return statearr_30936;
})();
var statearr_30937_30967 = state_30921__$1;
(statearr_30937_30967[(2)] = null);

(statearr_30937_30967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (5))){
var inst_30905 = (state_30921[(2)]);
var state_30921__$1 = (function (){var statearr_30938 = state_30921;
(statearr_30938[(11)] = inst_30905);

return statearr_30938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30921__$1,(12),dchan);
} else {
if((state_val_30922 === (14))){
var inst_30907 = (state_30921[(8)]);
var inst_30912 = cljs.core.apply.call(null,f,inst_30907);
var state_30921__$1 = state_30921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30921__$1,(16),out,inst_30912);
} else {
if((state_val_30922 === (16))){
var inst_30914 = (state_30921[(2)]);
var state_30921__$1 = (function (){var statearr_30939 = state_30921;
(statearr_30939[(12)] = inst_30914);

return statearr_30939;
})();
var statearr_30940_30968 = state_30921__$1;
(statearr_30940_30968[(2)] = null);

(statearr_30940_30968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (10))){
var inst_30889 = (state_30921[(2)]);
var inst_30890 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30921__$1 = (function (){var statearr_30941 = state_30921;
(statearr_30941[(13)] = inst_30889);

return statearr_30941;
})();
var statearr_30942_30969 = state_30921__$1;
(statearr_30942_30969[(2)] = inst_30890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30921__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (8))){
var inst_30903 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30943_30970 = state_30921__$1;
(statearr_30943_30970[(2)] = inst_30903);

(statearr_30943_30970[(1)] = (5));


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
});})(c__28886__auto___30955,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28774__auto__,c__28886__auto___30955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_30947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30947[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_30947[(1)] = (1));

return statearr_30947;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_30921){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_30921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e30948){if((e30948 instanceof Object)){
var ex__28778__auto__ = e30948;
var statearr_30949_30971 = state_30921;
(statearr_30949_30971[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30972 = state_30921;
state_30921 = G__30972;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_30921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_30921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___30955,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28888__auto__ = (function (){var statearr_30950 = f__28887__auto__.call(null);
(statearr_30950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___30955);

return statearr_30950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___30955,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30974 = [];
var len__27054__auto___31032 = arguments.length;
var i__27055__auto___31033 = (0);
while(true){
if((i__27055__auto___31033 < len__27054__auto___31032)){
args30974.push((arguments[i__27055__auto___31033]));

var G__31034 = (i__27055__auto___31033 + (1));
i__27055__auto___31033 = G__31034;
continue;
} else {
}
break;
}

var G__30976 = args30974.length;
switch (G__30976) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30974.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28886__auto___31036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___31036,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___31036,out){
return (function (state_31008){
var state_val_31009 = (state_31008[(1)]);
if((state_val_31009 === (7))){
var inst_30987 = (state_31008[(7)]);
var inst_30988 = (state_31008[(8)]);
var inst_30987__$1 = (state_31008[(2)]);
var inst_30988__$1 = cljs.core.nth.call(null,inst_30987__$1,(0),null);
var inst_30989 = cljs.core.nth.call(null,inst_30987__$1,(1),null);
var inst_30990 = (inst_30988__$1 == null);
var state_31008__$1 = (function (){var statearr_31010 = state_31008;
(statearr_31010[(9)] = inst_30989);

(statearr_31010[(7)] = inst_30987__$1);

(statearr_31010[(8)] = inst_30988__$1);

return statearr_31010;
})();
if(cljs.core.truth_(inst_30990)){
var statearr_31011_31037 = state_31008__$1;
(statearr_31011_31037[(1)] = (8));

} else {
var statearr_31012_31038 = state_31008__$1;
(statearr_31012_31038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (1))){
var inst_30977 = cljs.core.vec.call(null,chs);
var inst_30978 = inst_30977;
var state_31008__$1 = (function (){var statearr_31013 = state_31008;
(statearr_31013[(10)] = inst_30978);

return statearr_31013;
})();
var statearr_31014_31039 = state_31008__$1;
(statearr_31014_31039[(2)] = null);

(statearr_31014_31039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (4))){
var inst_30978 = (state_31008[(10)]);
var state_31008__$1 = state_31008;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31008__$1,(7),inst_30978);
} else {
if((state_val_31009 === (6))){
var inst_31004 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31015_31040 = state_31008__$1;
(statearr_31015_31040[(2)] = inst_31004);

(statearr_31015_31040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (3))){
var inst_31006 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31008__$1,inst_31006);
} else {
if((state_val_31009 === (2))){
var inst_30978 = (state_31008[(10)]);
var inst_30980 = cljs.core.count.call(null,inst_30978);
var inst_30981 = (inst_30980 > (0));
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30981)){
var statearr_31017_31041 = state_31008__$1;
(statearr_31017_31041[(1)] = (4));

} else {
var statearr_31018_31042 = state_31008__$1;
(statearr_31018_31042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (11))){
var inst_30978 = (state_31008[(10)]);
var inst_30997 = (state_31008[(2)]);
var tmp31016 = inst_30978;
var inst_30978__$1 = tmp31016;
var state_31008__$1 = (function (){var statearr_31019 = state_31008;
(statearr_31019[(10)] = inst_30978__$1);

(statearr_31019[(11)] = inst_30997);

return statearr_31019;
})();
var statearr_31020_31043 = state_31008__$1;
(statearr_31020_31043[(2)] = null);

(statearr_31020_31043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (9))){
var inst_30988 = (state_31008[(8)]);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31008__$1,(11),out,inst_30988);
} else {
if((state_val_31009 === (5))){
var inst_31002 = cljs.core.async.close_BANG_.call(null,out);
var state_31008__$1 = state_31008;
var statearr_31021_31044 = state_31008__$1;
(statearr_31021_31044[(2)] = inst_31002);

(statearr_31021_31044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (10))){
var inst_31000 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31022_31045 = state_31008__$1;
(statearr_31022_31045[(2)] = inst_31000);

(statearr_31022_31045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (8))){
var inst_30978 = (state_31008[(10)]);
var inst_30989 = (state_31008[(9)]);
var inst_30987 = (state_31008[(7)]);
var inst_30988 = (state_31008[(8)]);
var inst_30992 = (function (){var cs = inst_30978;
var vec__30983 = inst_30987;
var v = inst_30988;
var c = inst_30989;
return ((function (cs,vec__30983,v,c,inst_30978,inst_30989,inst_30987,inst_30988,state_val_31009,c__28886__auto___31036,out){
return (function (p1__30973_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30973_SHARP_);
});
;})(cs,vec__30983,v,c,inst_30978,inst_30989,inst_30987,inst_30988,state_val_31009,c__28886__auto___31036,out))
})();
var inst_30993 = cljs.core.filterv.call(null,inst_30992,inst_30978);
var inst_30978__$1 = inst_30993;
var state_31008__$1 = (function (){var statearr_31023 = state_31008;
(statearr_31023[(10)] = inst_30978__$1);

return statearr_31023;
})();
var statearr_31024_31046 = state_31008__$1;
(statearr_31024_31046[(2)] = null);

(statearr_31024_31046[(1)] = (2));


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
});})(c__28886__auto___31036,out))
;
return ((function (switch__28774__auto__,c__28886__auto___31036,out){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_31028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31028[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_31028[(1)] = (1));

return statearr_31028;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_31008){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31029){if((e31029 instanceof Object)){
var ex__28778__auto__ = e31029;
var statearr_31030_31047 = state_31008;
(statearr_31030_31047[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31048 = state_31008;
state_31008 = G__31048;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_31008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_31008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___31036,out))
})();
var state__28888__auto__ = (function (){var statearr_31031 = f__28887__auto__.call(null);
(statearr_31031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___31036);

return statearr_31031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___31036,out))
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
var args31049 = [];
var len__27054__auto___31098 = arguments.length;
var i__27055__auto___31099 = (0);
while(true){
if((i__27055__auto___31099 < len__27054__auto___31098)){
args31049.push((arguments[i__27055__auto___31099]));

var G__31100 = (i__27055__auto___31099 + (1));
i__27055__auto___31099 = G__31100;
continue;
} else {
}
break;
}

var G__31051 = args31049.length;
switch (G__31051) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31049.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28886__auto___31102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___31102,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___31102,out){
return (function (state_31075){
var state_val_31076 = (state_31075[(1)]);
if((state_val_31076 === (7))){
var inst_31057 = (state_31075[(7)]);
var inst_31057__$1 = (state_31075[(2)]);
var inst_31058 = (inst_31057__$1 == null);
var inst_31059 = cljs.core.not.call(null,inst_31058);
var state_31075__$1 = (function (){var statearr_31077 = state_31075;
(statearr_31077[(7)] = inst_31057__$1);

return statearr_31077;
})();
if(inst_31059){
var statearr_31078_31103 = state_31075__$1;
(statearr_31078_31103[(1)] = (8));

} else {
var statearr_31079_31104 = state_31075__$1;
(statearr_31079_31104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (1))){
var inst_31052 = (0);
var state_31075__$1 = (function (){var statearr_31080 = state_31075;
(statearr_31080[(8)] = inst_31052);

return statearr_31080;
})();
var statearr_31081_31105 = state_31075__$1;
(statearr_31081_31105[(2)] = null);

(statearr_31081_31105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (4))){
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31075__$1,(7),ch);
} else {
if((state_val_31076 === (6))){
var inst_31070 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31082_31106 = state_31075__$1;
(statearr_31082_31106[(2)] = inst_31070);

(statearr_31082_31106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (3))){
var inst_31072 = (state_31075[(2)]);
var inst_31073 = cljs.core.async.close_BANG_.call(null,out);
var state_31075__$1 = (function (){var statearr_31083 = state_31075;
(statearr_31083[(9)] = inst_31072);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31075__$1,inst_31073);
} else {
if((state_val_31076 === (2))){
var inst_31052 = (state_31075[(8)]);
var inst_31054 = (inst_31052 < n);
var state_31075__$1 = state_31075;
if(cljs.core.truth_(inst_31054)){
var statearr_31084_31107 = state_31075__$1;
(statearr_31084_31107[(1)] = (4));

} else {
var statearr_31085_31108 = state_31075__$1;
(statearr_31085_31108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (11))){
var inst_31052 = (state_31075[(8)]);
var inst_31062 = (state_31075[(2)]);
var inst_31063 = (inst_31052 + (1));
var inst_31052__$1 = inst_31063;
var state_31075__$1 = (function (){var statearr_31086 = state_31075;
(statearr_31086[(8)] = inst_31052__$1);

(statearr_31086[(10)] = inst_31062);

return statearr_31086;
})();
var statearr_31087_31109 = state_31075__$1;
(statearr_31087_31109[(2)] = null);

(statearr_31087_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (9))){
var state_31075__$1 = state_31075;
var statearr_31088_31110 = state_31075__$1;
(statearr_31088_31110[(2)] = null);

(statearr_31088_31110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (5))){
var state_31075__$1 = state_31075;
var statearr_31089_31111 = state_31075__$1;
(statearr_31089_31111[(2)] = null);

(statearr_31089_31111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (10))){
var inst_31067 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31090_31112 = state_31075__$1;
(statearr_31090_31112[(2)] = inst_31067);

(statearr_31090_31112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (8))){
var inst_31057 = (state_31075[(7)]);
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31075__$1,(11),out,inst_31057);
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
});})(c__28886__auto___31102,out))
;
return ((function (switch__28774__auto__,c__28886__auto___31102,out){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_31094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31094[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_31094[(1)] = (1));

return statearr_31094;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_31075){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31095){if((e31095 instanceof Object)){
var ex__28778__auto__ = e31095;
var statearr_31096_31113 = state_31075;
(statearr_31096_31113[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31114 = state_31075;
state_31075 = G__31114;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_31075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_31075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___31102,out))
})();
var state__28888__auto__ = (function (){var statearr_31097 = f__28887__auto__.call(null);
(statearr_31097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___31102);

return statearr_31097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___31102,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31122 = (function (map_LT_,f,ch,meta31123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31123 = meta31123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31124,meta31123__$1){
var self__ = this;
var _31124__$1 = this;
return (new cljs.core.async.t_cljs$core$async31122(self__.map_LT_,self__.f,self__.ch,meta31123__$1));
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31124){
var self__ = this;
var _31124__$1 = this;
return self__.meta31123;
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31125 = (function (map_LT_,f,ch,meta31123,_,fn1,meta31126){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31123 = meta31123;
this._ = _;
this.fn1 = fn1;
this.meta31126 = meta31126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31127,meta31126__$1){
var self__ = this;
var _31127__$1 = this;
return (new cljs.core.async.t_cljs$core$async31125(self__.map_LT_,self__.f,self__.ch,self__.meta31123,self__._,self__.fn1,meta31126__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31127){
var self__ = this;
var _31127__$1 = this;
return self__.meta31126;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31115_SHARP_){
return f1.call(null,(((p1__31115_SHARP_ == null))?null:self__.f.call(null,p1__31115_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31125.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31123","meta31123",-111530584,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31122","cljs.core.async/t_cljs$core$async31122",-1471396505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31126","meta31126",333811632,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31125";

cljs.core.async.t_cljs$core$async31125.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31125");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31125 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31125(map_LT___$1,f__$1,ch__$1,meta31123__$1,___$2,fn1__$1,meta31126){
return (new cljs.core.async.t_cljs$core$async31125(map_LT___$1,f__$1,ch__$1,meta31123__$1,___$2,fn1__$1,meta31126));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31125(self__.map_LT_,self__.f,self__.ch,self__.meta31123,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31123","meta31123",-111530584,null)], null);
});

cljs.core.async.t_cljs$core$async31122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31122";

cljs.core.async.t_cljs$core$async31122.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31122");
});

cljs.core.async.__GT_t_cljs$core$async31122 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31122(map_LT___$1,f__$1,ch__$1,meta31123){
return (new cljs.core.async.t_cljs$core$async31122(map_LT___$1,f__$1,ch__$1,meta31123));
});

}

return (new cljs.core.async.t_cljs$core$async31122(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31131 = (function (map_GT_,f,ch,meta31132){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31132 = meta31132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31133,meta31132__$1){
var self__ = this;
var _31133__$1 = this;
return (new cljs.core.async.t_cljs$core$async31131(self__.map_GT_,self__.f,self__.ch,meta31132__$1));
});

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31133){
var self__ = this;
var _31133__$1 = this;
return self__.meta31132;
});

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31132","meta31132",1398646460,null)], null);
});

cljs.core.async.t_cljs$core$async31131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31131";

cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31131");
});

cljs.core.async.__GT_t_cljs$core$async31131 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31131(map_GT___$1,f__$1,ch__$1,meta31132){
return (new cljs.core.async.t_cljs$core$async31131(map_GT___$1,f__$1,ch__$1,meta31132));
});

}

return (new cljs.core.async.t_cljs$core$async31131(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31137 = (function (filter_GT_,p,ch,meta31138){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31138 = meta31138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31139,meta31138__$1){
var self__ = this;
var _31139__$1 = this;
return (new cljs.core.async.t_cljs$core$async31137(self__.filter_GT_,self__.p,self__.ch,meta31138__$1));
});

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31139){
var self__ = this;
var _31139__$1 = this;
return self__.meta31138;
});

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31138","meta31138",192965016,null)], null);
});

cljs.core.async.t_cljs$core$async31137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31137";

cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31137");
});

cljs.core.async.__GT_t_cljs$core$async31137 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31137(filter_GT___$1,p__$1,ch__$1,meta31138){
return (new cljs.core.async.t_cljs$core$async31137(filter_GT___$1,p__$1,ch__$1,meta31138));
});

}

return (new cljs.core.async.t_cljs$core$async31137(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31140 = [];
var len__27054__auto___31184 = arguments.length;
var i__27055__auto___31185 = (0);
while(true){
if((i__27055__auto___31185 < len__27054__auto___31184)){
args31140.push((arguments[i__27055__auto___31185]));

var G__31186 = (i__27055__auto___31185 + (1));
i__27055__auto___31185 = G__31186;
continue;
} else {
}
break;
}

var G__31142 = args31140.length;
switch (G__31142) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31140.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28886__auto___31188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___31188,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___31188,out){
return (function (state_31163){
var state_val_31164 = (state_31163[(1)]);
if((state_val_31164 === (7))){
var inst_31159 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31165_31189 = state_31163__$1;
(statearr_31165_31189[(2)] = inst_31159);

(statearr_31165_31189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (1))){
var state_31163__$1 = state_31163;
var statearr_31166_31190 = state_31163__$1;
(statearr_31166_31190[(2)] = null);

(statearr_31166_31190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (4))){
var inst_31145 = (state_31163[(7)]);
var inst_31145__$1 = (state_31163[(2)]);
var inst_31146 = (inst_31145__$1 == null);
var state_31163__$1 = (function (){var statearr_31167 = state_31163;
(statearr_31167[(7)] = inst_31145__$1);

return statearr_31167;
})();
if(cljs.core.truth_(inst_31146)){
var statearr_31168_31191 = state_31163__$1;
(statearr_31168_31191[(1)] = (5));

} else {
var statearr_31169_31192 = state_31163__$1;
(statearr_31169_31192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (6))){
var inst_31145 = (state_31163[(7)]);
var inst_31150 = p.call(null,inst_31145);
var state_31163__$1 = state_31163;
if(cljs.core.truth_(inst_31150)){
var statearr_31170_31193 = state_31163__$1;
(statearr_31170_31193[(1)] = (8));

} else {
var statearr_31171_31194 = state_31163__$1;
(statearr_31171_31194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (3))){
var inst_31161 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31163__$1,inst_31161);
} else {
if((state_val_31164 === (2))){
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31163__$1,(4),ch);
} else {
if((state_val_31164 === (11))){
var inst_31153 = (state_31163[(2)]);
var state_31163__$1 = state_31163;
var statearr_31172_31195 = state_31163__$1;
(statearr_31172_31195[(2)] = inst_31153);

(statearr_31172_31195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (9))){
var state_31163__$1 = state_31163;
var statearr_31173_31196 = state_31163__$1;
(statearr_31173_31196[(2)] = null);

(statearr_31173_31196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (5))){
var inst_31148 = cljs.core.async.close_BANG_.call(null,out);
var state_31163__$1 = state_31163;
var statearr_31174_31197 = state_31163__$1;
(statearr_31174_31197[(2)] = inst_31148);

(statearr_31174_31197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (10))){
var inst_31156 = (state_31163[(2)]);
var state_31163__$1 = (function (){var statearr_31175 = state_31163;
(statearr_31175[(8)] = inst_31156);

return statearr_31175;
})();
var statearr_31176_31198 = state_31163__$1;
(statearr_31176_31198[(2)] = null);

(statearr_31176_31198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31164 === (8))){
var inst_31145 = (state_31163[(7)]);
var state_31163__$1 = state_31163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31163__$1,(11),out,inst_31145);
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
});})(c__28886__auto___31188,out))
;
return ((function (switch__28774__auto__,c__28886__auto___31188,out){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_31180 = [null,null,null,null,null,null,null,null,null];
(statearr_31180[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_31180[(1)] = (1));

return statearr_31180;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_31163){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31181){if((e31181 instanceof Object)){
var ex__28778__auto__ = e31181;
var statearr_31182_31199 = state_31163;
(statearr_31182_31199[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31200 = state_31163;
state_31163 = G__31200;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_31163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_31163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___31188,out))
})();
var state__28888__auto__ = (function (){var statearr_31183 = f__28887__auto__.call(null);
(statearr_31183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___31188);

return statearr_31183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___31188,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31201 = [];
var len__27054__auto___31204 = arguments.length;
var i__27055__auto___31205 = (0);
while(true){
if((i__27055__auto___31205 < len__27054__auto___31204)){
args31201.push((arguments[i__27055__auto___31205]));

var G__31206 = (i__27055__auto___31205 + (1));
i__27055__auto___31205 = G__31206;
continue;
} else {
}
break;
}

var G__31203 = args31201.length;
switch (G__31203) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31201.length)].join('')));

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
var c__28886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto__){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto__){
return (function (state_31373){
var state_val_31374 = (state_31373[(1)]);
if((state_val_31374 === (7))){
var inst_31369 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31375_31416 = state_31373__$1;
(statearr_31375_31416[(2)] = inst_31369);

(statearr_31375_31416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (20))){
var inst_31339 = (state_31373[(7)]);
var inst_31350 = (state_31373[(2)]);
var inst_31351 = cljs.core.next.call(null,inst_31339);
var inst_31325 = inst_31351;
var inst_31326 = null;
var inst_31327 = (0);
var inst_31328 = (0);
var state_31373__$1 = (function (){var statearr_31376 = state_31373;
(statearr_31376[(8)] = inst_31328);

(statearr_31376[(9)] = inst_31326);

(statearr_31376[(10)] = inst_31325);

(statearr_31376[(11)] = inst_31350);

(statearr_31376[(12)] = inst_31327);

return statearr_31376;
})();
var statearr_31377_31417 = state_31373__$1;
(statearr_31377_31417[(2)] = null);

(statearr_31377_31417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (1))){
var state_31373__$1 = state_31373;
var statearr_31378_31418 = state_31373__$1;
(statearr_31378_31418[(2)] = null);

(statearr_31378_31418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (4))){
var inst_31314 = (state_31373[(13)]);
var inst_31314__$1 = (state_31373[(2)]);
var inst_31315 = (inst_31314__$1 == null);
var state_31373__$1 = (function (){var statearr_31379 = state_31373;
(statearr_31379[(13)] = inst_31314__$1);

return statearr_31379;
})();
if(cljs.core.truth_(inst_31315)){
var statearr_31380_31419 = state_31373__$1;
(statearr_31380_31419[(1)] = (5));

} else {
var statearr_31381_31420 = state_31373__$1;
(statearr_31381_31420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (15))){
var state_31373__$1 = state_31373;
var statearr_31385_31421 = state_31373__$1;
(statearr_31385_31421[(2)] = null);

(statearr_31385_31421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (21))){
var state_31373__$1 = state_31373;
var statearr_31386_31422 = state_31373__$1;
(statearr_31386_31422[(2)] = null);

(statearr_31386_31422[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (13))){
var inst_31328 = (state_31373[(8)]);
var inst_31326 = (state_31373[(9)]);
var inst_31325 = (state_31373[(10)]);
var inst_31327 = (state_31373[(12)]);
var inst_31335 = (state_31373[(2)]);
var inst_31336 = (inst_31328 + (1));
var tmp31382 = inst_31326;
var tmp31383 = inst_31325;
var tmp31384 = inst_31327;
var inst_31325__$1 = tmp31383;
var inst_31326__$1 = tmp31382;
var inst_31327__$1 = tmp31384;
var inst_31328__$1 = inst_31336;
var state_31373__$1 = (function (){var statearr_31387 = state_31373;
(statearr_31387[(8)] = inst_31328__$1);

(statearr_31387[(9)] = inst_31326__$1);

(statearr_31387[(10)] = inst_31325__$1);

(statearr_31387[(14)] = inst_31335);

(statearr_31387[(12)] = inst_31327__$1);

return statearr_31387;
})();
var statearr_31388_31423 = state_31373__$1;
(statearr_31388_31423[(2)] = null);

(statearr_31388_31423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (22))){
var state_31373__$1 = state_31373;
var statearr_31389_31424 = state_31373__$1;
(statearr_31389_31424[(2)] = null);

(statearr_31389_31424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (6))){
var inst_31314 = (state_31373[(13)]);
var inst_31323 = f.call(null,inst_31314);
var inst_31324 = cljs.core.seq.call(null,inst_31323);
var inst_31325 = inst_31324;
var inst_31326 = null;
var inst_31327 = (0);
var inst_31328 = (0);
var state_31373__$1 = (function (){var statearr_31390 = state_31373;
(statearr_31390[(8)] = inst_31328);

(statearr_31390[(9)] = inst_31326);

(statearr_31390[(10)] = inst_31325);

(statearr_31390[(12)] = inst_31327);

return statearr_31390;
})();
var statearr_31391_31425 = state_31373__$1;
(statearr_31391_31425[(2)] = null);

(statearr_31391_31425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (17))){
var inst_31339 = (state_31373[(7)]);
var inst_31343 = cljs.core.chunk_first.call(null,inst_31339);
var inst_31344 = cljs.core.chunk_rest.call(null,inst_31339);
var inst_31345 = cljs.core.count.call(null,inst_31343);
var inst_31325 = inst_31344;
var inst_31326 = inst_31343;
var inst_31327 = inst_31345;
var inst_31328 = (0);
var state_31373__$1 = (function (){var statearr_31392 = state_31373;
(statearr_31392[(8)] = inst_31328);

(statearr_31392[(9)] = inst_31326);

(statearr_31392[(10)] = inst_31325);

(statearr_31392[(12)] = inst_31327);

return statearr_31392;
})();
var statearr_31393_31426 = state_31373__$1;
(statearr_31393_31426[(2)] = null);

(statearr_31393_31426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (3))){
var inst_31371 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31373__$1,inst_31371);
} else {
if((state_val_31374 === (12))){
var inst_31359 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31394_31427 = state_31373__$1;
(statearr_31394_31427[(2)] = inst_31359);

(statearr_31394_31427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (2))){
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31373__$1,(4),in$);
} else {
if((state_val_31374 === (23))){
var inst_31367 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31395_31428 = state_31373__$1;
(statearr_31395_31428[(2)] = inst_31367);

(statearr_31395_31428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (19))){
var inst_31354 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31396_31429 = state_31373__$1;
(statearr_31396_31429[(2)] = inst_31354);

(statearr_31396_31429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (11))){
var inst_31339 = (state_31373[(7)]);
var inst_31325 = (state_31373[(10)]);
var inst_31339__$1 = cljs.core.seq.call(null,inst_31325);
var state_31373__$1 = (function (){var statearr_31397 = state_31373;
(statearr_31397[(7)] = inst_31339__$1);

return statearr_31397;
})();
if(inst_31339__$1){
var statearr_31398_31430 = state_31373__$1;
(statearr_31398_31430[(1)] = (14));

} else {
var statearr_31399_31431 = state_31373__$1;
(statearr_31399_31431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (9))){
var inst_31361 = (state_31373[(2)]);
var inst_31362 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31373__$1 = (function (){var statearr_31400 = state_31373;
(statearr_31400[(15)] = inst_31361);

return statearr_31400;
})();
if(cljs.core.truth_(inst_31362)){
var statearr_31401_31432 = state_31373__$1;
(statearr_31401_31432[(1)] = (21));

} else {
var statearr_31402_31433 = state_31373__$1;
(statearr_31402_31433[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (5))){
var inst_31317 = cljs.core.async.close_BANG_.call(null,out);
var state_31373__$1 = state_31373;
var statearr_31403_31434 = state_31373__$1;
(statearr_31403_31434[(2)] = inst_31317);

(statearr_31403_31434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (14))){
var inst_31339 = (state_31373[(7)]);
var inst_31341 = cljs.core.chunked_seq_QMARK_.call(null,inst_31339);
var state_31373__$1 = state_31373;
if(inst_31341){
var statearr_31404_31435 = state_31373__$1;
(statearr_31404_31435[(1)] = (17));

} else {
var statearr_31405_31436 = state_31373__$1;
(statearr_31405_31436[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (16))){
var inst_31357 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31406_31437 = state_31373__$1;
(statearr_31406_31437[(2)] = inst_31357);

(statearr_31406_31437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (10))){
var inst_31328 = (state_31373[(8)]);
var inst_31326 = (state_31373[(9)]);
var inst_31333 = cljs.core._nth.call(null,inst_31326,inst_31328);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31373__$1,(13),out,inst_31333);
} else {
if((state_val_31374 === (18))){
var inst_31339 = (state_31373[(7)]);
var inst_31348 = cljs.core.first.call(null,inst_31339);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31373__$1,(20),out,inst_31348);
} else {
if((state_val_31374 === (8))){
var inst_31328 = (state_31373[(8)]);
var inst_31327 = (state_31373[(12)]);
var inst_31330 = (inst_31328 < inst_31327);
var inst_31331 = inst_31330;
var state_31373__$1 = state_31373;
if(cljs.core.truth_(inst_31331)){
var statearr_31407_31438 = state_31373__$1;
(statearr_31407_31438[(1)] = (10));

} else {
var statearr_31408_31439 = state_31373__$1;
(statearr_31408_31439[(1)] = (11));

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
});})(c__28886__auto__))
;
return ((function (switch__28774__auto__,c__28886__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28775__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28775__auto____0 = (function (){
var statearr_31412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31412[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28775__auto__);

(statearr_31412[(1)] = (1));

return statearr_31412;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28775__auto____1 = (function (state_31373){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31413){if((e31413 instanceof Object)){
var ex__28778__auto__ = e31413;
var statearr_31414_31440 = state_31373;
(statearr_31414_31440[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31441 = state_31373;
state_31373 = G__31441;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28775__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28775__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto__))
})();
var state__28888__auto__ = (function (){var statearr_31415 = f__28887__auto__.call(null);
(statearr_31415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto__);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto__))
);

return c__28886__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31442 = [];
var len__27054__auto___31445 = arguments.length;
var i__27055__auto___31446 = (0);
while(true){
if((i__27055__auto___31446 < len__27054__auto___31445)){
args31442.push((arguments[i__27055__auto___31446]));

var G__31447 = (i__27055__auto___31446 + (1));
i__27055__auto___31446 = G__31447;
continue;
} else {
}
break;
}

var G__31444 = args31442.length;
switch (G__31444) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31442.length)].join('')));

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
var args31449 = [];
var len__27054__auto___31452 = arguments.length;
var i__27055__auto___31453 = (0);
while(true){
if((i__27055__auto___31453 < len__27054__auto___31452)){
args31449.push((arguments[i__27055__auto___31453]));

var G__31454 = (i__27055__auto___31453 + (1));
i__27055__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var G__31451 = args31449.length;
switch (G__31451) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31449.length)].join('')));

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
var args31456 = [];
var len__27054__auto___31507 = arguments.length;
var i__27055__auto___31508 = (0);
while(true){
if((i__27055__auto___31508 < len__27054__auto___31507)){
args31456.push((arguments[i__27055__auto___31508]));

var G__31509 = (i__27055__auto___31508 + (1));
i__27055__auto___31508 = G__31509;
continue;
} else {
}
break;
}

var G__31458 = args31456.length;
switch (G__31458) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31456.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28886__auto___31511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___31511,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___31511,out){
return (function (state_31482){
var state_val_31483 = (state_31482[(1)]);
if((state_val_31483 === (7))){
var inst_31477 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31484_31512 = state_31482__$1;
(statearr_31484_31512[(2)] = inst_31477);

(statearr_31484_31512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (1))){
var inst_31459 = null;
var state_31482__$1 = (function (){var statearr_31485 = state_31482;
(statearr_31485[(7)] = inst_31459);

return statearr_31485;
})();
var statearr_31486_31513 = state_31482__$1;
(statearr_31486_31513[(2)] = null);

(statearr_31486_31513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (4))){
var inst_31462 = (state_31482[(8)]);
var inst_31462__$1 = (state_31482[(2)]);
var inst_31463 = (inst_31462__$1 == null);
var inst_31464 = cljs.core.not.call(null,inst_31463);
var state_31482__$1 = (function (){var statearr_31487 = state_31482;
(statearr_31487[(8)] = inst_31462__$1);

return statearr_31487;
})();
if(inst_31464){
var statearr_31488_31514 = state_31482__$1;
(statearr_31488_31514[(1)] = (5));

} else {
var statearr_31489_31515 = state_31482__$1;
(statearr_31489_31515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (6))){
var state_31482__$1 = state_31482;
var statearr_31490_31516 = state_31482__$1;
(statearr_31490_31516[(2)] = null);

(statearr_31490_31516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (3))){
var inst_31479 = (state_31482[(2)]);
var inst_31480 = cljs.core.async.close_BANG_.call(null,out);
var state_31482__$1 = (function (){var statearr_31491 = state_31482;
(statearr_31491[(9)] = inst_31479);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31482__$1,inst_31480);
} else {
if((state_val_31483 === (2))){
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31482__$1,(4),ch);
} else {
if((state_val_31483 === (11))){
var inst_31462 = (state_31482[(8)]);
var inst_31471 = (state_31482[(2)]);
var inst_31459 = inst_31462;
var state_31482__$1 = (function (){var statearr_31492 = state_31482;
(statearr_31492[(7)] = inst_31459);

(statearr_31492[(10)] = inst_31471);

return statearr_31492;
})();
var statearr_31493_31517 = state_31482__$1;
(statearr_31493_31517[(2)] = null);

(statearr_31493_31517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (9))){
var inst_31462 = (state_31482[(8)]);
var state_31482__$1 = state_31482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31482__$1,(11),out,inst_31462);
} else {
if((state_val_31483 === (5))){
var inst_31462 = (state_31482[(8)]);
var inst_31459 = (state_31482[(7)]);
var inst_31466 = cljs.core._EQ_.call(null,inst_31462,inst_31459);
var state_31482__$1 = state_31482;
if(inst_31466){
var statearr_31495_31518 = state_31482__$1;
(statearr_31495_31518[(1)] = (8));

} else {
var statearr_31496_31519 = state_31482__$1;
(statearr_31496_31519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (10))){
var inst_31474 = (state_31482[(2)]);
var state_31482__$1 = state_31482;
var statearr_31497_31520 = state_31482__$1;
(statearr_31497_31520[(2)] = inst_31474);

(statearr_31497_31520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31483 === (8))){
var inst_31459 = (state_31482[(7)]);
var tmp31494 = inst_31459;
var inst_31459__$1 = tmp31494;
var state_31482__$1 = (function (){var statearr_31498 = state_31482;
(statearr_31498[(7)] = inst_31459__$1);

return statearr_31498;
})();
var statearr_31499_31521 = state_31482__$1;
(statearr_31499_31521[(2)] = null);

(statearr_31499_31521[(1)] = (2));


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
});})(c__28886__auto___31511,out))
;
return ((function (switch__28774__auto__,c__28886__auto___31511,out){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_31503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31503[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_31503[(1)] = (1));

return statearr_31503;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_31482){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31504){if((e31504 instanceof Object)){
var ex__28778__auto__ = e31504;
var statearr_31505_31522 = state_31482;
(statearr_31505_31522[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31523 = state_31482;
state_31482 = G__31523;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_31482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_31482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___31511,out))
})();
var state__28888__auto__ = (function (){var statearr_31506 = f__28887__auto__.call(null);
(statearr_31506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___31511);

return statearr_31506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___31511,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31524 = [];
var len__27054__auto___31594 = arguments.length;
var i__27055__auto___31595 = (0);
while(true){
if((i__27055__auto___31595 < len__27054__auto___31594)){
args31524.push((arguments[i__27055__auto___31595]));

var G__31596 = (i__27055__auto___31595 + (1));
i__27055__auto___31595 = G__31596;
continue;
} else {
}
break;
}

var G__31526 = args31524.length;
switch (G__31526) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31524.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28886__auto___31598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___31598,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___31598,out){
return (function (state_31564){
var state_val_31565 = (state_31564[(1)]);
if((state_val_31565 === (7))){
var inst_31560 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
var statearr_31566_31599 = state_31564__$1;
(statearr_31566_31599[(2)] = inst_31560);

(statearr_31566_31599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (1))){
var inst_31527 = (new Array(n));
var inst_31528 = inst_31527;
var inst_31529 = (0);
var state_31564__$1 = (function (){var statearr_31567 = state_31564;
(statearr_31567[(7)] = inst_31528);

(statearr_31567[(8)] = inst_31529);

return statearr_31567;
})();
var statearr_31568_31600 = state_31564__$1;
(statearr_31568_31600[(2)] = null);

(statearr_31568_31600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (4))){
var inst_31532 = (state_31564[(9)]);
var inst_31532__$1 = (state_31564[(2)]);
var inst_31533 = (inst_31532__$1 == null);
var inst_31534 = cljs.core.not.call(null,inst_31533);
var state_31564__$1 = (function (){var statearr_31569 = state_31564;
(statearr_31569[(9)] = inst_31532__$1);

return statearr_31569;
})();
if(inst_31534){
var statearr_31570_31601 = state_31564__$1;
(statearr_31570_31601[(1)] = (5));

} else {
var statearr_31571_31602 = state_31564__$1;
(statearr_31571_31602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (15))){
var inst_31554 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
var statearr_31572_31603 = state_31564__$1;
(statearr_31572_31603[(2)] = inst_31554);

(statearr_31572_31603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (13))){
var state_31564__$1 = state_31564;
var statearr_31573_31604 = state_31564__$1;
(statearr_31573_31604[(2)] = null);

(statearr_31573_31604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (6))){
var inst_31529 = (state_31564[(8)]);
var inst_31550 = (inst_31529 > (0));
var state_31564__$1 = state_31564;
if(cljs.core.truth_(inst_31550)){
var statearr_31574_31605 = state_31564__$1;
(statearr_31574_31605[(1)] = (12));

} else {
var statearr_31575_31606 = state_31564__$1;
(statearr_31575_31606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (3))){
var inst_31562 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31564__$1,inst_31562);
} else {
if((state_val_31565 === (12))){
var inst_31528 = (state_31564[(7)]);
var inst_31552 = cljs.core.vec.call(null,inst_31528);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31564__$1,(15),out,inst_31552);
} else {
if((state_val_31565 === (2))){
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31564__$1,(4),ch);
} else {
if((state_val_31565 === (11))){
var inst_31544 = (state_31564[(2)]);
var inst_31545 = (new Array(n));
var inst_31528 = inst_31545;
var inst_31529 = (0);
var state_31564__$1 = (function (){var statearr_31576 = state_31564;
(statearr_31576[(7)] = inst_31528);

(statearr_31576[(8)] = inst_31529);

(statearr_31576[(10)] = inst_31544);

return statearr_31576;
})();
var statearr_31577_31607 = state_31564__$1;
(statearr_31577_31607[(2)] = null);

(statearr_31577_31607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (9))){
var inst_31528 = (state_31564[(7)]);
var inst_31542 = cljs.core.vec.call(null,inst_31528);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31564__$1,(11),out,inst_31542);
} else {
if((state_val_31565 === (5))){
var inst_31528 = (state_31564[(7)]);
var inst_31532 = (state_31564[(9)]);
var inst_31529 = (state_31564[(8)]);
var inst_31537 = (state_31564[(11)]);
var inst_31536 = (inst_31528[inst_31529] = inst_31532);
var inst_31537__$1 = (inst_31529 + (1));
var inst_31538 = (inst_31537__$1 < n);
var state_31564__$1 = (function (){var statearr_31578 = state_31564;
(statearr_31578[(12)] = inst_31536);

(statearr_31578[(11)] = inst_31537__$1);

return statearr_31578;
})();
if(cljs.core.truth_(inst_31538)){
var statearr_31579_31608 = state_31564__$1;
(statearr_31579_31608[(1)] = (8));

} else {
var statearr_31580_31609 = state_31564__$1;
(statearr_31580_31609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (14))){
var inst_31557 = (state_31564[(2)]);
var inst_31558 = cljs.core.async.close_BANG_.call(null,out);
var state_31564__$1 = (function (){var statearr_31582 = state_31564;
(statearr_31582[(13)] = inst_31557);

return statearr_31582;
})();
var statearr_31583_31610 = state_31564__$1;
(statearr_31583_31610[(2)] = inst_31558);

(statearr_31583_31610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (10))){
var inst_31548 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
var statearr_31584_31611 = state_31564__$1;
(statearr_31584_31611[(2)] = inst_31548);

(statearr_31584_31611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (8))){
var inst_31528 = (state_31564[(7)]);
var inst_31537 = (state_31564[(11)]);
var tmp31581 = inst_31528;
var inst_31528__$1 = tmp31581;
var inst_31529 = inst_31537;
var state_31564__$1 = (function (){var statearr_31585 = state_31564;
(statearr_31585[(7)] = inst_31528__$1);

(statearr_31585[(8)] = inst_31529);

return statearr_31585;
})();
var statearr_31586_31612 = state_31564__$1;
(statearr_31586_31612[(2)] = null);

(statearr_31586_31612[(1)] = (2));


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
});})(c__28886__auto___31598,out))
;
return ((function (switch__28774__auto__,c__28886__auto___31598,out){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_31590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31590[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_31590[(1)] = (1));

return statearr_31590;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_31564){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31591){if((e31591 instanceof Object)){
var ex__28778__auto__ = e31591;
var statearr_31592_31613 = state_31564;
(statearr_31592_31613[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31614 = state_31564;
state_31564 = G__31614;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_31564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_31564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___31598,out))
})();
var state__28888__auto__ = (function (){var statearr_31593 = f__28887__auto__.call(null);
(statearr_31593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___31598);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___31598,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31615 = [];
var len__27054__auto___31689 = arguments.length;
var i__27055__auto___31690 = (0);
while(true){
if((i__27055__auto___31690 < len__27054__auto___31689)){
args31615.push((arguments[i__27055__auto___31690]));

var G__31691 = (i__27055__auto___31690 + (1));
i__27055__auto___31690 = G__31691;
continue;
} else {
}
break;
}

var G__31617 = args31615.length;
switch (G__31617) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31615.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28886__auto___31693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28886__auto___31693,out){
return (function (){
var f__28887__auto__ = (function (){var switch__28774__auto__ = ((function (c__28886__auto___31693,out){
return (function (state_31659){
var state_val_31660 = (state_31659[(1)]);
if((state_val_31660 === (7))){
var inst_31655 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31661_31694 = state_31659__$1;
(statearr_31661_31694[(2)] = inst_31655);

(statearr_31661_31694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (1))){
var inst_31618 = [];
var inst_31619 = inst_31618;
var inst_31620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31659__$1 = (function (){var statearr_31662 = state_31659;
(statearr_31662[(7)] = inst_31619);

(statearr_31662[(8)] = inst_31620);

return statearr_31662;
})();
var statearr_31663_31695 = state_31659__$1;
(statearr_31663_31695[(2)] = null);

(statearr_31663_31695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (4))){
var inst_31623 = (state_31659[(9)]);
var inst_31623__$1 = (state_31659[(2)]);
var inst_31624 = (inst_31623__$1 == null);
var inst_31625 = cljs.core.not.call(null,inst_31624);
var state_31659__$1 = (function (){var statearr_31664 = state_31659;
(statearr_31664[(9)] = inst_31623__$1);

return statearr_31664;
})();
if(inst_31625){
var statearr_31665_31696 = state_31659__$1;
(statearr_31665_31696[(1)] = (5));

} else {
var statearr_31666_31697 = state_31659__$1;
(statearr_31666_31697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (15))){
var inst_31649 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31667_31698 = state_31659__$1;
(statearr_31667_31698[(2)] = inst_31649);

(statearr_31667_31698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (13))){
var state_31659__$1 = state_31659;
var statearr_31668_31699 = state_31659__$1;
(statearr_31668_31699[(2)] = null);

(statearr_31668_31699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (6))){
var inst_31619 = (state_31659[(7)]);
var inst_31644 = inst_31619.length;
var inst_31645 = (inst_31644 > (0));
var state_31659__$1 = state_31659;
if(cljs.core.truth_(inst_31645)){
var statearr_31669_31700 = state_31659__$1;
(statearr_31669_31700[(1)] = (12));

} else {
var statearr_31670_31701 = state_31659__$1;
(statearr_31670_31701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (3))){
var inst_31657 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31659__$1,inst_31657);
} else {
if((state_val_31660 === (12))){
var inst_31619 = (state_31659[(7)]);
var inst_31647 = cljs.core.vec.call(null,inst_31619);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31659__$1,(15),out,inst_31647);
} else {
if((state_val_31660 === (2))){
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31659__$1,(4),ch);
} else {
if((state_val_31660 === (11))){
var inst_31623 = (state_31659[(9)]);
var inst_31627 = (state_31659[(10)]);
var inst_31637 = (state_31659[(2)]);
var inst_31638 = [];
var inst_31639 = inst_31638.push(inst_31623);
var inst_31619 = inst_31638;
var inst_31620 = inst_31627;
var state_31659__$1 = (function (){var statearr_31671 = state_31659;
(statearr_31671[(7)] = inst_31619);

(statearr_31671[(11)] = inst_31637);

(statearr_31671[(12)] = inst_31639);

(statearr_31671[(8)] = inst_31620);

return statearr_31671;
})();
var statearr_31672_31702 = state_31659__$1;
(statearr_31672_31702[(2)] = null);

(statearr_31672_31702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (9))){
var inst_31619 = (state_31659[(7)]);
var inst_31635 = cljs.core.vec.call(null,inst_31619);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31659__$1,(11),out,inst_31635);
} else {
if((state_val_31660 === (5))){
var inst_31623 = (state_31659[(9)]);
var inst_31627 = (state_31659[(10)]);
var inst_31620 = (state_31659[(8)]);
var inst_31627__$1 = f.call(null,inst_31623);
var inst_31628 = cljs.core._EQ_.call(null,inst_31627__$1,inst_31620);
var inst_31629 = cljs.core.keyword_identical_QMARK_.call(null,inst_31620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31630 = (inst_31628) || (inst_31629);
var state_31659__$1 = (function (){var statearr_31673 = state_31659;
(statearr_31673[(10)] = inst_31627__$1);

return statearr_31673;
})();
if(cljs.core.truth_(inst_31630)){
var statearr_31674_31703 = state_31659__$1;
(statearr_31674_31703[(1)] = (8));

} else {
var statearr_31675_31704 = state_31659__$1;
(statearr_31675_31704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (14))){
var inst_31652 = (state_31659[(2)]);
var inst_31653 = cljs.core.async.close_BANG_.call(null,out);
var state_31659__$1 = (function (){var statearr_31677 = state_31659;
(statearr_31677[(13)] = inst_31652);

return statearr_31677;
})();
var statearr_31678_31705 = state_31659__$1;
(statearr_31678_31705[(2)] = inst_31653);

(statearr_31678_31705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (10))){
var inst_31642 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31679_31706 = state_31659__$1;
(statearr_31679_31706[(2)] = inst_31642);

(statearr_31679_31706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (8))){
var inst_31623 = (state_31659[(9)]);
var inst_31619 = (state_31659[(7)]);
var inst_31627 = (state_31659[(10)]);
var inst_31632 = inst_31619.push(inst_31623);
var tmp31676 = inst_31619;
var inst_31619__$1 = tmp31676;
var inst_31620 = inst_31627;
var state_31659__$1 = (function (){var statearr_31680 = state_31659;
(statearr_31680[(14)] = inst_31632);

(statearr_31680[(7)] = inst_31619__$1);

(statearr_31680[(8)] = inst_31620);

return statearr_31680;
})();
var statearr_31681_31707 = state_31659__$1;
(statearr_31681_31707[(2)] = null);

(statearr_31681_31707[(1)] = (2));


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
});})(c__28886__auto___31693,out))
;
return ((function (switch__28774__auto__,c__28886__auto___31693,out){
return (function() {
var cljs$core$async$state_machine__28775__auto__ = null;
var cljs$core$async$state_machine__28775__auto____0 = (function (){
var statearr_31685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31685[(0)] = cljs$core$async$state_machine__28775__auto__);

(statearr_31685[(1)] = (1));

return statearr_31685;
});
var cljs$core$async$state_machine__28775__auto____1 = (function (state_31659){
while(true){
var ret_value__28776__auto__ = (function (){try{while(true){
var result__28777__auto__ = switch__28774__auto__.call(null,state_31659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28777__auto__;
}
break;
}
}catch (e31686){if((e31686 instanceof Object)){
var ex__28778__auto__ = e31686;
var statearr_31687_31708 = state_31659;
(statearr_31687_31708[(5)] = ex__28778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31709 = state_31659;
state_31659 = G__31709;
continue;
} else {
return ret_value__28776__auto__;
}
break;
}
});
cljs$core$async$state_machine__28775__auto__ = function(state_31659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28775__auto____1.call(this,state_31659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28775__auto____0;
cljs$core$async$state_machine__28775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28775__auto____1;
return cljs$core$async$state_machine__28775__auto__;
})()
;})(switch__28774__auto__,c__28886__auto___31693,out))
})();
var state__28888__auto__ = (function (){var statearr_31688 = f__28887__auto__.call(null);
(statearr_31688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28886__auto___31693);

return statearr_31688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28888__auto__);
});})(c__28886__auto___31693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496852852257