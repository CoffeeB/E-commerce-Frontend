const createProduct = (data) => {
    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += `
    <div class="product-card">
        <div class="product-image">
            ${data.draft ? `<span class="tag">Draft</span>` : ''}
            <img src="${data.images[0]}" class="prdouct-thumb" alt="">
            <button class="card-action-btn edit-btn"><img src="img/edit.png" alt=""></button>
            <button class="card-action-btn open-btn"><img src="img/open.png" alt=""></button>
            <button class="card-action-btn delete-popup-btn"><img src="img/delete.png" alt=""></button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${data.name}</h2>
            <p class="product-short-desc">${data.shortDes}</p>
            <span class="price">$${data.sellPrice}20</span><span class="actual-price">$${data.actPrice}</span>
        </div>
    </div>
    `;
}