
let Items = {
   
   Fruits:["Grapes","Banana","Apple","Strawbery"],
   liquid:["Water","Ice"],
   holder:["Cone","Cup","Stick"],
   toppings:["Chocolate","Nuts"]
   
}

let time = new Promise((resolve,reject)=>{
   
   let isShopOpen = true;
      
      if(isShopOpen){
         
         resolve()
         
      }
      
      else{
         
         reject(document.write("shop is closed"))
         
      }
      
      
   })
   

Promise.all([time]).then(()=>{
      
      setTimeout(()=>{
         
         document.write(`${Items.Fruits[2]} was Selected`);
         
         document.write("<br>")
         
      },2000)
      
      setTimeout(()=>{
         
         document.write("Production Started");
         
            document.write("<br>")
         
      },2000)
      
      setTimeout(()=>{
         
         document.write("Fruits has been chopped");
         
            document.write("<br>")
         
      },3000)
      
      setTimeout(()=>{
         
         document.write(`${Items.liquid[1]} added`);
         
            document.write("<br>")
         
      },4000)
      
      setTimeout(()=>{
         
         document.write("Machine Started");
         
            document.write("<br>")
         
      },5000)
      
      setTimeout(()=>{
         
         document.write(`Icecream placed on ${Items.holder[1]}`);
         
            document.write("<br>")
         
      },6000)
         
      setTimeout(()=>{
         
         document.write(`${Items.toppings[1]} as Toppings`);
         
            document.write("<br>")
         
      },7000)
         
      setTimeout(()=>{
         
         document.write("Serve Ice-cream");
         
         
         
      },9000)
      
}) 


   
   .catch(()=>{
      
      setTimeout(()=>{
         
         document.write("Customer left");
      
         
      },2000)
   })