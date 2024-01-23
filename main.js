let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let search = document.getElementById("search");

// Get Total

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "red";
  }
}

// Add Product
// Save Local Storage
let productList;
if (localStorage.product != null) {
  productList = JSON.parse(localStorage.product);
} else {
  productList = [];
}

submit.onclick = function () {
  newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
if (newProduct.count > 1 ){
    for (let  i=0; i < newProduct.count; i++){
        productList.push(newProduct);
    } 
    } else {
        productList.push(newProduct);
    }
    
      // productList.push(newProduct);
    localStorage.setItem("product", JSON.stringify(productList));
    clearData();
    showData();
}


// Clear Inputs

function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

// read
function showData() {
  let table = "";
  for (let i = 0; i < productList.length; i++) {
    table += `
        <tr>
                        <td>${i+1}</td>
                        <td>${productList[i].title}</td>
                        <td>${productList[i].price}</td>
                        <td>${productList[i].taxes}</td>
                        <td>${productList[i].ads}</td>
                        <td>${productList[i].discount}</td>
                        <td>${productList[i].total}</td>
                        <td>${productList[i].category}</td>
                        <td><button id="update" onclick="updateItem(${i})" >Update</button></td>
                        <td><button id="delete" onclick='deleteItem(${i})'>Delete</button></td>
                    </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
  //DeleteAll
let btnDeleteAll = document.getElementById('deleteAll');
if (productList.length > 0){
    btnDeleteAll.innerHTML = `
    <button onclick='deleteAll()'>Delete All (${productList.length})</button>
    `
} else {
btnDeleteAll.innerHTML = '';
}
}
showData();


// Delete

function deleteItem(i) {
  productList.splice(i, 1);
  localStorage.product = JSON.stringify(productList);
  showData();
}

function deleteAll(){
    localStorage.clear();
    productList.splice(0);
    showData();
}


// Update
function updateItem(i){

}

// Search
// Clean Data
