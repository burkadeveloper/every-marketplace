const productData = [{
    name:'intermediate basket ball made with high quality',
    image:'basketball.jpg',
    categories:'Sport',
    price: 5,
    overprice:8.9
},
{
    name:'old school new arrival jacket 100% cotton',
    image:'jackeet.jpg',
    categories:'cloth',
    price: 5,
    overprice:8.9
},
{
    name:'Nike jumper made in turkey with high quality',
    image:'jumper.jpg',
    categories:'cloth',
    price: 50,
    overprice:80.9
},
{
    name:'brand new los angeles comfort short ',
    image:'losangelsshor.jpg',
    categories:'cloth',
    price: 5,
    overprice:8.9
},
{
    name:'New jordan 4 sport shoes for men and women',
    image:'jordan.jpg',
    categories:'cloth',
    price: 15,
    overprice:18.9
},
]
let html = ` <div class="product-card-container">
       
        <div class="produt-card-header">
            <img class="product-image"  src="images/gym-pant.jpg">
          </div>
       
        <div class="product-card-body">
           <h4 class="product-name">gym outfit highly flexible for exercise </h4>
            <span class="categories">cloth</span><br>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
          <p class="product-price"><span class="over-price"></span></p>
          
          
      </div>
      <div class="add_button">
          <button class="btn btn-primary">shop</button>
        </div>
      </div>`

      productData.forEach((product)=>{
        html +=`<div class="product-card-container">
       
        <div class="produt-card-header">
            <img class="product-image"  src="images/${product.image}">
          </div>
       
        <div class="product-card-body">
           <h4 class="product-name">${product.name}</h4>
             <span class="categories">${product.categories}</span><br>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
          <p class="product-price">${product.price} <span class="over-price">$${product.overprice}</span></p>
          
      </div>
      <div class="add_button">
          <button class="btn btn-primary">shop</button>
        </div>
      </div>`
      })
    document.querySelector('.products-grid').innerHTML += html