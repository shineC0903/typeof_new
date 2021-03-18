(function (){
    var class2type = {};
    var tostring = class2type.tostring;//Object.prototype.toString

    //设定数据类型的映射表
    ["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol"].forEach(name => {
        class2type[`[object ${name}]`] = name.toLowerCase();
    });
    console.log(class2type);

    function typeof_new(obj){
        if (obj == null){
            return obj + "";//传递的值是null或者undefined，则返回对应的字符串
        }
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }

    window.typeof_new = typeof_new;
    
})()