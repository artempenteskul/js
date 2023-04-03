let a = 5;

function myFunc() {
    let a = 55;
    function myInnerFunc() {
        console.log(a);
    }
    myInnerFunc()
}

myFunc();
