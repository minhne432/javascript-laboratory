function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    const x = await resolveAfter2Seconds(10); //<----- đợi cho đến khi promise fulfilled rồi mới chạy line 11
    console.log(x); // 10
}

f1()

console.log('end of the file');


