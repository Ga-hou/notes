// 记录DOM节点
function Element(tagName,props,children){
    //防止this绑定
    if(!(this instanceof Element)){
        if(!Array.isArray(children) && children!=null){
            children = Array.prototype.slice.call(arguments,2);
        }
        return new Element(tagName,props,children);
    }

    if(Array.isArray(props)){
        children = props;
        props = {};
    }


    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
    this.key = props ? props.key : void 0;

    let count = 0;

    this.children.forEach((child,index) => {
        if(child instanceof Element){
            count += child.count;
        }
        else{
            children[index] = '' + child;
        }
    });

}
Element.prototype.render = function(){
    let ele = document.createElement(this.tagName);
    let props = this.props;

    for(let propName in props){
        let propValue = props[propName];
        ele.setAttribute(propName,propValue);
    }

    let children = this.children || [];

    children.forEach(child => {
        let childEle = (child instanceof Element)
            ? child.render()
            : document.createTextNode(child);
        ele.appendChild(childEle);
    });

    return ele;
}


export default Element;