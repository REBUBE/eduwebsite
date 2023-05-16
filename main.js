const openButton = document.querySelector("#open-button")
const menuList = document.querySelector(".nav_list")
const closeButton=document.querySelector("#close-button")


openButton.addEventListener('click', function ()
{
    menuList.style.display = "flex"
    openButton.style.display = "none"
    closeButton.style.display="inline-block"
    
})

closeButton.addEventListener('click', function ()
{  
    menuList.style.display = "none"
    openButton.style.display = "inline-block"
    closeButton.style.display="none"

})

