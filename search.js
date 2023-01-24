let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', function (e) {
    let products = document.getElementsByClassName('product');
    Array.from(products).forEach(element => {
        let productDesc = element.getElementsByTagName('h1')[0].innerText;
        if (productDesc.includes(searchBox.value)) {
            element.style.display = "inline-block";
        }
        else {
            element.style.display = "none";
        }
    });
});