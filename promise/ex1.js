// code ví dụ cho trường hợp:
// callback trong then() return 1 promise thì .then() nằm sau phải đợi promise đó 
// thực hiện xong rồi mới đến nó thực hiện

let sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

sleep(1000)
    .then(
        () => {
            console.log(1);
            return sleep(1000);
        }
    )
    .then(
        () => {
            console.log(2);
            return sleep(1000);
        }
    ).then(
        () => {
            console.log(3);
            return sleep(1000);
        }
    ).then(
        () => {
            console.log(4);
        }
    )