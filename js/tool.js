function $$(selector,context){
    context=context || document;
    var elements=context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

// 检查某个属性是否被支持 , 核心思路就是在任一元素的element.style对象上检查该属性是否存在
function testProperty(property){
    var root=document.documentElement;
    if(property in root.style){
        root.classList.add(property.toLowerCase());
        return true;
    }else{
        root.classList.add('no-'+property.toLowerCase());
        return false;
    }
}

// 检测具体的属性值是否支持

function testValue(id,value,property){
    var dummy=document.createElement('p');
    dummy.style[property]=value;
    if(dummy.style[property]){
        root.classList.add(id);
        return true;
    }

    root.classList.add('no-'+id);
    return false;

}

// 常见的前缀分别是 Firefox 的 -moz-、IE 的 -ms-、Opera的 -o- 以及 Safari 和 Chrome 的 -webkit-