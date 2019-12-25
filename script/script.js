document.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    const customer = document.getElementById('customer'),
          freelancer = document.getElementById('freelancer');
    //console.log(customer, freelancer);

    const blockCustomer = document.querySelector('#block-customer');
    const blockFreelancer = document.querySelector('#block-freelancer');
    //console.log(blockCustomer, blockFreelancer);

    const blockChoice = document.getElementById('block-choice');

    const btnExit = document.getElementById('btn-exit');

    const formCustomer = document.getElementById('form-customer');

    const orders = [];

    //получение всех элементов таблицы фрилансер
    const ordersTable = document.getElementById('orders');

    //получение элементов модальных окон из вёрстки
    const modalOrder = document.getElementById('order_read');
    const modalOrderActive = document.getElementById('order_active');

    //const closeModal = document.getElementsByClassName('close text-white');

    //----------------------constants--------------------------------

    //функция для отображения заказов в фрилансер
    const renderOrders = ()=>{
        
        //обнуление таблицы по нажатию Фрилансер
        ordersTable.textContent=``;

        orders.forEach((order, i) => {
            //console.log(order);
            //console.log(i);
                
            //вставить в верстку через JS строку (добавить в таблицу)
            //использование обратных кавычек и $
            ordersTable.innerHTML += `
                <tr class="order" data-number-order="${i}">
                    <td>${i+1}</td>
                    <td>${order.title}</td>
                    <td class="${order.currency}"></td>
                    <td>${order.deadline}</td>
                </tr>`;
        });
    };

    const openModal = (numberOrder) =>{
        //console.log('numberOrder: ', numberOrder);

        const order = orders[numberOrder];
        const modal = order.active ? modalOrderActive : modalOrder;
        
        const titleBlock = document.querySelector('.modal-title'),
            firstNameBlock = document.querySelector('.firstName'),
            emailBlock = document.querySelector('.email'),
            phoneBlock = document.querySelector('.phone'),
            descriptionBlock = document.querySelector('.description'),
            deadlineBlock = document.querySelector('.deadline'),
            //currencyBlock = document.querySelector('.currency_img'),
            //countBlock = document.querySelector('.count');
            
        titleBlock.textContent = order.title;
        firstNameBlock.textContent = order.firstName;
        emailBlock.textContent = order.email;
        phoneBlock.textContent = order.phone;
        descriptionBlock.textContent = order.description;
        deadlineBlock.textContent = order.deadline;
        //currencyBlock.textContent = order.currency;
        //countBlock.textContent = order.count;
        

        
        
        modal.style.display = 'block';

    };

    



    ordersTable.addEventListener('click', (event) => {
        const target = event.target;
        //console.log('target: ', target);
        
        //получение элемента по тегу вверх
        const targetOrder = target.closest('tr');
        //или по классу
        //const targetOrder = target.closest('.order');

        if (targetOrder) {
            openModal(targetOrder.dataset.numberOrder);
        }
        
        //вывод элемента по клику на заказ
        //console.log(orders[targetOrder.dataset.numberOrder]);
        


    });



    customer.addEventListener('click', () =>{

        //console.log('Что то произошло');
        //console.dir(blockCustomer);
        blockChoice.style.display = 'none';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';

    });

    freelancer.addEventListener('click', () =>{

        //console.log('Что то произошло');
        blockChoice.style.display = 'none';
        renderOrders();
        blockFreelancer.style.display = 'block';
        btnExit.style.display = 'block';

    });

    btnExit.addEventListener('click', () => {

        btnExit.style.display = 'none';
        blockFreelancer.style.display = 'none';
        blockCustomer.style.display = 'none';
        blockChoice.style.display = 'block';
        
    });


    // Action для запрета перезагрузки страницы
    // после нажатия кнопки 'Отправить заявку'
    // из-за submit
    formCustomer.addEventListener('submit', (event) =>{

        event.preventDefault();
        //console.log(event);

        //console.log(formCustomer.elements);
        //console.log([]);
        
        // создание пустого обьекта
        const obj = {};

        // вызов на этом моменте debuggera
        //debugger;
        
        //---------------------------------------------------------
        //метод фильтр для массива
        //const elements = [...formCustomer.elements].filter((elem)=>(elem.tagName === 'TEXTAREA'));
        //console.log('elements: ', elements);
        //---------------------------------------------------------
        
        //spread представить как массив [...]
        //цикл forEach
        [...formCustomer.elements].forEach((elem)=>{
            
            //console.log('elem, index, arr: ', elem, index, arr);
            
            if ((elem.tagName === 'INPUT' && elem.type !== 'radio') ||
                (elem.type === 'radio' && elem.checked) ||
                (elem.tagName === 'TEXTAREA')){
                //console.log(elem);
                //console.dir(elem);

                // сохранение всех имен элементов в Обьект
                obj[elem.name] = elem.value;
                
                // очищение всех элементов по нажатию sumbit
                if(elem.type !== 'radio'){
                    elem.value = ''; 
                }

            }
        });


        //----------------------------------------------------------
        //получение всех полей в обьект, их вывод цикл for
        //for (const elem of formCustomer.elements){
        //}
        //----------------------------------------------------------


        //сброс всех значений до исходных
        //после нажатия Отправить заявку
        formCustomer.reset();

        //console.log(obj);
        orders.push(obj);
        //console.log('orders: ', orders);

    });

    //--------------------------------------------------------------
    //вставить в верстку через JS строку (заменить таблицу)
    //let temp = 'Priivet';
    //ordersTable.innerHTML = '<tr><td>1</td><td>'+temp+'</td></tr>';
    //--------------------------------------------------------------
    
    
    
    





})