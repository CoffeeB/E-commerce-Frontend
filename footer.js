const createFooter = () => {
    let foot = document.querySelector('footer');

    foot.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casual</a></li>
            <li><a href="#" class="footer-link">formal</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casual</a></li>
            <li><a href="#" class="footer-link">formal</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla culpa aspernatur unde quod pariatur sed ad, quaerat eaque dolore facilis! Ipsum eligendi modi, aperiam dicta pariatur labore esse quae! Assumenda. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptatibus ad inventore nisi perferendis impedit explicabo asperiores dolorum sed qui officiis molestias eius velit est, dolore neque atque, maxime mollitia!Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero dolorum mollitia magni aut, distinctio repudiandae! Magni, velit autem quae debitis ea illum nesciunt similique culpa. Nisi iusto officiis temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tenetur ratione pariatur, odit nobis qui id esse omnis optio exercitationem hic repudiandae nisi beatae eligendi commodi amet rem distinctio dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, explicabo. Ea repellendus labore dolorem aliquid porro, error reiciendis ex similique temporibus. Veniam repudiandae magni vel! Dolor ut unde quis fuga. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptates illo sunt dignissimos, similique assumenda nihil, dolores sed, libero at nemo deleniti? Explicabo et provident sunt cumque quae dolore odit!</p>
<p class="info">support emails - help@ecommerce.com, customersupport@ecommerce.ng</p>
<p class="info">telephone - 08068116267, 07083228547</p>
<div class="footer-social-link">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Ecommerce, best online store</p>
    `;
}

createFooter();