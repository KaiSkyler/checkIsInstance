//检查给定的值是否是给定类或超类的实例 通过instanceof实现
function checkIsInstance(obj, classFunction) {
  if (obj === null || obj === undefined || !(classFunction instanceof Function))
    return false;
  return Object(obj) instanceof classFunction;
};


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

