// добовляем прослушку на всем окне
window.addEventListener('click', function (event) {
    // объявляем переменную для счетчика
    let counter;

    // Проверяем клик строго по кнопкам плюс либо минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        //  Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');


    }

    // проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }


    // проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            // уменьшаем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;

        // Проверка на товар который находится в корзине
        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ){
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();
        
        // Проверяем чтобы счетчик был больше 1
            toggleCartStatus();

            calcCartPriceAndDelivery();

        }


    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
});
