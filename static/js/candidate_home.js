/*==================================================
=            CANDIDATE HOME JAVASCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initCategoryHover();

    initJobButtons();

    initReviewButtons();

    initSlider();

    initSearch();

    initSmoothScroll();

});



/*==================================================
=            CATEGORY EFFECT
==================================================*/

function initCategoryHover(){

    const categories=document.querySelectorAll(".category-item");

    categories.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.style.transform="translateY(-6px) scale(1.03)";

        });

        item.addEventListener("mouseleave",()=>{

            item.style.transform="translateY(0) scale(1)";

        });

    });

}





/*==================================================
=              APPLY BUTTON
==================================================*/

function initJobButtons(){

    const buttons=document.querySelectorAll(".job-footer button");

    buttons.forEach(btn=>{

        btn.addEventListener("click",()=>{

            btn.innerHTML="Đã ứng tuyển";

            btn.disabled=true;

            btn.style.background="#30C48D";

            btn.style.cursor="default";

        });

    });

}





/*==================================================
=              REVIEW BUTTON
==================================================*/

function initReviewButtons(){

    const likeBtns=document.querySelectorAll(".like-btn");

    const dislikeBtns=document.querySelectorAll(".dislike-btn");



    likeBtns.forEach(btn=>{

        btn.addEventListener("click",()=>{

            btn.classList.toggle("active");

        });

    });



    dislikeBtns.forEach(btn=>{

        btn.addEventListener("click",()=>{

            btn.classList.toggle("active");

        });

    });

}





/*==================================================
=              TESTIMONIAL SLIDER
==================================================*/

function initSlider(){

    const cards=document.querySelectorAll(".testimonial-card");

    const dots=document.querySelectorAll(".dot");



    if(cards.length===0) return;



    let index=0;



    function showSlide(i){

        cards.forEach(card=>{

            card.style.display="none";

        });



        dots.forEach(dot=>{

            dot.classList.remove("active");

        });



        cards[i].style.display="block";



        if(cards.length>1){

            cards[(i+1)%cards.length].style.display="block";

        }



        if(dots[i]){

            dots[i].classList.add("active");

        }

    }



    showSlide(index);



    const arrows=document.querySelectorAll(".slider-arrow");



    if(arrows.length===2){

        arrows[0].addEventListener("click",()=>{

            index--;

            if(index<0){

                index=cards.length-1;

            }

            showSlide(index);

        });



        arrows[1].addEventListener("click",()=>{

            index++;

            if(index>=cards.length){

                index=0;

            }

            showSlide(index);

        });

    }



    setInterval(()=>{

        index++;

        if(index>=cards.length){

            index=0;

        }

        showSlide(index);

    },5000);

}





/*==================================================
=             HERO SEARCH
==================================================*/

function initSearch(){

    const form=document.querySelector(".hero-search");



    if(!form) return;



    form.addEventListener("submit",(e)=>{

        e.preventDefault();



        const keyword=form.querySelector(
            "input[name='keyword']"
        ).value;



        const location=form.querySelector(
            "input[name='location']"
        ).value;



        console.log({

            keyword,

            location

        });



        /*
        Django sau này

        window.location.href=

        `/jobs/?keyword=${keyword}&location=${location}`;

        */

    });

}





/*==================================================
=          SMOOTH SCROLL
==================================================*/

function initSmoothScroll(){

    document.querySelectorAll("a[href^='#']").forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();



            const target=document.querySelector(

                this.getAttribute("href")

            );



            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}





/*==================================================
=             HEADER SHADOW
==================================================*/

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");



    if(!navbar) return;



    if(window.scrollY>40){

        navbar.style.boxShadow="0 6px 20px rgba(0,0,0,.08)";

    }else{

        navbar.style.boxShadow="none";

    }

});





/*==================================================
=           FADE ANIMATION
==================================================*/

const observer=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:.2

}

);



document.querySelectorAll(

".job-card,.company-card,.category-item,.testimonial-card"

).forEach(item=>{

    observer.observe(item);

});





/*==================================================
=             BACK TO TOP
==================================================*/

const backTop=document.createElement("button");

backTop.innerHTML="↑";

backTop.className="back-top";

document.body.appendChild(backTop);



backTop.style.position="fixed";

backTop.style.right="25px";

backTop.style.bottom="25px";

backTop.style.width="45px";

backTop.style.height="45px";

backTop.style.borderRadius="50%";

backTop.style.border="none";

backTop.style.background="#5476F1";

backTop.style.color="#fff";

backTop.style.cursor="pointer";

backTop.style.display="none";

backTop.style.zIndex="999";



window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        backTop.style.display="block";

    }else{

        backTop.style.display="none";

    }

});



backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById(
        "candidateProfileToggle"
    );

    const menu = document.getElementById(
        "candidateProfileMenu"
    );

    if (!toggle || !menu) {
        return;
    }

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.classList.toggle("show");
    });

    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        menu.classList.remove("show");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            menu.classList.remove("show");
        }
    });
});

