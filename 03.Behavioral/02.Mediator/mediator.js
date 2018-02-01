var Mediator = (function(){
    var channels = {};

    var subscribe = function(channel, context, func){
        if(!channels[channel]){
            channels[channel] = [];
        }
        channels[channel].push({
            context: context,
            func: func
        });
    }

    var publish = function(channel){
        if(!channels[channel]){
            return false;
        }

        var args = Array.prototype.slice.call(arguments,1);

        for(var i=0; i< channels[channel].length; i++){
            var sub = channels[channel][i];
            sub.func.apply(sub.context,args);
        }
    }

    return {
        subscribe: subscribe,
        publish: publish
    };
}());


module.exports = Mediator;