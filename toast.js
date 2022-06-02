const btn = document.getElementById("btn");
const container = document.getElementById("conatiner");


btn.addEventListener('click',()=> {
    createNotification();

});

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText ="PATIENCE IS POWER";

    container.appendChild(notif);

    setTimeout(()=>{
        notif.remove();

    },3000);
}

