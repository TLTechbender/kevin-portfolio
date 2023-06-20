'use strict'
const menu = document.querySelector("#menu-icon");
const menulist = document.querySelector(".menulist");
const menuitems = document.querySelectorAll("#items");
const cancelBtn = document.querySelector("#cancel-btn");
const titles = document.querySelectorAll(".heads");
const stories = document.querySelectorAll(".tab-contents");
const active = document.querySelector(".active-tab");
const activeHead =  document.querySelector(".active-head");



menu.addEventListener("click", ()=>{
menulist.classList.add("open-menu");
    
  
});

cancelBtn.addEventListener("click",()=>{
    menulist.classList.remove('open-menu');
    
});

    
menuitems.forEach(menuitem=>{
    menuitem.addEventListener('click', ()=>{
        menulist.classList.remove('open-menu');
    
    })
});



// this is for the tabs

titles.forEach((title,i)=>{
    title.addEventListener("click", ()=>{
        positions(i);
    });
});


var positions= (index)=>{
    stories.forEach((story)=>{
     story.classList.remove("active-tab");
    })
    
 titles.forEach((title)=>{
     title.classList.remove("active-head")
 })
 
 
 stories[index].classList.add("active-tab");
  titles[index].classList.add("active-head") 
      
 }