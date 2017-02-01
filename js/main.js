let buttons = document.getElementsByClassName('btn-floating');
const myTable = document.getElementById('myTable');
const myTBody = myTable.getElementsByTagName('tbody')[0];
let pricesHTML = document.getElementsByClassName('prices');
let subTotal = document.getElementById('subTotal');
let tax = document.getElementById('tax');
let total = document.getElementById('total');
let sub = 0;
let prices = [...pricesHTML].map(price => price.innerHTML.substring(1));
for (let i = 0; i < buttons.length; i++) {
    let q = 0;
    let totalPrice = 0;
    buttons[i].addEventListener("click", (event) => {
        let dishName = buttons[i].name;
        q++
        totalPrice += Number(prices[i])
        if (q === 1) {
            var row = myTBody.insertRow(0);
            let item = row.insertCell(0);
            let quanity = row.insertCell(1);
            let price = row.insertCell(2);
            item.innerHTML = dishName;
            quanity.innerHTML = q;
            price.innerHTML = "$" + Number(totalPrice).toFixed(2);
        } else {
            changeRow(myTBody, dishName, totalPrice, q)
        }
        sub += Number(totalPrice);
        tax.innerHTML = "$" + (sub * .09).toFixed(2)
        subTotal.innerHTML = "$" + (sub).toFixed(2);
        total.innerHTML = "$" + (sub * 1.09).toFixed(2);

    })
}

function changeRow(myTBody, name, price, quanity) {
    for (var i = 0; i < myTBody.rows.length; i++) {
        if (myTBody.rows[i].cells[0].innerHTML === name) {
            myTBody.rows[i].cells[1].innerHTML = quanity;
            myTBody.rows[i].cells[2].innerHTML = "$" + price;
        }
    }
}
let inputs = document.getElementsByClassName('validate');

function validation() {
    if (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "") {
        Materialize.toast("Please fill in all forms", 4000)
    } else if (sub === 0) {
        Materialize.toast("Y u no order food???", 5000)
    } else {
        Materialize.toast("Thank You, your order is cookin", 5000)
    }
};
