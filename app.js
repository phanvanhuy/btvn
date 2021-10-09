// 1. Khai báo 5 tên biến đúng, 5 tên biến saissai
/// =>> tên biếnn đúng
var varName = "huy";
var varNum = 12;
let troChoi = [1, 2, 3];
const hang_so = 1234;
var varObject = { name: "huy", age: 22 };

/// =>> tên biếnn sai
// var 1Name = 'huy';
// var Varnum = 12;
// let TroChoi = [1,2,3];
// const Hang_so = 1234;
// var VarObject = {name: 'huy', age: 22};

// 2. Làm 5 bài toán sử dụng 5 toán tử: + - * / %

let a = 22;
let b = 10;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);

// 3. Tính kết quả các bài tập sau đây, in ra màn hình và giải thích tại sao lại ra được kết quả như vậy:
//    3.1 x = 5. Tính: ++x + x++ - --x - x--

// let x = 5;
// console.log('x = 5,','++x + x++ - --x - x-- = ',++x + x++ - --x - x--);
//         // ++x -> x = 6
// x++ -> x sẽ dc cộng 1 sau khi  qua câu lệnh này ứng với x = 7;
// --x -> x = x-1 trước khi qua câu lệnh mới tức x = 6
// x-- -> giá trị hiện tại cảu x vẫn = 6 sau khi qua câu lênh mới x=x-1 tương ứng x=5

//    3.2 x = 6, y = 10. Tính: ++y - y++ + x++ + x-- - --x - --y

// -->   ++y(11)(11) - y++(11)(12) + x++(6)(7) + x--(7)(6) - --x(5)(5) - --y(11)(11)
// (giá trị hiện tại)(giá tri sau khi thực hiện)
// tính toán với tất cả giá trị hiện tại
console.log(11 - 11 + 6 + 7 - 5 - 11);
let x = 6,
  y = 10;
console.log(++y - y++ + x++ + x-- - --x - --y);

//    3.3 x = 10, y = 12, z = 16. Tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--

// --> x++(10)(11) + z--(16)(15) - --x(10)(10) + --y(11)(11) - y--(11)(10) + ++y(11)(11) + ++z(16)(16) + --z(15)(15) + x--(10)(9)
console.log(10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 + 10);

// kiểm tra lại
x = 10;
y = 12;
let z = 16;
console.log(x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--);
//    enter, tính lần 2 bài 3.3: ++x - x++ + z++ + ++y - y--
//  gia  tri hien tai cua x,y,z: x=9, z=15, y=11
//  ++x(10)(10) - x++(10)(11) + z++(15)(16) + ++y(12)(12) - y--(12)(13)
console.log(10 - 10 + 15 + 12 - 12);
console.log(++x - x++ + z++ + ++y - y--);

// 4. Khai báo 5 biến với 5 kiểu dữ liệu
// var varName = 'huy';
// var varNum = 12;
// let troChoi = [1,2,3];
// const hang_so = 1234;
// var varObject = {name: 'huy', age: 22};
// 5. Khai báo biến với kiểu dữ liệu Array như sau: [1,2,3,4,5,6,7,8,9,10]
const bienArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//    5.1 Tính tổng (+) phần tử đầu tiên (0) và phần từ thứ 2 (1)
console.log(
  "Tong cua phan tu  dau tien va phan tu thu 2 cua mang:",
  bienArray[0] + bienArray[1]
);
//    5.2 Tính tích (*) phần tử đầu tiên (0) và phần từ cuối cùng (9)
console.log(
  "Tong cua phan tu  dau tien va phan tu cuoi cua mang:",
  bienArray[0] + bienArray[bienArray.length - 1]
);
// 6. Khai báo 1 biến với kiểu dữ liệu Object, bào gồm firstName, lastName, age, favorite
const newObject = {
  firstName: "phan",
  lastName: "huy",
  age: 22,
  favorite: "sleep",
};
console.log(newObject);
//    6.1 Thay đổi firstName, lastName với text bất kỳ
newObject.firstName = "nguyen";
newObject.lastName = "kim";
//    6.2 In ra màn hình firstName + lastName mới
console.log(newObject, newObject.firstName, newObject.lastName);
