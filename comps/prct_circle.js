//MUST HAVE - CREATE A TEMPLATE TAG
var template_circle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_circle.innerHTML = `
<style>
#prct_brdr{
    display: flex;
    align-items:  center;
    justify-content: space-evenly;
    height: fit-content;
    width: 80%;
    min-width:250px;
    background-color: rgba(255, 255, 255, 0.384);
    backdrop-filter: blur(10px);
    border-radius: 10px;
}

#text{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10%;
        color: #253527;
     
        font-size: 1.5rem;
}

img {
    height: 20%;
    width: 20%;
    padding: 5% 10%
}
</style>
<div id="prct_brdr">
 
    <img src="DCD-Team5/placeholder_svgs/15.svg" id="img">   
    <div id="text">
     This is supposed to be a fact linked with the percent sign. 
     <div>
  </div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class PrctCircle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_circle.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("text")){
            this.shadowRoot.querySelector("#text").innerHTML = this.getAttribute("text");
        }
        if (this.getAttribute("img")){
            this.shadowRoot.querySelector("#img").src = this.getAttribute("img");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("prct-circle", PrctCircle)