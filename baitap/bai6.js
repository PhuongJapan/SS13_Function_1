let arr=[];
let length=Number(prompt("Nhập độ dài của mảng"));
for (let i = 0; i < length; i++) {
    arr.push(Number(prompt("Nhập vào giá trị thứ "+ (i+1))))    
}
console.log("Mảng bạn nhập là: ", arr);

console.log("Giá trị lớn nhất trong mảng là: ", Math.max(...arr));