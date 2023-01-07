// Функция будет считать проценты от 1 до 100

// function progress(){
//     const percent = document.querySelector('.percent');
//     let count = 4;
//     let loading = setInterval(animate, 17);

//     function animate(){
//       if(count == 100){
//         clearInterval(loading);
//       }else{
//         count = count + 1;
//         percent.textContent = count + '%';
//       }
//     }
// }

// progress();


// Функция будет скрывать загрузку, через время какое поставлю

function hideAnimate(){
    document.querySelector('.loading').classList.add('hide');
}

function hide(){ 
    document.querySelector('.loading').style.display = "none";
}

setTimeout(hideAnimate, 2300); // добавит плавную анимацию скрытия снизу вверх
setTimeout(hide, 3300);        // скроет блок со страницы после всех анимаций, чтобы он не грузил страницу

