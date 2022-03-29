//MUST HAVE - CREATE A TEMPLATE TAG
var template_fact = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_fact.innerHTML = `
<style>
#fact_brdr{
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: space-evenly;
    height: fit-content;
    width: 50%;
    min-width:250px;
    background-color: rgba(255, 255, 255, 0.384);
    backdrop-filter: blur(10px);
    border-radius: 10px;
}

#fact{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    height: 50%;
    width: 75%;
    color: #253527;
    display: flex;s
    align-items:  center;
    justify-content: center;
    font-size: 2.25rem;
    text-align: center;
    margin: 7% 2% 7%;
}
</style>

<div id="fact_brdr">
    <div id = "fact">
        This is supposed to be a fact!
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheFact extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_fact.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("fact")){
            this.shadowRoot.querySelector("#fact").innerHTML = this.getAttribute("fact");
        }
    
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-fact", TheFact)