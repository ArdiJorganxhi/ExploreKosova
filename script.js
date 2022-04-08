let text = document.getElementById('text');
let about = document.getElementById('about');
let section = document.querySelectorAll('section');
let navbar = document.querySelector('nav');

window.addEventListener('scroll', function(){
   let value = window.scrollY;

   text.style.left = 30 + value * 0.3 + "%";
   const header = document.querySelector('nav');
   header.classList.toggle("sticky", window.scrollY > 0);
})


window.onscroll = () =>{

   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
 
   section.forEach(sec =>{
 
     let top = window.scrollY;
     let height = sec.offsetHeight;
     let offset = sec.offsetTop - 150;
     let id = sec.getAttribute('id');
 
     if(top >= offset && top < offset + height){
       navLinks.forEach(links =>{
         links.classList.remove('active');
         document.querySelector('nav a[href*='+id+']').classList.add('active');
       });
     };
 
   });
 
 }