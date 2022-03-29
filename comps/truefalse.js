//MUST HAVE - CREATE A TEMPLATE TAG
var template_trueFalse = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_trueFalse.innerHTML = `
<style>

#qstn_brdr{
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

#qstn{
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
#choices{
    
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 60%;
        margin-bottom: 2%;
}
.choice{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10%;
        background-color: #295E61;
        color: white;
        padding: 5% 10%;
        font-size: 1.5rem;
}

.choice:hover{
    background-color: #1E9094;
}
#answer{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
        color: #567550;
        font-size: 1.5rem;
        margin-bottom: 5%;
}
#reset{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #567550;
    font-size: 1rem;
    margin-bottom: 5%;
}

</style>


<div id="qstn_brdr">
    <div id = "qstn"> How do trees access the internet </div>
    <div id = "choices">
        <div id="true" class = "choice"> True </div>
        <div id="false" class = "choice">False</div>
    </div>
    <div id = "answer">  </div>
    <div id = "reset">  </div>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TrueFalse extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        this.click = false;
        this.ariaSelected;
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_trueFalse.content.cloneNode(true)); //use the template to make a clone
    if (this.getAttribute("qstn")){
        this.shadowRoot.querySelector("#qstn").innerHTML = this.getAttribute("qstn");
    }
    this.shadowRoot.querySelector("#true").onclick = () => this.checkAnswer("true", this.getAttribute("answer"));
    this.shadowRoot.querySelector("#false").onclick = () => this.checkAnswer("false", this.getAttribute("answer"));
    this.shadowRoot.querySelector("#reset").onclick = () => this.reset();

}

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    checkAnswer(selector, answer){
        if (this.click === false ){
            if (selector === answer){
                    this.shadowRoot.querySelector("#answer").innerHTML = "That's correct! "; 
                    this.shadowRoot.querySelector("#"+selector).style.backgroundColor = "#567550";
                    this.shadowRoot.querySelector("#"+selector).style.color = "white";
                    this.click = true;

            } else {
                    this.shadowRoot.querySelector("#answer").innerHTML = "Sorry - That's incorrect!";
                    this.shadowRoot.querySelector("#"+selector).style.backgroundColor = "grey";
                    this.shadowRoot.querySelector("#"+selector).style.color = "white"; 
                    this.shadowRoot.querySelector("#reset").innerHTML = "Try again?";
                    this.selected = selector;
                    this.click = true;
            } 
        }
            
    }

    reset(){
        this.shadowRoot.querySelector("#answer").innerHTML = "";
        this.click = false;
        this.shadowRoot.querySelector("#"+this.selected).style.backgroundColor = "#295E61";
        this.shadowRoot.querySelector("#reset").innerHTML = "";
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("true-false", TrueFalse)