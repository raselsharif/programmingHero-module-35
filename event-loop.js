
function a(){
    console.log('a');
    c()
}
function b(){
    console.log('b');
}
function c(){
    console.log('c');
    b()
    console.log('cc');
}

a()