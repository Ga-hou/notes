# call apply bind的区别和实现

1.  call和apply都可以改变this的指向, 作用都是一样, 只是参数不同; call接受多个参数, 而apply接受参数数组

>模拟实现call

    function.prototype.myCall = function(context){
        var context = context || window;
        context.fn = this;

        //获得参数
        var args = [...argumetns.slice(1)];
        
        var result = context.fn(args);

        return result;
    }

>模拟实现apply

    function.prototype.myApply = function(window){
        var context = context || window;
        context.fn = this;

        var result;
        //判断
        if(arguments[1]){
            result = context.fn(...arguments.slice(1));
        }
        else{
            result = context.fn();
        }

        return result;
    }