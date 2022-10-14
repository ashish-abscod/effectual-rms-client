//get formated date by providing a raw date
export const getFormatedDate = () => {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate());
    return str;
}

export const getFormatedDateTime = () => {
    var date = new Date();
    var str =
        date.getFullYear() +
        "-" +
        (date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1) +
        "-" +
        (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) +
        " " +
        (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
        ":" +
        (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()) +
        ":" +
        (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
    return str;
};