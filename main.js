let CartIcon = document.getElementById("open");
let CartMenu = document.querySelector(".cart-menu");
let CloseCart= document.getElementById("close");
let LapContent = document.querySelector(".lapcontent");
let phonecontent= document.querySelector(".phonecontent");
let accessoriescontent = document.querySelector(".accessoriescontent");
let list = document.querySelector(".list");
let cartList = document.querySelector(".cartlist");
let quantity = document.querySelector(".quantity");
let total = document.querySelector(".total")
let contentpro=document.querySelector(".contentpro")




CartIcon.addEventListener("click" , ()=>{
    CartMenu.classList.add("active")
})

CloseCart.addEventListener("click" , () =>{
    CartMenu.classList.remove("active")
})

let map1 = document.querySelector(".map1");
let locationmap = document.querySelector(".locationmap");
let closeMap = document.getElementById("close4")

map1.addEventListener("click" , ()=>{
    locationmap.classList.add("goo")
})
closeMap.addEventListener("click" , ()=>{
    locationmap.classList.remove("goo")
})


let product=[
    {
        id:1,
        image:"1.jpg",
        Name:"HP Laptop",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:2,
        image:"2.jpg",
        Name:"Victus Laptop",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:22000,
        read: "Read more"
    },
    {
        id:3,
        image:"3.jpg",
        Name:"Lenovo Laptop",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:23000,
        read: "Read more"
    },
    {
        id:4,
        image:"4.jpg",
        Name:"Mac book",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:46000,
        read: "Read more"
    },
    {
        id:5,
        image:"5.jpg",
        Name:"Dell Laptop",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:20000,
        read: "Read more"
    },
    {
        id:6,
        image:"6.jpg",
        Name:"Asus Laptop",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:15000,
        read: "Read more"
    },
]
let product2=[
    {
        id:7,
        image:"m1.jpg",
        Name:"Samsung Galaxy",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:8,
        image:"m2.jpg",
        Name:"Nokia",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:9,
        image:"m3.jpg",
        Name:"Nokia Slim",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:10,
        image:"m4.jpg",
        Name:"Realme C53",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:11,
        image:"m5.jpg",
        Name:"Realme 11 pro",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:12,
        image:"m6.jpg",
        Name:"Samsung",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
]
let product3=[
    {
        id:13,
        image:"a1.jpg",
        Name:"Aramo",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
        
    },
    {
        id:14,
        image:"a2.jpg",
        Name:"JBL",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:15,
        image:"a3.jpg",
        Name:"JBL Pod",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:16,
        image:"a4.jpg",
        Name:"teko",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
    },
    {
        id:17,
        image:"a5.jpg",
        Name:"Realme pro",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
        
    },
    {
        id:18,
        image:"a6.jpg",
        Name:"TWS",
        Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas sed aspernatur quo quisquam quod quia doloribus praesentium pariatur est.",
        price:18000,
        read: "Read more"
        
    },
]
let listCard2=[]
let listcard1 =[]
let listCard =[];
if (localStorage.dataList != null){
    listCard = JSON.parse(localStorage.dataList)
}
getProductLocalStorage()

function initApp(){
    product.forEach( (value)=>{
        let NewDiv= document.createElement("div")
        NewDiv.classList.add("card");
        NewDiv.innerHTML = `
        <img src="${value.image}">
        <h2 calss ="title">${value.Name}</h2>
        <p id ="disc">${value.Details}></p>
        <output onclick="AddTODetails(${value.id})" id="readtest">Read more</output>
        <h3 calss="price">${value.price}</h3>
        <output onclick="AddToCart(${value.id})" id="add">Add To Cart</output>


        ` 
        LapContent.appendChild(NewDiv)
    })

    product2.forEach( (value)=>{
        let NewDiv= document.createElement("div")
        NewDiv.classList.add("card");
        NewDiv.innerHTML = `
        <img src="${value.image}">
        <h2 calss ="title">${value.Name}</h2>
        <p id ="disc">${value.Details}></p>
        <output onclick="AddTODetails(${value.id})" id="readtest">Read more</output>
        <h3 calss="price">${value.price}</h3>
        <output onclick="AddToCart(${value.id})" id="add">Add To Cart</output>
        ` 
        phonecontent.appendChild(NewDiv)
    })

    product3.forEach((value)=>{
        let NewDiv=document.createElement("div")
        NewDiv.classList.add("card");
        NewDiv.innerHTML=`
        <img src="${value.image}">
        <h2 calss ="title">${value.Name}</h2>
        <p id ="disc">${value.Details}></p>
        <output onclick="AddTODetails(${value.id})" id="readtest">Read more</output>
        <h3 calss="price">${value.price}</h3>
        <output onclick="AddToCart(${value.id})" id="add">Add To Cart</output>
        `
        accessoriescontent.appendChild(NewDiv)
    })
    
}

    /*search */ 

initApp()




function AddToCart(id){
    let productToAdd = product.find(p => p.id === id) || product2.find(p => p.id === id) || product3.find(p => p.id === id);
    let productIndex = listCard.findIndex(p => p.id === id);

    if (productIndex > -1) {
        listCard[productIndex].quantity += 1;
    } else {
        listCard.push({...productToAdd, quantity: 1});
    }
    

    reloadcard()
}

function reloadcard(){ 
    cartList.innerHTML = "";
    let count = 0;
    let TotalPrice = 0;

    listCard.forEach( (value) =>{
        TotalPrice += value.price*value.quantity
        count += value.quantity


        let NewDiv = document.createElement("li")
        NewDiv.classList.add("box")
        NewDiv.innerHTML = `
        <div><img src= "${value.image}"></div>
        <div calss ="title">${value.Name}</div>
        <div><span>${value.price.toLocaleString()} LE</spna></div>
        <div calss = "change">
        <buttom onclick="ChangeQuantity( ${value.id} , ${value.quantity -1 })">-</buttom>
        <div calss "qount">${value.quantity}</div>
        <buttom onclick="ChangeQuantity( ${value.id} , ${value.quantity +1})">+</buttom>
        </div>
        `
        cartList.appendChild(NewDiv)
 


})

    total.innerHTML = TotalPrice += " LE"
    quantity.innerHTML =count

    addProductLocalStorage(listCard)
}
function addProductLocalStorage(listCard){
    localStorage.setItem("dataList",JSON.stringify(listCard))
}
function getProductLocalStorage(){
    let data = localStorage.getItem("dataList")
    if(data){
        let Product = JSON.parse(data)
        reloadcard(Product)
    }
}

function ChangeQuantity(id, NewQuantity){
    let productIndex = listCard.findIndex(p => p.id === id);
    if(NewQuantity === 0 ){
        listCard.splice(productIndex,1)
    }else{
        listCard[productIndex].quantity= NewQuantity
    }
    reloadcard();
}

let readtests = document.querySelectorAll("#readtest");
let contentPro = document.querySelector(".contentpro");
let ClosePro= document.getElementById("close2");

readtests.forEach((readtest) => {
    readtest.addEventListener("click", () => {
      contentPro.classList.add("tak");
      window.location.href = "#contentpro";
    });
  });

ClosePro.addEventListener("click" , ()=>{
    contentPro.classList.remove("tak");
})



function AddTODetails(id){
    let productToAdd1 = product.find(p => p.id === id) || product2.find(p => p.id === id) || product3.find(p => p.id === id);
    let productIndex1 = listcard1.findIndex(p => p.id === id);
    if (listcard1.length < 1) {
        listcard1.push({...productToAdd1});
    } else {
        listcard1 = [{...productToAdd1}];
    }

    
    console.log(listcard1)

    reloaddetails()
}
function reloaddetails(){
    contentPro.innerHTML =""


    listcard1.forEach( (value)=>{
        let newDivD = document.createElement("div")
        newDivD.classList.add("detailbox")
        newDivD.innerHTML= `  
        <i class="fa-solid fa-circle-xmark" id="close3"></i>
        <div calss ="titlemain" id ="titlemain">${value.Name}</div>
        <div><img src= "${value.image}"></div>
        <h1 calss ="title">${value.Name}</h1>
        <p id ="disc">${value.Details}></p>
        <div><span>${value.price} LE</spna></div>
        <output onclick="AddToCart(${value.id})" id="add">Add To Cart</output>


        `

        contentPro.appendChild(newDivD)
    })

    let ClosePro2= document.getElementById("close3");

    ClosePro2.addEventListener("click" , ()=>{
        contentPro.classList.remove("tak");
    })

}


function search() {
    const searchbox = document.getElementById("search-item").value.toLowerCase();
    const productItems = document.getElementById("container");
    const productSearch = document.querySelectorAll(".card");
    const titleElements = productItems.getElementsByTagName("h2");

    for (var i = 0; i < titleElements.length; i++) {
        let match = productSearch[i].getElementsByTagName("h2")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toLocaleLowerCase().indexOf(searchbox) > -1) {
                productSearch[i].style.display = "";
            } else {
                productSearch[i].style.display = "none";
            }
        }
    }
}
search()


