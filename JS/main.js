// IIFE

(function(){
    // code starts here
    
    document.getElementById("myHeading").innerHTML="Suraiya";
    document.querySelector("nav ul li").setAttribute("class","currentPage")
    // silly example:)
    // document.querySelector("nav ul li a").setAttribute("href","http://www.google.co.uk");

    // Events
    // document.getElementById("myTestEvent").addEventListener("click",function(){
    // console.info("hi");
        document.getElementById("myTestEvent").addEventListener("click",myFunction)
        function myFunction(ev) 
        {
            console.info("hi");
        }

        document.querySelector(".red").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class', "redBack");
        })

        document.querySelector(".green").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class', "greenBack");
        })
    
        document.querySelector(".blue").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class',"blueBack");
        })
        document.querySelector(".reset").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class',"whiteBack");
        })
        
        
        
    
    
    
    
    
    
        // code ends here
})();




