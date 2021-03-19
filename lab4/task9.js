function final(sampelDate1,sampelDate2) {
    var date1 = new Date(sampelDate1);
    var date2 = new Date(sampelDate2);
    return (date2.getTime() - date1.getTime())/(1000*3600*24);
}
console.log(final("01/09/1998","03/17/2021"));