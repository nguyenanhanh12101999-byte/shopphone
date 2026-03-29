
(function initAdmin() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (!users.some(u => u.role === "admin")) {
    users.push({ username:"admin", password:"admin123", role:"admin" });
    localStorage.setItem("users", JSON.stringify(users));
  }

  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([
      {
        id:"iphone15", name:"iPhone 15 128GB", brand:"Apple",
        price:22990000, oldPrice:24990000,
        imageSmall:"img/iPhone 15 128GB.jpg",
        imageLarge:"img/iPhone 15 128GB.jpg",
        specs:{ screen:"6.1 inch OLED", cpu:"Apple A16 Bionic", ram:"6GB", storage:"128GB", battery:"3349 mAh" }
      },
      {
        id:"samsungs23", name:"Samsung Galaxy S23", brand:"Samsung",
        price:18500000, oldPrice:20990000,
        imageSmall:"img/Samsung Galaxy S23.jpg",
        imageLarge:"img/Samsung Galaxy S23.jpg",
        specs:{ screen:"6.1 inch AMOLED", cpu:"Snapdragon 8 Gen 2", ram:"8GB", storage:"256GB", battery:"3900 mAh" }
      },
      {
        id:"iphone16", name:"iPhone 16 128GB", brand:"Apple",
        price:26990000, oldPrice:28990000,
        imageSmall:"img/iPhone 16.jpg",
        imageLarge:"img/iPhone 16.jpg",
        specs:{ screen:"6.1 inch OLED", cpu:"Apple A18", ram:"8GB", storage:"128GB", battery:"3560 mAh" }
      },
      {
        id:"iphone15promax", name:"iPhone 15 Pro Max", brand:"Apple",
        price:30990000, oldPrice:33990000,
        imageSmall:"img/iPhone 15 Pro Max.jpg",
        imageLarge:"img/iPhone 15 Pro Max.jpg",
        specs:{ screen:"6.7 inch OLED", cpu:"Apple A17 Pro", ram:"8GB", storage:"256GB", battery:"4422 mAh" }
      },
      {
        id:"s24ultra", name:"Samsung Galaxy S24 Ultra", brand:"Samsung",
        price:28990000, oldPrice:31990000,
        imageSmall:"img/Samsung Galaxy S24 Ultra.jpg",
        imageLarge:"img/Samsung Galaxy S24 Ultra.jpg",
        specs:{ screen:"6.8 inch AMOLED", cpu:"Snapdragon 8 Gen 3", ram:"12GB", storage:"256GB", battery:"5000 mAh" }
      },
      {
        id:"s23fe", name:"Samsung Galaxy S23 FE", brand:"Samsung",
        price:13990000, oldPrice:15990000,
        imageSmall:"img/Samsung Galaxy S23 FE.jpg",
        imageLarge:"img/Samsung Galaxy S23 FE.jpg",
        specs:{ screen:"6.4 inch AMOLED", cpu:"Exynos 2200", ram:"8GB", storage:"128GB", battery:"4500 mAh" }
      },
      {
        id:"xiaomi14", name:"Xiaomi 14", brand:"Xiaomi",
        price:17990000, oldPrice:19990000,
        imageSmall:"img/Xiaomi 14.jpg",
        imageLarge:"img/Xiaomi 14.jpg",
        specs:{ screen:"6.36 inch AMOLED", cpu:"Snapdragon 8 Gen 3", ram:"12GB", storage:"256GB", battery:"4610 mAh" }
      },
      {
        id:"redmik70", name:"Redmi K70", brand:"Xiaomi",
        price:10990000, oldPrice:12990000,
        imageSmall:"img/Redmi K70.jpg",
        imageLarge:"img/Redmi K70.jpg",
        specs:{ screen:"6.67 inch AMOLED", cpu:"Snapdragon 8 Gen 2", ram:"12GB", storage:"256GB", battery:"5000 mAh" }
      },
      {
        id:"opporeno11", name:"OPPO Reno11 5G", brand:"OPPO",
        price:10990000, oldPrice:11990000,
        imageSmall:"img/OPPO Reno11.jpg",
        imageLarge:"img/OPPO Reno11.jpg",
        specs:{ screen:"6.7 inch AMOLED", cpu:"Dimensity 7050", ram:"8GB", storage:"256GB", battery:"5000 mAh" }
      },
      {
        id:"vivov30", name:"Vivo V30 5G", brand:"Vivo",
        price:9990000, oldPrice:11990000,
        imageSmall:"img/Vivo V30.jpg",
        imageLarge:"img/Vivo V30.jpg",
        specs:{ screen:"6.78 inch AMOLED", cpu:"Snapdragon 7 Gen 3", ram:"8GB", storage:"256GB", battery:"5000 mAh" }
      },
      {
        id:"realme11pro", name:"Realme 11 Pro+", brand:"Realme",
        price:8990000, oldPrice:10990000,
        imageSmall:"img/Realme 11 Pro+.jpg",
        imageLarge:"img/Realme 11 Pro+.jpg",
        specs:{ screen:"6.7 inch AMOLED", cpu:"Dimensity 7050", ram:"12GB", storage:"256GB", battery:"5000 mAh" }
      },
      {
        id:"nokia105", name:"Nokia 105 4G", brand:"Nokia",
        price:590000, oldPrice:790000,
        imageSmall:"img/Nokia 105.jpg",
        imageLarge:"img/Nokia 105.jpg",
        specs:{ screen:"1.8 inch", cpu:"Unisoc", ram:"48MB", storage:"128MB", battery:"1450 mAh" }
      },




      {
        id:"macbookairm3", name:"MacBook Air M3 13 inch", brand:"Apple",
        price:27990000, oldPrice:29990000,
        imageSmall:"img/macbook air m3.jpg",
        imageLarge:"img/macbook air m3.jpg",
        specs:{ screen:"13.6 inch Retina", cpu:"Apple M3", ram:"8GB", storage:"256GB", battery:"18 hours" }
      },
      {
        id:"dellxps13", name:"Dell XPS 13 2025", brand:"Dell",
        price:29590000, oldPrice:32990000,
        imageSmall:"img/Dell XPS 13.jpg",
        imageLarge:"img/Dell XPS 13.jpg",
        specs:{ screen:"13.4 inch FHD+", cpu:"Intel Core Ultra 7", ram:"16GB", storage:"512GB", battery:"12 hours" }
      },
      {
        id:"asuszenbook14", name:"ASUS Zenbook 14 OLED", brand:"Asus",
        price:28990000, oldPrice:31990000,
        imageSmall:"img/Asus Zenbook 14.jpg",
        imageLarge:"img/Asus Zenbook 14.jpg",
        specs:{ screen:"14 inch OLED 2.8K", cpu:"Intel Core Ultra 9", ram:"16GB", storage:"1TB", battery:"15 hours" }
      },
      {
        id:"hpomen16", name:"HP Omen 16 Gaming", brand:"HP",
        price:33990000, oldPrice:36990000,
        imageSmall:"img/HP Omen 16.jpg",
        imageLarge:"img/HP Omen 16.jpg",
        specs:{ screen:"16 inch 2K 240Hz", cpu:"Intel i7 14650HX", ram:"16GB", storage:"1TB", battery:"6 hours" }
      },
      {
        id:"dellg15", name:"Dell G15 5530", brand:"Dell",
        price:19490000, oldPrice:22990000,
        imageSmall:"img/Dell G15.jpg",
        imageLarge:"img/Dell G15.jpg",
        specs:{ screen:"15.6 inch 120Hz", cpu:"Intel i7 13650HX", ram:"16GB", storage:"1TB", battery:"6 hours" }
      },
      {
        id:"lenovolegion5", name:"Lenovo Legion 5", brand:"Lenovo",
        price:26490000, oldPrice:28990000,
        imageSmall:"img/Lenovo Legion 5.jpg",
        imageLarge:"img/Lenovo Legion 5.jpg",
        specs:{ screen:"15.6 inch 165Hz", cpu:"Ryzen 7", ram:"16GB", storage:"512GB", battery:"6 hours" }
      },
      {
        id:"lenovoideapad5", name:"Lenovo IdeaPad Slim 5", brand:"Lenovo",
        price:17990000, oldPrice:19990000,
        imageSmall:"img/Lenovo IdeaPad 5.jpg",
        imageLarge:"img/Lenovo IdeaPad 5.jpg",
        specs:{ screen:"14 inch FHD", cpu:"Ryzen 7", ram:"16GB", storage:"512GB", battery:"10 hours" }
      },
      {
        id:"asusvivobook15", name:"ASUS VivoBook 15", brand:"Asus",
        price:13990000, oldPrice:15990000,
        imageSmall:"img/Asus VivoBook 15.jpg",
        imageLarge:"img/Asus VivoBook 15.jpg",
        specs:{ screen:"15.6 inch FHD", cpu:"Intel Core i5", ram:"8GB", storage:"512GB", battery:"8 hours" }
      },
      {
        id:"msithin15", name:"MSI Thin 15 Gaming", brand:"MSI",
        price:20990000, oldPrice:23990000,
        imageSmall:"img/MSI Thin 15.jpg",
        imageLarge:"img/MSI Thin 15.jpg",
        specs:{ screen:"15.6 inch 144Hz", cpu:"Intel i5", ram:"16GB", storage:"1TB", battery:"6 hours" }
      },
      {
        id:"hpelitebook", name:"HP EliteBook 840 G5", brand:"HP",
        price:7990000, oldPrice:9990000,
        imageSmall:"img/HP EliteBook.jpg",
        imageLarge:"img/HP EliteBook.jpg",
        specs:{ screen:"14 inch FHD", cpu:"Intel i5", ram:"8GB", storage:"256GB", battery:"8 hours" }
      },
      






      {
        id:"applewatchs9", name:"Apple Watch Series 9 GPS 41mm", brand:"Apple Watch",
        price:9990000, oldPrice:11990000,
        imageSmall:"img/apple watch s9.jpg",
        imageLarge:"img/apple watch s9.jpg",
        specs:{ screen:"OLED", cpu:"S9 SiP", ram:"1GB", storage:"64GB", battery:"18 hours" }
      },
      {
        id:"applewatchultra2", name:"Apple Watch Ultra 2", brand:"Apple Watch",
        price:19990000, oldPrice:22990000,
        imageSmall:"img/apple watch ultra 2.jpg",
        imageLarge:"img/apple watch ultra 2.jpg",
        specs:{ screen:"49mm OLED", cpu:"S9 SiP", ram:"1GB", storage:"64GB", battery:"36 hours" }
      },
      {
        id:"applewatchse2023", name:"Apple Watch SE 2023", brand:"Apple Watch",
        price:6490000, oldPrice:7990000,
        imageSmall:"img/apple watch se.jpg",
        imageLarge:"img/apple watch se.jpg",
        specs:{ screen:"Retina OLED", cpu:"S8 SiP", ram:"1GB", storage:"32GB", battery:"18 hours" }
      },
      {
        id:"applewatchs8", name:"Apple Watch Series 8", brand:"Apple Watch",
        price:8990000, oldPrice:10990000,
        imageSmall:"img/apple watch s8.jpg",
        imageLarge:"img/apple watch s8.jpg",
        specs:{ screen:"OLED", cpu:"S8 SiP", ram:"1GB", storage:"32GB", battery:"18 hours" }
      },
      {
        id:"applewatchs7", name:"Apple Watch Series 7", brand:"Apple Watch",
        price:7990000, oldPrice:9990000,
        imageSmall:"img/apple watch s7.jpg",
        imageLarge:"img/apple watch s7.jpg",
        specs:{ screen:"OLED", cpu:"S7", ram:"1GB", storage:"32GB", battery:"18 hours" }
      },
      {
        id:"galaxywatch6", name:"Samsung Galaxy Watch 6 44mm", brand:"Samsung Watch",
        price:6990000, oldPrice:8990000,
        imageSmall:"img/galaxy watch 6.jpg",
        imageLarge:"img/galaxy watch 6.jpg",
        specs:{ screen:"AMOLED", cpu:"Exynos W930", ram:"2GB", storage:"16GB", battery:"40 hours" }
      },
      {
        id:"galaxywatch6classic", name:"Samsung Galaxy Watch 6 Classic", brand:"Samsung Watch",
        price:9990000, oldPrice:11990000,
        imageSmall:"img/galaxy watch 6 classic.jpg",
        imageLarge:"img/galaxy watch 6 classic.jpg",
        specs:{ screen:"AMOLED", cpu:"Exynos W930", ram:"2GB", storage:"16GB", battery:"40 hours" }
      },
      {
        id:"galaxywatch5pro", name:"Samsung Galaxy Watch 5 Pro", brand:"Samsung Watch",
        price:7990000, oldPrice:9990000,
        imageSmall:"img/galaxy watch 5 pro.jpg",
        imageLarge:"img/galaxy watch 5 pro.jpg",
        specs:{ screen:"AMOLED", cpu:"Exynos W920", ram:"1.5GB", storage:"16GB", battery:"80 hours" }
      },
      {
        id:"galaxywatch5", name:"Samsung Galaxy Watch 5", brand:"Samsung Watch",
        price:5990000, oldPrice:7990000,
        imageSmall:"img/galaxy watch 5.jpg",
        imageLarge:"img/galaxy watch 5.jpg",
        specs:{ screen:"AMOLED", cpu:"Exynos W920", ram:"1.5GB", storage:"16GB", battery:"40 hours" }
      },
      {
        id:"galaxywatch4", name:"Samsung Galaxy Watch 4", brand:"Samsung Watch",
        price:3990000, oldPrice:5990000,
        imageSmall:"img/galaxy watch 4.jpg",
        imageLarge:"img/galaxy watch 4.jpg",
        specs:{ screen:"AMOLED", cpu:"Exynos W920", ram:"1.5GB", storage:"16GB", battery:"40 hours" }
      }
    ]));
  }
})();


