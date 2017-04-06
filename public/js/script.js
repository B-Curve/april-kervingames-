var menu = document.getElementById('menu');
var isDropped = false;

menu.addEventListener('click', function(){
  if(!isDropped){
    isDropped = true;
    console.log(isDropped);
  }else{
    isDropped = false;
    console.log(isDropped);
  }
});

alert('works');
