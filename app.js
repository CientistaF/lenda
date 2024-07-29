const product = [
    {
     id: 0,
     image: './img/A.jpg',
     title: 'Z Flip Foldable Mobile',
     price: 120,
    },
    {
        id: 1,
        image: './img/B.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 1,
        image: './img/C.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: './img/A.jpg',
        title: 'Head Phone',
        price: 100,
    },    
];

const categories = [...new Set(product.map((item)=> 
  {return item}))]
  let i=0;
  document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
    `<div class='box'>
       <div class='img-box'>
        <img class='images' src=${image}></imag>
      </div>
     <div class='bottom'> 
     <p>${title}</p>
     <h2>${price}.00</h2>`+
    "<button onclick='addtocart("+(i++)+")'>Add ao Carrinho</button>"+
    `</div>
    </div>`  
) 
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
        
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=> 
        {
            var {image, title, price} = items;
            return(
                `<div class='cart-item'>
                <div class='row-img'
                 <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-soli fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}