function calculate() {
    let form = document.forms["book"];
    let roomType = form.in5.value;
    let candidates = parseInt(form.in6.value) || 0;
    let day = parseInt(form.in8.value) || 0;
    let price = 0;
    let p = 0;

    if (roomType === "Prime Room") {
        p = 8999 * candidates;
    } else if (roomType === "Classic Room") {
        p = 5999 * candidates;
    } else if (roomType === "Normal Room") {
        p = 2999 * candidates;
    } else {
        p = 0;
    }

    price = p * day;
    form.in7.value = price;
}