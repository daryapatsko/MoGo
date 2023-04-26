document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger').addEventListener('click',function(){
        document.querySelector(".menu_header").classList.toggle("open"),
        document.querySelector(".header").classList.toggle("open")
    })
})
