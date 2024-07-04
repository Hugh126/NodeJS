//event.js 文件

/**
 * 消息队列
 */
var eventName = "event-1";
var events = require('events'); 
var emitter = new events.EventEmitter(); 
// 创建 监听器并绑定到 事件
emitter.on(eventName, function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
//  监听器最多只会触发一次
emitter.once(eventName, function(arg1, arg2, arg3) { 
// emitter.on(eventName, function(arg1, arg2, arg3) { 
    console.log('listener2', arg1, arg2, arg3); 
}); 

// 触发事件
emitter.emit(eventName, 'arg1 参数', 'arg2 参数'); 
// 移除监听器
// eventEmitter.removeListener(eventName, listener1);
emitter.emit(eventName, 'arg1 参数', 'arg2 参数'); 



