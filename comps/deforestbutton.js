//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<style> 
.brdr {
    height: 20%;
    width 20%;
}
.buttonshort {
    height: 136px;
    width: 545px;
    border-radius: 30pt;
    border: none;
    background-color:#4E724A;
}

a:hover {
    opacity: 0.9;
    
}

.buttoncontent {
    max-width: 90%;
    height: auto;
}


@media screen and (max-width:800px) {
    .buttonshort {
        width: 300px;
        height: 90px
    }
    .buttoncontent {
        max-width: 90%;
        height: auto;
    }

}

</style>

<div class = "brdr">
<a class="hreflink" href="https://treecanada.ca" target="_blank">
<button class="buttonshort">
<img class="buttoncontent" src="utils/labels/DonateTree_Label.svg"/>
</button>
</a>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("img")){
            this.shadowRoot.querySelector(".buttoncontent").src = this.getAttribute("img");
        }

        if (this.getAttribute("href")){
            this.shadowRoot.querySelector(".hreflink").href = this.getAttribute("href");
        }
       
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)