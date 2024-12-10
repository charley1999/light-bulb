var swit = document.getElementById('lightSwitch');
var container = document.getElementById('container');
swit.onclick = function(){
    var color = container.style.backgroundColor;
        if(color === 'white'){
            container.style.backgroundColor = 'black';
        }else{
            container.style.backgroundColor = 'white';
        }
};