let foods = loadData();

function addFood() {
    let stt = document.getElementById('food-stt').value;
    let name = document.getElementById('food-name').value;
    let desc = document.getElementById('food-desc').value;
    let price = document.getElementById('food-price').value;
    let quantity = document.getElementById('food-quantity').value;
    let img = document.getElementById('food-img').value;
    if (stt == '' || name == '' || desc == '' || price == '' || quantity == '' || img == '') {
        alert('you cannot leave the boxes blank');
    }
    let food = new Food(stt, name, desc, price, quantity, img);

    foods.push(food);
    console.log(food)
    display();
    saveData(foods);
    revert();
}

function deleteFood(index) {
    foods.splice(index, 1);
    display();
    saveData();
}

function editFood(index) {
    document.getElementById("edit-stt").value = foods[index].stt;
    document.getElementById("edit-name").value = foods[index].name;
    document.getElementById("edit-desc").value = foods[index].desc;
    document.getElementById("edit-price").value = foods[index].price;
    document.getElementById("edit-quantity").value = foods[index].quantity;
    document.getElementById("edit-img").value = foods[index].img;
    current = index;
}

function updateFood() {
    let index = current;
    foods[index].stt = document.getElementById("edit-stt").value;
    foods[index].name = document.getElementById("edit-name").value;
    foods[index].desc = document.getElementById("edit-desc").value;
    foods[index].price = document.getElementById("edit-price").value;
    foods[index].quantity = document.getElementById("edit-quantity").value;
    foods[index].img = document.getElementById("edit-img").value;
    display();
    revert2();
    saveData();
}

function revert2() {
    document.getElementById('edit-stt').value = ''
    document.getElementById('edit-name').value = ''
    document.getElementById('edit-desc').value = ''
    document.getElementById('edit-price').value = ''
    document.getElementById('edit-quantity').value = ''
    document.getElementById('edit-img').value = ''
}


function revert() {
    document.getElementById('food-stt').value = ''
    document.getElementById('food-name').value = ''
    document.getElementById('food-desc').value = ''
    document.getElementById('food-price').value = ''
    document.getElementById('food-quantity').value = ''
    document.getElementById('food-img').value = ''
}

function display() {
    let str = '';
    for (let i = 0; i < foods.length; i++) {
        str += `<tr>
                <td>${foods[i].stt}</td>
                <td>${foods[i].name}</td>
                <td>${foods[i].desc}</td>
                <td>${foods[i].price}</td>
                <td>${foods[i].quantity}</td>
               <td><img style="width: 100px;height: auto" src="${foods[i].img}"></td>
           <td><button onclick="editFood(${i})">EDIT</button> </td>
           <td><button onclick="deleteFood(${i})">DELETE</button></td>    
              </tr>`;
    }
    document.getElementById('table-render').innerHTML = str;
}

display();