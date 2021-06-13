/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
    return [...array1,...array2]
}

console.log(extend(["a","b","c"],[1,2,3]))




/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
    return {
        ...obj,
        [key]:val
    }
}

console.log(addKeyVal({"Name":"Bilal"},"age","20"));


/** Return a new object with a key removed. */
function removeKey(obj, key) {
    delete obj[key]
    return obj

}


console.log(removeKey({'Name':'Bilal',"age":"20"},"age"))



/** Combine two objects and return a new object. */
function combine(obj1, obj2) {

    return{
        ...obj1,
        ...obj2
    }
}

console.log(combine({"name":"haseeb"},{"age":"50"}))



/** Return a new object with a modified key and value. */
function update(obj, key, val) {

    obj[key] = val
    return obj
}


console.log(update({"Name":"Bakhtiar"}, "Name","Nomi"))



