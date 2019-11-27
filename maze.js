start=document.getElementById("start")
end=document.getElementById("end")
stat=document.getElementById("status")
bound=document.getElementsByClassName("boundary")

start.addEventListener("click",gamestart)


function gamestart(){
count=10;
tid=setInterval(function(){
--count
stat.innerHTML=count;
if(count===0){
    bound1();
}
},1000)
//stat.innerHTML="START PALYING";
stat.style.backgroundColor="pink"
   
for(let i=0;i<bound.length;i++){
 bound[i].addEventListener("mouseover",bound1)

    
   bound[i]= bound[i].classList.remove("youlose")

function bound1(){
stat.innerHTML="sorry try again";

  for(let i=0;i<bound.length;i++){
         bound[i]=bound[i].classList.add("youlose")
         
        }
clearInterval(tid)
      }
end.addEventListener("click",endgame)
  function endgame(){
if(!bound[0].classList.contains("youlose")){
       
        stat.innerHTML="congrats"
        stat.style.background="yellow"
location.reload();

     
}
}
}
}
