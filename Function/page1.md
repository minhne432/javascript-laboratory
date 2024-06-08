Cả hai cách khai báo hàm `resolveAfter2Seconds` bạn đưa ra thực chất là hai cách viết khác nhau của cùng một hàm trong JavaScript, và cả hai đều trả về một Promise sẽ giải quyết sau 2 giây. Cả hai đều sử dụng `setTimeout` để trì hoãn việc giải quyết Promise. Dưới đây là cách viết đầu tiên và cách viết thứ hai:

### Cách 1: Function Declaration

```javascript
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}
```

### Cách 2: Arrow Function

```javascript
const resolveAfter2Seconds = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
};
```

### Sự Khác Biệt và Ảnh Hưởng

1. **Hoisting**:

   - **Function Declaration**: Hàm này được hoisted, nghĩa là bạn có thể gọi hàm trước khi nó được định nghĩa trong mã nguồn. Điều này có thể hữu ích trong một số trường hợp khi bạn cần sử dụng hàm trước khi nó được khai báo.
   - **Arrow Function**: Cách khai báo này không được hoisted. Bạn phải đảm bảo khai báo trước khi gọi hàm, nếu không sẽ gặp lỗi `ReferenceError` do cố gắng sử dụng biến trước khi khai báo.

2. **`this` Binding**:
   - **Function Declaration**: Trong một hàm được khai báo theo cách này, từ khóa `this` được bind dựa vào ngữ cảnh mà hàm được gọi. Điều này có thể dẫn đến những hành vi không mong muốn nếu bạn không cẩn thận với ngữ cảnh gọi hàm.
   - **Arrow Function**: Không có binding riêng của `this`. `this` trong arrow function sẽ là `this` từ ngữ cảnh bên ngoài nó được khai báo. Điều này làm cho arrow function rất hữu ích khi bạn làm việc với các hàm callback trong JavaScript, đặc biệt là khi bạn muốn `this` giữ nguyên giá trị trong suốt vòng đời của hàm.

### Kết Luận

Trong ví dụ cụ thể này, cả hai cách khai báo đều không làm ảnh hưởng đến kết quả cuối cùng của chương trình vì bạn không sử dụng `this` trong hàm và không cần gọi hàm trước khi nó được khai báo. Sự lựa chọn giữa hai cách này chủ yếu dựa trên phong cách lập trình và yêu cầu về cách sử dụng `this` hoặc hoisting trong mã của bạn.
