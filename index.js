const showQuantity = document.getElementById('js-show');
const Addone = document.getElementById('js-add');
const Addtwo = document.getElementById('js-addtwo');
const Addthree = document.getElementById('js-addthree');
const Addten = document.getElementById('js-addten');
const Reset = document.getElementById('js-reset');
const Cartresult = document.getElementById('js-cartresult');
const Cartstate = document.getElementById('js-cartstate');
const Cartimage = document.getElementById('js-cart');
const CartNumber = document.getElementById('js-count');



let cartQuantity = 0;

Cartimage.onclick = function (){
    Cartstate.textContent = '';
    Cartresult.textContent = '';
}

showQuantity.onclick = function (){
    CartNumber.textContent = cartQuantity;
    Cartresult.textContent = `The cart has: ${cartQuantity} items.`
}

Addone.onclick = function (){
    cartQuantity ++;
    CartNumber.textContent = cartQuantity;
    Cartresult.textContent = `One items added.`
}
Addtwo.onclick = function (){
    cartQuantity += 2;
    CartNumber.textContent = cartQuantity;
    Cartresult.textContent = ` Two items added.`
}
Addthree.onclick = function (){
    cartQuantity += 3;
    CartNumber.textContent = cartQuantity;
    Cartresult.textContent = `Three items added.`
}
Addten.onclick = function (){
    cartQuantity += 10;
    CartNumber.textContent = cartQuantity;
    Cartresult.textContent = `Ten items added.`
}
Reset.onclick =  function(){
    cartQuantity = 0;
    CartNumber.textContent = cartQuantity;
    Cartstate.textContent = `The cart has been reset.`
} 