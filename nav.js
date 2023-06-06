const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
                <img src="img/logo.png" class="malogo">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search product here">
                        <button class="search-btn">search</button>
                    </div>
                    <a><img src="img/user.png" id="user-img" alt="">
                        <div class="login-logout-popup hide">
                            <p class="account-info">Logged in as, name</p>
                            <button class="btn" id="user-btn">Log out</button>
                        </div>
                    </a>
                    <a href="#"><img src="img/cart.png" alt=""></a>
                </div>
            </div>
            <div class="links-container default-nav" id="default-nav">
                <li class="link-item"><a href="#" class="link">Home</a></li>
                <li class="link-item"><a href="#" class="link">Men</a></li>
                <li class="link-item"><a href="#" class="link">Women</a></li>
                <li class="link-item"><a href="#" class="link">Kids</a></li>
                <li class="link-item"><a href="#" class="link">Accessories</a></li>
                <li class="link-item"><a href="/seller" class="link">Become A Seller</a></li>
            </div>
            <div class="nav-links-container seller-nav" id="seller-nav">
                <li class="link-item"><a href="#" class="link">Home</a></li>
                <li class="link-item"><a href="/seller" class="link">Products</a></li>
                <li class="link-item"><a href="#" class="link">Promotions</a></li>
                <li class="link-item"><a href="#" class="link">Orders</a></li>
                <li class="link-item"><a href="#" class="link">Analysis</a></li>
            </div>
    `;
}

createNav();

//  nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');
const showDefaultNav = document.querySelector('#default-nav');
const showSellerNav = document.querySelector('#seller-nav');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
        // if user is logged in
        showSellerNav.classList.add('hide');
        popuptext.innerHTML = `Logged in as, ${user.username}`;
        actionBtn.innerHTML = `log out`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // user is logged out
        showSellerNav.classList.add('hide');
        popuptext.innerHTML = `log in to place order`;
        actionBtn.innerHTML = `login`;
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
    if (user != null && user.seller) {
        showDefaultNav.classList.add('hide');
        showSellerNav.classList.remove('hide');
    }
}   