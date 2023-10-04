var name1 = "mario";
var name2 = new String("mario");

/*
    Trong JavaScript, biến `name1` là một biến thông thường chứa một chuỗi (string) đơn giản, trong khi biến `name2` là một biến kiểu String object.

Sự khác biệt chính giữa hai biến này là kiểu dữ liệu của chúng:

1. `name1` là một chuỗi (string) đơn giản.
2. `name2` là một String object, được tạo bằng cách sử dụng constructor `String()`.

Mặc dù chúng có cùng giá trị (`'mario'`), nhưng chúng không hoàn toàn giống nhau. Biến `name1` được coi là một kiểu dữ liệu nguyên thủy (primitive type), trong khi biến `name2` là một đối tượng (object) của kiểu dữ liệu String.

Khi bạn làm việc với chuỗi trong JavaScript, thường thì việc sử dụng kiểu dữ liệu nguyên thủy (như `name1`) là đủ và phổ biến hơn. Tuy nhiên, bạn có thể sử dụng kiểu dữ liệu đối tượng (như `name2`) khi cần sử dụng các phương thức và thuộc tính được cung cấp bởi đối tượng String.
*/
