# $(document).ready() 和 window.onload()的区别

## 1.$(document).ready()
>DOM结构加载完毕则运行
>可以有多个, 并且按顺序触发

## 2.window.onload()
>等待网页上所有元素和资源加载完毕后, 才会触发
>只会执行一次, 如果有多个, 则执行最后一个

### 模拟实现$(document).ready()

    function ready(fn){
        //标准浏览器中
        if(document.addEventListener){
            document.addEventListener('DOMContentLoaded',function(){
                document.removeEventListener('DOMContentLoaded',arguments.callee,false);
                //执行函数
                fn();
            })
        }
        //IE
        else{
            document.attachEvent('onreadystatechange',function(){
                if(document.readyState === 'complate'){
                    document.detachEvent('onreadystatechange',argument.callee);

                    fn();
                }
            })
        }
    }