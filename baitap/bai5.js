let letter = prompt("Nhập 1 từ bất kỳ")
function changeLetters() {
    return letter.slice(0,1).toUpperCase()+ letter.slice(1).toLowerCase();
}

console.log("Từ bạn nhập là", letter);
console.log("Từ sau khi được chuẩn hóa là:",changeLetters());