function getProducts() { return JSON.parse(localStorage.getItem("products")) || []; }
function saveProducts(products) { localStorage.setItem("products", JSON.stringify(products)); }


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image){

  const user = localStorage.getItem("currentUser");
  const role = localStorage.getItem("currentRole");

  if(!user){
    alert("Vui lòng đăng nhập!");
    window.location.href="auth.html";
    return;
  }

  if(role === "admin"){
    alert("Admin không thể mua hàng!");
    return;
  }

  const item = cart.find(i => i.name === name);

  if(item){
    item.quantity++;
  }else{
    cart.push({
      name,
      price,
      image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}
function buyOne(index){

  const user = localStorage.getItem("currentUser");

  if(!user){
    alert("Chưa đăng nhập!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const item = cart[index];

  const order = {
    user: user,
    items: [item],
    total: item.price * item.quantity,
    date: new Date().toLocaleString()
  };

  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));


  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();

  alert("Đã mua sản phẩm!");
}
function removeFromCart(index){
  cart.splice(index, 1); 
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
function renderCart(){

  const box = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");

  if(!box || !count) return;

  box.innerHTML = "";
  count.innerText = cart.length;

  cart.forEach((item, index) => {
    box.innerHTML += `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        
        <img src="${item.image}" width="40">

        <div style="flex:1">
          <div>${item.name}</div>
          <div>${item.price.toLocaleString("vi-VN")} x ${item.quantity}</div>
        </div>

        <button onclick="buyOne(${index})"
          style="background:#0a68ff;color:white;border:none;padding:5px 8px;border-radius:5px;">
          MUA
        </button>

        <button onclick="removeFromCart(${index})"
          style="background:red;color:white;border:none;padding:5px 8px;border-radius:5px;">
          Xóa
        </button>

      </div>
    `;
  });
}
  function checkout(){

  const user = localStorage.getItem("currentUser");

  if(!user){
    alert("Chưa đăng nhập!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const total = cart.reduce((sum,i)=>sum+i.price*i.quantity,0);

  orders.push({
    user,
    items: cart,
    total,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Đặt hàng thành công!");

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}
function clearCart(){
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
document.addEventListener("DOMContentLoaded", () => {

  const cartBtn = document.querySelector(".cart");

  if(cartBtn){
    cartBtn.addEventListener("click", function(e){
      e.stopPropagation(); 
      document.getElementById("cart-dropdown")
        .classList.toggle("hidden");
    });
  }

  
  document.addEventListener("click", () => {
    document.getElementById("cart-dropdown")
      .classList.add("hidden");
  });

});

function renderProductList(list=getProducts()){
  const productList=document.getElementById("productList");
  if(!productList) return;
  productList.innerHTML="";
  list.forEach(p=>{
    const div=document.createElement("div");
    div.className="product-card";
    div.innerHTML=`
      <a href="product.html?id=${p.id}"><img src="${p.imageSmall}" alt="${p.name}"></a>
      <p class="brand">${p.brand}</p>
      <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
      ${p.oldPrice? `<p class="old-price">${p.oldPrice.toLocaleString("vi-VN")} ₫</p>`:""}
      <p class="price">${p.price.toLocaleString("vi-VN")} ₫</p>
      <button onclick="addToCart('${p.name}',${p.price},'${p.imageSmall}')">
         Thêm giỏ hàng
      </button>
      
    `;
    productList.appendChild(div);
  });
}

function filterByBrand(brand){
  if(brand==="all") renderProductList();
  else renderProductList(getProducts().filter(p=>p.brand===brand));
}


function loadProductDetail(){
  const id=new URLSearchParams(window.location.search).get("id");
  if(!id) return;
  const product=getProducts().find(p=>p.id===id);
  if(!product) return;

  document.getElementById("product-name").innerText=product.name;
  document.getElementById("product-image").src=product.imageLarge;
  document.getElementById("product-price").innerText=product.price.toLocaleString("vi-VN")+" ₫";
  if(product.oldPrice) document.getElementById("old-price").innerText=product.oldPrice.toLocaleString("vi-VN")+" ₫";

  const specs=product.specs||{};
  document.getElementById("screen").innerText=specs.screen||product.screen||"Đang cập nhật";
  document.getElementById("chip").innerText=specs.cpu||product.chip||"Đang cập nhật";
  document.getElementById("ram").innerText=specs.ram||product.ram||"Đang cập nhật";
  document.getElementById("storage").innerText=specs.storage||product.storage||"Đang cập nhật";
  document.getElementById("battery").innerText=specs.battery||product.battery||"Đang cập nhật";

  window.buyNow=()=>addToCart(product.name,product.price);
}

function showLogin(){document.getElementById("login-form").classList.remove("hidden");document.getElementById("register-form").classList.add("hidden");}
function showRegister(){document.getElementById("register-form").classList.remove("hidden");document.getElementById("login-form").classList.add("hidden");}
function register(){
  const username=document.getElementById("reg-username").value.trim();
  const password=document.getElementById("reg-password").value;
  const confirm=document.getElementById("reg-confirm").value;
  if(!username||!password||password!==confirm){alert("Thông tin không hợp lệ");return;}
  const users=JSON.parse(localStorage.getItem("users"))||[];
  if(users.some(u=>u.username===username)){alert("Tài khoản đã tồn tại");return;}
  users.push({username,password,role:"user"});
  localStorage.setItem("users",JSON.stringify(users));
  alert("Đăng ký thành công!"); showLogin();
}
function login(){
  const username=document.getElementById("login-username").value.trim();
  const password=document.getElementById("login-password").value;
  const user=(JSON.parse(localStorage.getItem("users"))||[]).find(u=>u.username===username&&u.password===password);
  if(!user){alert("Sai tài khoản hoặc mật khẩu");return;}
  localStorage.setItem("currentUser",user.username);
  localStorage.setItem("currentRole",user.role);
  window.location.replace("index.html");
}
function logout(){localStorage.removeItem("currentUser");localStorage.removeItem("currentRole");window.location.href="index.html";}


document.addEventListener("DOMContentLoaded",()=>{
  renderProductList();
  loadProductDetail();

  const userArea=document.getElementById("user-area");
  if(!userArea) return;
  const user=localStorage.getItem("currentUser");
  const role=localStorage.getItem("currentRole");
  if(!user) userArea.innerHTML=`<a href="auth.html">Đăng nhập</a>`;
  else if(role==="admin") userArea.innerHTML=`Xin chào <b>Admin</b> | <a href="admin.html">Quản trị</a> | <a href="#" onclick="logout()">Đăng xuất</a>`;
  else userArea.innerHTML=
`Xin chào <b>${user}</b> 
| <a href="user-orders.html">Đơn hàng</a> 
| <a href="#" onclick="logout()">Đăng xuất</a>`;
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


setInterval(nextSlide, 4000);
const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{
  if(window.scrollY>300) backToTop.style.display="block";
  else backToTop.style.display="none";
});

backToTop.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});
const brands={
  phone:["Apple","Samsung","Xiaomi","OPPO"],
  laptop:["Dell","HP","Asus","Acer"],
  watch:["Apple Watch","Samsung Watch"],
  accessory:["Tai nghe","Sạc","Ốp lưng"]
};

function showBrand(type){
  const box=document.getElementById("brandBox");
  box.classList.remove("hidden");
  box.innerHTML="";

  brands[type].forEach(b=>{
    box.innerHTML+=`<div onclick="filterByBrand('${b}')">${b}</div>`;
  });
}
