//MUST HAVE - CREATE A TEMPLATE TAG
var template_totop = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_totop.innerHTML = `
<style>
  #click {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    position: fixed; 
    bottom: 20px; 
    right: 30px; 
    z-index: 99; 
    border: none; 
    outline: none; 
    background-color:#295E61; 
    color: white; 
    cursor: pointer; 
    padding: 15px; 
    border-radius: 10px; 
    font-size: 18px; 
  }
  #click:hover {
    background-color: #194244;
    transition: 1s;
  }
</style>
<div id = "click"> 
    top
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ToTop extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_totop.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#click").onclick = () => this.scrollTop();
        // window.onscroll =() => this.scrollFunction();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    letsGoUp () {
        console.log("test");
        // document.querySelector("#top").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        document.querySelector(target = 0).scrollTo({top: 0, behavior: 'smooth'});
        // document.documentElement.scrollTop = 0; 
    }

     scrollTop () {
      console.log("is it working")
      // document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });    
      document.scrollTo({top: 0, behavior: 'smooth'});
}
    // scrollFunction() {
    //     if (e.target.scrollTop > 200 || document.documentElement.scrollTop > 2000) {
    //       this.shadowRoot.querySelector("#click").style.display = "block";
    //     } else {
    //         this.shadowRoot.querySelector("#click").style.display = "none";
    //     }
    //   }
}


//MUST HAVE - define the tag for the custom elements
customElements.define("to-top", ToTop)