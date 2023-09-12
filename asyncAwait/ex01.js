// The keyword async before a function makes the function return a promise:

 async function myfunction(data) {
    if (data < 0) {
        return 'number lower than 0'
    } else {
        return 'number bigger than 0'
    }
};


let a = myfunction(-1);

a.then(
    (data) => {
        console.log(data)
    }
)

