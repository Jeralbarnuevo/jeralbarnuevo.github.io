var content=document.getElementsByTagName('body')[0];
var darkmode=document.getElementById('checkbox');
darkmode.addEventListener('click',function(){
    darkmode.classList.toggle('active');
    content.classList.toggle('night');
})

