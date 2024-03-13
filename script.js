let menu=document.querySelector("#menu");
let menuItem=document.querySelectorAll("a");
let check=0;

    menu.addEventListener('click', ()=>{
        
        if(check==0)
        {
            menuItem.forEach((item)=>{
            
                item.style.display="block";
               check=1;
            })
        }
        else{
            menuItem.forEach((item)=>{
                item.style.display="none";
                check=0;
            })
        }
          
            
            
            
    
    
})





