

document.querySelector(".parallax").onscroll = (e) => handleContScroll(e.target.scrollTop);
function handleContScroll(target = 0){
        console.log(target);
        if (target < 750){
                document.querySelector("#title").style.cssText = `animation: fadein 1.5s forwards;`;  
                document.querySelector(".birds").style.cssText = `animation: rightToLeft 7s infinite`;

        }
        if (target > 750) {
                document.querySelector("#title").style.cssText = `animation: fadeout 1.5s forwards;`;
                document.querySelector("#stumps").style.cssText = `animation: fadeout 1.5s forwards;`;
        }

        if (target > 5700){
                document.querySelector("#stumps").style.cssText = `animation: fadein 1.5s forwards;`;  
        }
        if(target > 9100){
                document.querySelector("#stumps").style.cssText = `animation: fadeout 1.5s forwards;`;
                document.querySelector("#factory").style.cssText = `animation: fadeout 1.5s forwards;`  
        }

        if(target > 15100){
                //factory 
                document.querySelector("#factory").style.cssText = `animation: fadein 1.5s forwards;`;
        }
        if(target > 18800){
                //factory fadeout
                document.querySelector("#factory").style.cssText = `animation: fadeout 1.5s forwards;`;
                document.querySelector("#city").style.cssText = `animation: fadeout 1.5s forwards;`;
        } 
        if(target > 22000){
                //city
                document.querySelector("#city").style.cssText = `animation: fadein 1.5s forwards;`;
        } 
        if(target > 27500){
                //city 
                document.querySelector("#city").style.cssText = `animation: fadeout 1.5s forwards;`;
               document.querySelector("#garbage").style.cssText = `animation: fadeout 1.5s forwards;`;
        }

         if (target > 31300){
                //garbage
                document.querySelector("#garbage").style.cssText = `animation: fadein 1.5s forwards;`;
        }
        
        if (target > 35000){
                //garbage
                document.querySelector("#garbage").style.cssText = `animation: fadeout 1.5s forwards;`;
                document.querySelector(".whale").style.cssText = `animation: rightToLeft 35s infinite`;
        }
        if (target > 35800){
                document.querySelector(".fish").style.cssText = `animation: leftToRight 12s ease-out 2s infinite`;
                document.querySelector(".seahorse").style.cssText = `animation: rightToLeft 25s infinite`;
        }

}

// document.querySelector("#click").onclick = () =>scrollTop();
function scrollTop () {
        // document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });    
        document.querySelector("#click").scrollTo({top: 0, behavior: 'smooth'});
}