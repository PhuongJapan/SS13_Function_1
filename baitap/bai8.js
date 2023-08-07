let length =Number(prompt("Nhập độ dài của mảng"));
let arr=[];
for (let i = 0; i < length; i++) {
    arr.push(Number(prompt(`Nhập giá trị thứ ${i+1}`)));    
}
console.log("Mảng bạn nhập vào là: ", arr);

function averageSum() {
    let sum= 0;    
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]              
    }
    let result=sum/length;
    return result;
}
console.log("Giá trị trung bình cộng của mảng là: ", averageSum());


