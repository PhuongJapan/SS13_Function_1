let string = () => {
    let value = prompt("Nhập vào 1 chuỗi dài hơn 15 ký tự")
    let sliceString = () => {
        return value.slice(0, 10);
    }
    let result = sliceString() + "“...”";
    console.log("Chuỗi bạn nhập ban đầu là: ", value);
    console.log("Chuỗi sau khi cắt là: ", sliceString());
    console.log("Chuỗi sau khi thêm vào dấu ... là: ",result);
}

string();