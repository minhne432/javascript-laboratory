// trạng thái của promise
//1. pendding (chờ, rò rỉ bộ nhớ)
//2. fulfilled (hoàn thành)
//3. reject (thất bại)

//terminologies
//Promise chain => giải quyết callback hell
// truyền giá trị từ resolve(), reject() đến then() và catch()
// truyền giá trị từ then() ở trên đến then() ở dưới

var promise = new Promise((resolve, reject) => {
  //<---- excutor
  var err = 0;
  if (err) {
    resolve(0); // <----- success : call resolve()
  } else {
    reject("We have an error");
    err += 1; // <----- fail: call reject()
  }
})
  .then(() => {
    console.log("this is then");
  })
  .catch(() => {
    console.log("catch 1");
  });

promise
  .then((data) => {
    console.log("this is then 2");
  })
  .catch(() => {
    console.log("catch 2");
  });

console.log(typeof promise);
