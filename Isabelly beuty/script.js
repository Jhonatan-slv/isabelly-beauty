/* ==========================
   Isabelly Beatriz Beauty
   script.js
========================== */

// Animação ao rolar a página
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.15
});

sections.forEach((section)=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// Destaque do menu conforme a seção visível
const menuLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=window.scrollY;
        const offset=section.offsetTop-150;
        const height=section.offsetHeight;

        if(top>=offset && top<offset+height){
            current=section.getAttribute("id");
        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});


// Efeito de aumento nas imagens da galeria
const fotos=document.querySelectorAll(".galeria img");

fotos.forEach((foto)=>{

    foto.addEventListener("click",()=>{

        foto.classList.toggle("zoom");

    });

});


// Cabeçalho muda ao rolar
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.background="#ffffff";
        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";
        header.style.padding="14px 8%";

    }else{

        header.style.background="#ffffff";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";
        header.style.padding="18px 8%";

    }

});


// Botão WhatsApp com efeito pulsante
const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

    whatsapp.classList.toggle("pulse");

},1000);


// Scroll suave para o menu
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Mensagem de boas-vindas
window.addEventListener("load",()=>{

    console.log("Bem-vindo ao site Isabelly Beatriz Beauty!");

});