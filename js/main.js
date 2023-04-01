// our-works 
let lis = document.querySelectorAll(".our-work ul li")
console.log(lis)

lis.forEach((li)=>{
   li.addEventListener("click",(e)=>{
      lis.forEach((l)=>{
         l.classList.remove("active")
      })
      e.target.classList.add('active')
   })
})
