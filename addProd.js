let user = JSON.parse(sessionStorage.user || null);
let loader = document.querySelector('.loader');

// checking if user is logged in or not
window.onload = () => {
    if (user) {
        if (!compareToken(user.authToken, user.email)) {
            location.replace('/login');
        }
        if (!user.seller) {
            location.replace('/seller');
        }
    } else {
        location.replace('/login');
    }
}

// price inputs

const actualPrice = document.querySelector('#actual-price');
const discountPercentage = document.querySelector('#discount');
const sellingPrice = document.querySelector('#sell-price');

discountPercentage.addEventListener('input', () => {
    if (discountPercentage.value > 100) {
        discountPercentage.value = 90;
    } else {
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount;
    }
})

sellingPrice.addEventListener('input', () => {
    let discount = (sellingPrice.value / actualPrice.value)* 100;
    discountPercentage.value = discount;
})

// upload image handle
let uploadImages = document.querySelectorAll('.fileupload');
let imagePaths = []; // for uploaded image paths to be stored

uploadImages.forEach((fileupload, index) => {
    fileupload.addEventListener('change', () => {
        const file = fileupload.files[0];
        
        if (file.type.includes('image')) {
            // means user uploaded an image
            fetch('/s3url').then(res => res.json())
            .then(url => {
                fetch(url, {
                    method: 'PUT',
                    headers: new Headers({'Content-Type': 'multipart/form-data'}),
                    body: file
                }).then(res => {
                    imageUrl = url.split("?")[0];
                    imagePaths[index] = imageUrl;
                    let label = document.querySelector(`label[for=${fileupload.id}]`);
                    label.style.backgroundImage = `url(${imageUrl})`;
                    let productImage = document.querySelector('.product-image');
                    productImage.style.backgroundImage = `url(${imageUrl})`;
                })
            })
        } else {
            showAlert('Upload Image only');
        }
    })
})

// form submission

const productName = document.querySelector('#product-name');
const shortLine = document.querySelector('#short-des');
const des = document.querySelector('#des');
const pictures = document.querySelector('.upload-image-sec');
const sizeSelector = document.querySelector('.select-sizes');

let sizes = []; // will store all the sizes

const stock = document.querySelector('#stock');
const tags = document.querySelector('#tags');
const tnc = document.querySelector('#tnc');

//  buttons

const addProductBtn = document.querySelector('#add-btn');
const saveDraft = document.querySelector('#draft-btn');

// store size function
const storeSizes = () => {
    sizes = [];
    let sizeCheckBox = document.querySelectorAll('.size-checkbox');
    sizeCheckBox.forEach(item => {
        if (item.checked) {
            sizes.push(item.value);
        } 
    });
}

const validateForm = () => {
    if (!productName.value.length) {
        productName.classList.add('warn');
        productName.scrollIntoView({behavior: 'smooth'});
        return showAlert('enter product name');
    } else if (shortLine.value.length > 100 || shortLine.value.length < 10) {
        shortLine.classList.add('warn');
        shortLine.scrollIntoView({behavior: 'smooth'});
        return showAlert('snippet must be between 10 and 100 letters long');
    } else if (!des.value.length) {
        des.classList.add('warn');
        des.scrollIntoView({behavior: 'smooth'});
        return showAlert('enter detailed description about the product');
    } else if (!imagePaths.length) { // image link array
        pictures.classList.add('warn');
        pictures.scrollIntoView({behavior: 'smooth'});
        return showAlert('upload at least one product image');
    } else if (!sizes.length) { // size array
        sizeSelector.classList.add('warn');
        sizeSelector.scrollIntoView({behavior: 'smooth'});
        return showAlert('select at least one size');
    } else if (!actualPrice.value.length || !discount.value.length || !sellingPrice.value.length) {
        actualPrice.classList.add('warn');
        sellingPrice.classList.add('warn');
        actualPrice.scrollIntoView({behavior: 'smooth'});
        return showAlert('you must add pricings');
    } else if (stock.value < 20) {
        stock.classList.add('warn');
        stock.scrollIntoView({behavior: 'smooth'});
        return showAlert('you must have at least 20 items in stock');
    } else if (!tags.value.length) {
        tags.classList.add('warn');
        tags.scrollIntoView({behavior: 'smooth'});
        return showAlert('enter few tags to help ranking your product in search');
    } else if (!tnc.checked) {
        return showAlert('you must agree to our terms and conditions');
    }
    return true;
}

const productData = () => {
    return data = {
        name: productName.value,
        shortDes: shortLine.value,
        des: des.value,
        images: imagePaths,
        sizes: sizes,
        actPrice: actualPrice.value,
        disc: discountPercentage.value,
        sellPrice: sellingPrice.value,
        stock: stock.value,
        tags: tags.value,
        tnc: tnc.checked,
        email: user.email
    }
}

addProductBtn.addEventListener('click', () => {
    storeSizes();
    // validate form
    if (validateForm()) { // if validate form returns true or false while doing validation
        loader.style.display = 'block';
        let data = productData();
        sendData('/add-product', data);
    }
})