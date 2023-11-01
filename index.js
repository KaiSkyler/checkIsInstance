//检查给定的值是否是给定类或超类的实例 通过instanceof实现
function checkIsInstance(val, classFun){
    if(classFun == '' || !classFun || val == '' || !val) return false;
    return Object(val) instanceof classFun;
}

//通过原型链迭代查询
function checkIsInstanceByProto(val, classFun) {
    if(classFun == '' || !classFun || val == '' || !val) return false;
    while(val){
        if(val.__proto__ === classFun.prototype) return true;
        val = val.__proto__;
    }
}

// () => checkIsInstance(new Date(), Date);
// () => checkIsInstance(Date, Date);
// () => { class Animal {}; class Dog extends Animal {}; return checkIsInstance(new Dog(), Animal); };
// () => checkIfInstanceOf(5, Number);

