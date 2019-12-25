document.addEventListener('DOMContentLoaded', () =>{
    'use strict';
    /*var a=5;
    console.log(a);
    */
    
    //console.log('Hello world!');

    //var a = 5;
    //console.log('a: ', a);

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

        //получение всех полей в обьект, их вывод
        for (const elem of formCustomer.elements){
            if ((elem.tagName === 'INPUT' && elem.type !== 'radio') ||
                (elem.type === 'radio' && elem.checked) ||
                (elem.tagName === 'TEXTAREA')){
                //console.log(elem);
                console.dir(elem);

                // сохранение всех имен элементов в Обьект
                obj[elem.name] = elem.value;
                
                // очищение всех элементов по нажатию sumbit
                if(elem.type !== 'radio'){
                    elem.value = ''; 
                }

            }
            
        }

        //console.log(obj);
        orders.push(obj);
        console.log('orders: ', orders);

    });







})