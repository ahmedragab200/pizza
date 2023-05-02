var header=document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY > 0)
})


const sidemenu = document.getElementById('sidemenu')




document.querySelector('.fa-bars').addEventListener('click', function(){
    sidemenu.classList.toggle('active')
})



const menu = document.querySelector('.header');

window.onscroll = ()=>{
    sidemenu.classList.remove('active')
}




















let loadMoreBtn =document.querySelector('.load-more');
  let currentItem = 3;

  loadMoreBtn.onclick = ()=>{
      let boxs = [...document.querySelectorAll('.mnue .container .box')];
      for(var i = currentItem; i < currentItem +3; i++){
           boxs[i].style.display = 'inline-block';

      };
      currentItem += 3;
      if(currentItem >= boxs.length){
          loadMoreBtn.style.display = 'none';
      }
  }
