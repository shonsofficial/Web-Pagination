let thisPage = 1; // It keeps track of which page you’re on (thisPage).
let limit = 6; // It shows a list of items, but only a few at a time (6 per page).
let list = document.querySelectorAll('.list .item');

function loadItem(){ //The loadItem() function hides all items except the ones for the current page.
    let beginGet = limit * (thisPage - 1); // 0
    let endGet = limit * thisPage - 1;    // 5
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

function listPage(){ // The listPage() function creates page numbers and "PREV"/"NEXT" buttons.
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}

// When you click a page number or "PREV"/"NEXT", it calls changePage(), which updates the current page and reloads the items.
// In short: It splits a long list into smaller pages and lets you move between them.