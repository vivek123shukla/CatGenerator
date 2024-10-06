let box=document.querySelector('.box');
let image=document.getElementById('image');
let change=document.getElementById('f');
change.addEventListener('click',()=>{
    randomcat();
})
async function randomcat(){
    let url= await fetch('https://api.thecatapi.com/v1/images/search');
    url=await url.json();
    image.src=url[0].url;
}
