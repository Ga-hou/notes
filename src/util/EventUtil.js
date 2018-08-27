var EventUtil = {
    //事件处理
    addHandle: function(element, type, handle){
        if(element.addEventListener){
            element.addEventListener(type,handle,false);
        }
        else if(element.attachEvent){
            element.attachEvent('on'+ type, handle);
        }
        else{
            element['on' + type] = handle;
        }
    },
    removeHandle: function(element, type, handle){
        if(element.removeEventListener){
            element.removeEventListener(type, handle, false);
        }
        else if(element.detachEvent){
            element.detachEvent(type, handle);
        }
        else{
            element['on' + type] = null;
        }
    },

    //事件对象
    getEvent: function(event){
        return event ? event : window.event;
    },

    getTarget: function(event){
        return event.target ? event.target : event.srcElement;
    },
    //阻止默认事件
    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            //ie
            event.returnValue = false;
        }
    },

    //停止事件的传播
    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }
        else{
            event.cancelBubble = false;
            //IE
        }
    },

    getRelatedTarget: function(event){
        if(event.relatedTarget){
            return event.relatedTarget;
        }
        else if(event.toElement){
            return event.toElement;
        }
        else if(event.fromElement){
            return event.fromElement;
        }
        else {
            return null;
        }
    },

    //鼠标按钮
    getButton: function(event){
        if(document.implementation.hasFeature('MouseEvents','2.0')){
            return event.button;
        }
        else{
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    }
}