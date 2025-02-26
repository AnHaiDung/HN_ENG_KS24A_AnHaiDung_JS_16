let aNumber = +prompt("Nhap vao so a");
let bNumber = +prompt("Nhap vao so b");
let cNumber = +prompt("Nhap vao so c");
if(aNumber > bNumber && aNumber > cNumber){
    document.write(`so lon nhat la: ${aNumber}`)
} else if (bNumber > aNumber && bNumber > cNumber) {
    document.write(`so lon nhat la: ${bNumber}`)
} else if (cNumber > aNumber && cNumber > bNumber) {
    document.write(`so lon nhat la: ${cNumber}`)
}
