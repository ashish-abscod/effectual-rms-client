//get formated date by providing a raw date
export const getFormatedToday = (value) => {
    var date = new Date(value);
    var str = date.getFullYear() + "-" + (date.getMonth()<9 ?  `0${date.getMonth()+1}` : date.getMonth()+1) + "-" + (date.getDate()<10 ? `0${date.getDate()}` : date.getDate());
    return str;
}
