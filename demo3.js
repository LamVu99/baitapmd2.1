function checkYear(n) {
    let year = 0;
    let month = 0;
    let day = 0;
    if (n >= 365) {
        if (n % 365 != 0) {
       year = Math.floor(n/365)
        console.log(year + ' nam');
       month = Math.floor((n % 365) / 30);
            console.log(month + ' thang');
            day = Math.floor(n % 365 % 30);
            console.log(day + ' ngay')
        } else {
            year = Math.floor(n /365);
            console.log(year + ' nam')
        }
    }
}
checkYear(365 * 24)