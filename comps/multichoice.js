//MUST HAVE - CREATE A TEMPLATE TAG
var template_multiChoice = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_multiChoice.innerHTML = `
<style>

#qstn_brdr{
        display: flex;
        flex-direction: column;
        align-items:  center;
        justify-content: space-evenly;
        height: fit-content;
        width: 100%;
        min-width:250px;
        background-color: rgba(255, 255, 255, 0.384);
        backdrop-filter: blur(10px);
        border-radius: 10px;
}

#qstn{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        height: 50%;
        width: 75%;
        color: #253527;
        display: flex;
        align-items:  center;
        justify-content: center;
        font-size: 2.25rem;
        text-align: center;
        margin: 7% 2% 7%;
}
#choices{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-between;
        width: 66%;
}
.choice{
    font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 10px ;
        background-color: #295E61  ;
        color: white;
        padding: 5% 10%;
        font-size: 1.25rem;
        margin-bottom:10%;
        width:25%;
}
.choice:hover{
    background-color: #1E9094;

}

#answer{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #253527;
    font-size: 1.5rem;
    margin-bottom: 5%;
}

#reset{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #253527;
    font-size: 1rem;
    margin-bottom: 5%;
}

</style>




<div id="qstn_brdr">
    <div id = "qstn"> How do trees access the internet </div>
    <div id = "choices">
        <div id="o1" class = "choice"> Option 1 </div>
        <div id="o2" class = "choice"> Option 2</div>
        <div id="o3" class = "choice"> Option 3 </div>
        <div id="o4" class = "choice"> Option 4</div>
    </div>
    <div id = "answer">  </div>
    <div id = "reset">  </div>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class MultiChoice extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        this.click = false;
        this.selected;
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_multiChoice.content.cloneNode(true)); //use the template to make a clone
    if (this.getAttribute("qstn")){
        this.shadowRoot.querySelector("#qstn").innerHTML = this.getAttribute("qstn");
    }
    if (this.getAttribute("o1")){
        this.shadowRoot.querySelector("#o1").innerHTML = this.getAttribute("o1");
    }
    if (this.getAttribute("o2")){
        this.shadowRoot.querySelector("#o2").innerHTML = this.getAttribute("o2");
    }
    if (this.getAttribute("o3")){
        this.shadowRoot.querySelector("#o3").innerHTML = this.getAttribute("o3");
    }
    if (this.getAttribute("o4")){
        this.shadowRoot.querySelector("#o4").innerHTML = this.getAttribute("o4");
    }

    this.shadowRoot.querySelector("#o1").onclick = () => this.checkAnswer("o1", this.getAttribute("answer"));
    this.shadowRoot.querySelector("#o2").onclick = () => this.checkAnswer("o2", this.getAttribute("answer"));
    this.shadowRoot.querySelector("#o3").onclick = () => this.checkAnswer("o3", this.getAttribute("answer"));
    this.shadowRoot.querySelector("#o4").onclick = () => this.checkAnswer("o4", this.getAttribute("answer"));
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
                    this.shadowRoot.querySelector("#reset").innerHTML = "Try again?";
                    this.shadowRoot.querySelector("#"+selector).style.backgroundColor = "grey";
                    this.shadowRoot.querySelector("#"+selector).style.color = "white"; 
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
customElements.define("multi-choice", MultiChoice)

