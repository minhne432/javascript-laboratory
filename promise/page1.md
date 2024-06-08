Không, Promise không đợi đến khi bạn gọi `.then()` mới bắt đầu. Khi bạn tạo một Promise, nó sẽ ngay lập tức bắt đầu thực hiện tác vụ bất đồng bộ được định nghĩa trong hàm executor (hàm mà bạn truyền vào `new Promise`).

Dưới đây là một ví dụ để minh họa rõ hơn:

```javascript
let promise = new Promise((resolve, reject) => {
  console.log("Executor function is running...");
  setTimeout(() => {
    resolve("Done");
  }, 2000);
});

console.log(promise); // Promise { <pending> }

promise.then((result) => {
  console.log(result); // 'Done'
});
```

### Giải thích:

1. **Tạo Promise**:

   - `let promise = new Promise((resolve, reject) => { ... });`
   - Khi Promise được tạo ra, hàm executor (đoạn code trong `{ ... }`) sẽ được thực thi ngay lập tức. Điều này có nghĩa là dòng `console.log("Executor function is running...");` sẽ được in ra ngay khi Promise được tạo.

2. **setTimeout**:

   - Hàm `setTimeout` được gọi ngay lập tức bên trong hàm executor, và hẹn giờ để thực hiện `resolve('Done')` sau 2 giây.

3. **console.log(promise)**:

   - Dòng lệnh này được thực thi ngay lập tức sau khi Promise được tạo ra. Vì `setTimeout` chưa hoàn thành, Promise vẫn ở trạng thái "pending" và `console.log(promise)` in ra `Promise { <pending> }`.

4. **promise.then(...)**:
   - `.then()` thiết lập một callback để được gọi khi Promise chuyển sang trạng thái "fulfilled". Nó không khởi động lại Promise mà chỉ là thiết lập cách xử lý khi Promise đã hoàn thành.
   - Sau 2 giây, `setTimeout` hoàn thành và gọi `resolve('Done')`, làm cho Promise chuyển từ "pending" sang "fulfilled". Callback trong `.then()` sẽ được thực thi và in ra 'Done'.

### Tóm lại:

Promise bắt đầu thực thi ngay lập tức khi được tạo ra, không phụ thuộc vào việc bạn có gọi `.then()` hay không. `.then()` chỉ thiết lập các callback để xử lý kết quả của Promise sau khi nó được giải quyết (resolved) hoặc bị từ chối (rejected).
