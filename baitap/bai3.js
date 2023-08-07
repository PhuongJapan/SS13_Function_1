let year = Number(prompt("Nhập số năm"));
function century() {
    if(year<=0||year==null){
        alert("Năm không hợp lệ. Vui lòng nhập lại")
    }
    else{
        return Math.ceil(year/100);
    }
}alert("Thế kỷ của năm bạn nhập là: "+ century())