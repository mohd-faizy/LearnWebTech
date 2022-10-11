// check if the user is ready to play!
console.log("script running...");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham-burger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    } 
    else{
        document.querySelector('.cross').style.display = 'inline'
        document.querySelector('.ham').style.display = 'none'
        }
});