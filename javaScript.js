let a = 5;
let b = 7;

let result = a*b;
console.log('a = 5','b = 7')
console.log('a * b =',result)




// Responsive Menu bar codes 
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}