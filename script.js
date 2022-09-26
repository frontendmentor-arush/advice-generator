let advice_id=document.querySelector('.adviceid');
let advice=document.querySelector('.line');


async function getAdvice(){
    var data = await fetch("https://api.adviceslip.com/advice");
    let res = await data.json();
    console.log(res.slip.id);
    console.log(res.slip.advice);

    advice_id.textContent= `Advice: #${res.slip.id}`;
    advice.textContent= `"${res.slip.advice}"`;
}

getAdvice();

generate.addEventListener('click', function(){
    getAdvice();
});

