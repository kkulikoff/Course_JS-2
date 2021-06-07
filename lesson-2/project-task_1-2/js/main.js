class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров с версткой
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend",item.render());
            //block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket { // Класс корзины.
    constructor(){
        this.cart = []; // Перечень товаров в корзине c количеством и ценником
        this.label = {
            count: 0, // Количество каждого товара
            cost: 0 // Ценник каждого товара
        }
    }
    getItemList(){  // Список элементов.

    }

    addItem() { // Добавление товара.
        
    }

    removeItem() { // Удаление товара.

    }

    clearBasket() { // Очистка корзины

    }

    allCountItem() { // Подсчет общего количества товаров.

    }

    allSummItem () { // Суммарная стоимость всех товаров. Пункт 2 в ДЗ.
        let total = 0;

        this.cart.map((item) => {
            return total += (item.label.count * item.label.cost);
        })
    }


    clientInfo() { // Информация о пользователе, сформировашем корзину. Аноним или зарегистрированный. Для реализации VIP статуса.

    }

    checkCreate() { // Формирование квитанции покупок. Например отправить менеджеру на почту для дальнейшей работы с клиентом.

    }

    buyItem() { // Купить товары в корзине по нажатию кнопки.

    }

    renderItemList() { // Вывести список добавленных товаров в верстку html

    }

    renderEmptyList() { // Если корзина пуста, вывести соответствующее предложение с рекомендацией перейти в каталог товаров.

    }
}

class BasketItem extends ProductItem { // Класс товара в корзине
    itemInfo() { // Инфо продукта, переход на страницу товара или всплывающим окном детальное описание.

    }
}

let list = new ProductList();


//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);