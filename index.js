//检查给定的值是否是给定类或超类的实例
function checkIsInstance(val, classFun){
    if(classFun == '' || !classFun || val == '' || !val) return false;
    return Object(val) instanceof classFun;
}

() => checkIsInstance(new Date(), Date);
() => checkIsInstance(Date, Date);
() => { class Animal {}; class Dog extends Animal {}; return checkIsInstance(new Dog(), Animal); };
() => checkIfInstanceOf(5, Number);