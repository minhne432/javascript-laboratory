// code ví dụ cho trường hợp:
// callback trong then() return 1 promise thì .then() nằm sau phải đợi promise đó 
// thực hiện xong rồi mới đến nó thực hiện



//cách sử dụng promise
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

// -----------------------------------------------------------------
//cách 2 sử dụng async/await
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

async function myfunction() {
    const a = await resolveAfter2Seconds(1);
    console.log(a)
    const b = await resolveAfter2Seconds(2);
    console.log(b)
    const c = await resolveAfter2Seconds(3);
    console.log(c)
    const d = await resolveAfter2Seconds(4);
    console.log(d)
}

myfunction()


//trong lúc những tác vụ async ở trên được đưa vào NodeAPI để thực hiện thì callstack sẽ xuống đây thực
//thi câu lệnh này
console.log("jello")