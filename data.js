function saveData(data) {
    localStorage.setItem('food',JSON.stringify(data));
}

function loadData(){
    if(localStorage.hasOwnProperty('food')){
        return  JSON.parse(localStorage.getItem('food'));
    }else {
        return [];
    }

}