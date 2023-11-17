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

        // document.querySelector(".red").addEventListener('click', function(ev){
        // document.querySelector('body').setAttribute('class', "redBack");
        // })

        // document.querySelector(".green").addEventListener('click', function(ev){
        // document.querySelector('body').setAttribute('class', "greenBack");
        // })
    
        // document.querySelector(".blue").addEventListener('click', function(ev){
        // document.querySelector('body').setAttribute('class',"blueBack");
        // })
        // document.querySelector(".reset").addEventListener('click', function(ev){
        // document.querySelector('body').removeAttribute('class');
        // })
        
    
    let colourButtons = document.querySelectorAll(".colPicker")
    console.dir(colourButtons)
        
    for(let i=0; i < colourButtons.length; i++){
    colourButtons[i].addEventListener("click", chgColour)
    }    
    function chgColour(ev){
    console.dir(ev.target.classList)
    }
    let colourPicked = ev.target.classList[0] + "Back";
    bodyElement.setAttribute("class", colourPicked);

// image rotator
let imageAr = [
    'images/view1.jpg', 
    'images/view2.jpg', 
    'images/view3.jpg', 
    'images/view4.jpg', 
    'images/view5.jpg', 
    'images/view6.jpg'
    ];

    let imageCount = 0;
    setInterval(function(){
        document.getElementById("myImages")
        .setAttribute("src",imageAr[imageCount]);
        imageCount++;
    }, 1000);

    
    
    
        // code ends here
})();




