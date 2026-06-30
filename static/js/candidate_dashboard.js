/*
=====================================================
IT Career Hub
Candidate Dashboard
JavaScript
=====================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    /*==================================================
    DOM
    ==================================================*/

    const profileButton = document.querySelector(".profile-btn");
    const profileDropdown = document.querySelector(".profile-dropdown");

    const notificationButton = document.querySelector(".notification-btn");
    const messageButton = document.querySelector(".message-btn");
    const tableRows = document.querySelectorAll(".application-table tbody tr");

    const sidebar = document.querySelector(".dashboard-sidebar");



    /*==================================================
    PROFILE DROPDOWN
    ==================================================*/

    if (profileButton && profileDropdown) {

        profileButton.addEventListener("click", function (e) {

            e.stopPropagation();

            profileDropdown.classList.toggle("active");

        });

        document.addEventListener("click", function () {

            profileDropdown.classList.remove("active");

        });

    }



    /*==================================================
    NOTIFICATION
    ==================================================*/

    if (notificationButton) {

        notificationButton.addEventListener("click", function () {

            console.log("Notification clicked");

        });

    }



    /*==================================================
    MESSAGE
    ==================================================*/

    if (messageButton) {

        messageButton.addEventListener("click", function () {

            console.log("Message clicked");

        });

    }

    /*==================================================
    TABLE ROW EFFECT
    ==================================================*/

    tableRows.forEach(function(row){

        row.addEventListener("mouseenter",function(){

            row.style.background="#F8FBFF";

        });

        row.addEventListener("mouseleave",function(){

            row.style.background="";

        });

    });



    /*==================================================
    BUTTON RIPPLE
    ==================================================*/

    const buttons=document.querySelectorAll(

        ".browse-job-btn,.cv-action-btn,.saved-detail-btn,.complete-profile-btn"

    );



    buttons.forEach(function(button){

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            const rect=button.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            ripple.style.width=size+"px";

            ripple.style.height=size+"px";

            ripple.style.left=e.clientX-rect.left-size/2+"px";

            ripple.style.top=e.clientY-rect.top-size/2+"px";

            ripple.className="ripple";

            button.appendChild(ripple);

            setTimeout(function(){

                ripple.remove();

            },600);

        });

    });



    /*==================================================
    ACTIVE SIDEBAR
    ==================================================*/

    const menuItems=document.querySelectorAll(".sidebar-menu li");

    menuItems.forEach(function(item){

        item.addEventListener("click",function(){

            menuItems.forEach(function(i){

                i.classList.remove("active");

            });

            item.classList.add("active");

        });

    });



    /*==================================================
    AUTO HIDE BADGE
    ==================================================*/

    const notificationBadge=document.querySelector(".notification-btn .badge-dot");

    if(notificationBadge){

        notificationButton.addEventListener("click",function(){

            notificationBadge.style.display="none";

        });

    }



    const messageBadge=document.querySelector(".message-btn .badge-dot");

    if(messageBadge){

        messageButton.addEventListener("click",function(){

            messageBadge.style.display="none";

        });

    }



    /*==================================================
    MOBILE SIDEBAR
    ==================================================*/

    const mobileButton=document.querySelector(".mobile-menu-btn");

    if(mobileButton && sidebar){

        mobileButton.addEventListener("click",function(){

            sidebar.classList.toggle("show");

        });

    }



    /*==================================================
    WINDOW RESIZE
    ==================================================*/

    window.addEventListener("resize",function(){

        if(window.innerWidth>992){

            if(sidebar){

                sidebar.classList.remove("show");

            }

        }

    });



    /*==================================================
    SMOOTH SCROLL
    ==================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });



    /*==================================================
    PAGE LOADED
    ==================================================*/

    console.log("Candidate Dashboard Loaded");

});