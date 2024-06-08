Callback trong JavaScript là một hàm được truyền như là một đối số cho một hàm khác và được gọi lại (gọi lại hàm callback) sau khi hàm chứa nó hoàn thành tác vụ của mình. Callbacks thường được sử dụng để xử lý các tác vụ bất đồng bộ (asynchronous), như là gọi API, xử lý sự kiện hoặc đọc tệp.

### Ví dụ về Callback

1. **Callback Synchronous (Đồng bộ)**:
   - Trong trường hợp này, callback được thực thi ngay lập tức trong quá trình thực hiện hàm chứa nó.

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function showGreetingMessage() {
  console.log("Welcome!");
}

greet("Alice", showGreetingMessage);

// Output:
// Hello, Alice
// Welcome!
```

2. **Callback Asynchronous (Bất đồng bộ)**:
   - Trong trường hợp này, callback được thực thi sau khi một tác vụ bất đồng bộ hoàn thành, chẳng hạn như setTimeout.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);

// Output (sau 2 giây):
// Data fetched
// Processing data
```

### Sử dụng Callbacks trong Xử lý Bất đồng bộ

Callbacks rất quan trọng trong JavaScript, đặc biệt là khi làm việc với các tác vụ bất đồng bộ như gọi API, đọc tệp từ hệ thống tệp, hoặc xử lý sự kiện. Trong các tình huống này, bạn muốn đảm bảo rằng các tác vụ bất đồng bộ được hoàn thành trước khi tiếp tục với các tác vụ khác.

### Ví dụ về Callback với API giả lập

```javascript
function simulateApiCall(data, callback) {
  setTimeout(() => {
    console.log("API call completed with data:", data);
    callback(data);
  }, 1000);
}

function handleApiResponse(response) {
  console.log("Handling response:", response);
}

simulateApiCall("Sample Data", handleApiResponse);

// Output (sau 1 giây):
// API call completed with data: Sample Data
// Handling response: Sample Data
```

### Các Vấn đề Liên quan đến Callbacks

1. **Callback Hell (Địa ngục Callbacks)**:
   - Khi bạn lồng nhiều callbacks vào nhau, mã nguồn có thể trở nên khó đọc và khó bảo trì. Điều này được gọi là "callback hell".

```javascript
asyncOperation1(() => {
  asyncOperation2(() => {
    asyncOperation3(() => {
      console.log("All operations completed");
    });
  });
});
```

2. **Giải pháp cho Callback Hell**:
   - Để giải quyết vấn đề này, JavaScript cung cấp Promises và async/await, giúp viết mã bất đồng bộ dễ đọc hơn và dễ bảo trì hơn.

### Ví dụ Sử dụng Promises và Async/Await để Tránh Callback Hell

#### Sử dụng Promises

```javascript
function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation 1 completed");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation 2 completed");
      resolve();
    }, 1000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operation 3 completed");
      resolve();
    }, 1000);
  });
}

asyncOperation1()
  .then(asyncOperation2)
  .then(asyncOperation3)
  .then(() => {
    console.log("All operations completed");
  });
```

#### Sử dụng Async/Await

```javascript
async function performOperations() {
  await asyncOperation1();
  await asyncOperation2();
  await asyncOperation3();
  console.log("All operations completed");
}

performOperations();
```

### Kết luận

Callbacks là một phần quan trọng của JavaScript, đặc biệt là khi làm việc với các tác vụ bất đồng bộ. Tuy nhiên, để tránh các vấn đề liên quan đến callback hell, bạn có thể sử dụng Promises hoặc async/await để làm cho mã của bạn dễ đọc và bảo trì hơn.
