function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    let productNumberText = parseInt(productNumber);
    if (isIncreasing) {
        productNumberText = productNumberText + 1;
    }
    else if (productNumber > 0) {
        productNumberText = productNumberText - 1;
    }
    productInput.value = productNumberText;
    // Update Product Price Total

    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumberText * price
    calculateTotal()
}
// Phone Quantity Increase
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})

// Phone Quantity Decrease
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

// Case Quantity Increase
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

// Case Quantity Decrease
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax


    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice




}

