document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger').addEventListener('click',function(){
        document.querySelector(".header_menu").classList.toggle("open"),
        document.querySelector(".header_burger").classList.toggle("open"),
        document.querySelector("body").classList.toggle("lock")

    })
})
