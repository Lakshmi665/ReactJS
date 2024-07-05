let arr = [1,2,3,4];
arr=[...arr,6,7,8 ];
console.log(arr);

let obj ={key: 1, value: 'abc'};
obj={...obj, bgcolor: 'green'};
console.log(obj);

function fn(...param) {
    console.log(param)
}

fn(10);
fn(10,20)