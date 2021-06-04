const products = [
    {id: 1, title: 'Notebook', desc: 'Самый лучший ноутбук', price: 2000},
    {id: 2, title: 'Mouse', desc: 'Самая лучшая мышь', price: 20},
    {id: 3, title: 'Keyboard', desc: 'Самая лучшая клавиатура', price: 200},
    {id: 4, title: 'Gamepad', desc: 'Самый лучший джойстик', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение   // Добавлено в строке 11
const renderProduct = (title, price, desc = 0) => {  // параметры по умолчанию
    return `<div class="grid_1_of_4 images_1_of_4">
                 <a href="#"><img src="images/new-pic3.jpg" alt="" /></a>
                 <h2>${title}</h2>
                 <p>${desc}</p>
                 <p><span class="price">${price}$</span></p>
                 <button class="buy-btn" type="button"><span><img src="images/cart.jpg" alt="" />&nbsp;Купить</span></button>                
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.desc));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(''); // убрал запятые
};

renderPage(products);