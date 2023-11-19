
btn.addEventListener('click',function(){
    var amount = document.getElementById('amount');
    var person = document.getElementById('persons');
    var btn =  document.getElementById('btn');


     let amounts = Number(amount.value);
     let persons = Number(person.value);
    let amountPerEach = (amounts/persons).toFixed(2);
    document.getElementById('header').innerHTML= amountPerEach+"$ Per Each";
    amount.value="";
    person.value="";
});