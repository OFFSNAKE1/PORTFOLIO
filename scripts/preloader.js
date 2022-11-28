// Функция будет считать проценты от 1 до 100

function progress(){
    const percent = document.querySelector('.percent');
    let count = 4;
    let loading = setInterval(animate, 50);

    function animate(){
      if(count == 100){
        clearInterval(loading);
      }else{
        count = count + 1;
        percent.textContent = count + '%';
      }
    }
}

progress();


// Функция будет скрывать загрузку, через время какое поставлю

function hideAnimate(){
    document.querySelector('.loading').classList.add('slow');
}

function hide(){ 
    document.querySelector('.loading').style.display = "none";
}

setTimeout(hideAnimate, 5850); // добавит плавную анимацию скрытия
setTimeout(hide, 7000); // скроет блок со страницы после всех анимаций, чтобы он не занимал место

