function addNewweField() {
    let newtext = document.createElement("textarea");
    newtext.classList.add("form-control");
    newtext.classList.add("weField");
    newtext.setAttribute("rows", 3);
    newtext.setAttribute("placeholder", "Enter here");
  
    let weOB = document.querySelector(".weField");
    let weaddbuttonOB = document.querySelector(".weaddbutton");
  
    weOB.parentNode.insertBefore(newtext, weaddbuttonOB);
}

function addNewaqField() {
    let newtext = document.createElement("textarea");
    newtext.classList.add("form-control");
    newtext.classList.add("aqField");
    newtext.setAttribute("rows", 3);
    newtext.setAttribute("placeholder", "Enter here");
  
    let aqOB = document.querySelector(".aqField");
    let aqaddbuttonOB = document.querySelector(".aqaddbutton");
  
    aqOB.parentNode.insertBefore(newtext, aqaddbuttonOB);
}


function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let contactField = document.getElementById("phoneField").value;
    let addressField = document.getElementById("addressField").value;
    let IDField = document.getElementById("IDField").value;
    let fbField1 = document.getElementById("fbField").value;
    let instaField1 = document.getElementById("instaField").value;
    let linkedField1 = document.getElementById("linkedField").value;
    let objectiveField1 = document.getElementById("objField").value;
    
    document.getElementById("namet1").innerHTML = nameField;
    document.getElementById("namet2").innerHTML = nameField;
    document.getElementById("contactt").innerHTML = contactField;
    document.getElementById("addresst").innerHTML = addressField;
    document.getElementById("emailID").innerHTML = IDField;
    document.getElementById("fbT").innerHTML = fbField1;
    document.getElementById("instaT").innerHTML = instaField1;
    document.getElementById("linkedT").innerHTML = linkedField1;
    document.getElementById("ojt").innerHTML = objectiveField1;
    
    {

let WES =document.getElementsByClassName("weField");

let str ="" 

for(let e of WES){
    
    str = str +`<li> ${e.value} </li>`;

}

document.getElementById("we").innerHTML = str;

}
{
    let AQS =document.getElementsByClassName("aqField");

let str ="";
for(let e of AQS){

    str = str +`<li> ${e.value} </li>`;
    
}
document.getElementById("aqt").innerHTML = str;
}  




let file = document.getElementById("imgField").files[0];
if (file) {

let reader = new FileReader()

reader.readAsDataURL(file)

console.log(reader.result);

reader.onloadend = function(){
    document.getElementById("imgTemplate").src = reader.result

}
}


document.getElementById('cv-form').style.display ='none'
document.getElementById('cv-template').style.display ='block'


}

function printCV() {
    // Hide the CV form to prevent it from showing in the print preview
    document.getElementById('cv-form').style.display = 'none';

    // Show the CV template to be printed
    document.getElementById('cv-template').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';


    // Wait for a short delay to ensure the template is fully rendered
    setTimeout(function () {
        // Trigger the print functionality
        window.print();

        // Show the CV form again after printing is done
        document.getElementById('cv-form').style.display = 'block';
        document.getElementById('navbar').style.display = 'block';


        // Hide the CV template again
        document.getElementById('cv-template').style.display = 'none';
    }, 500); // Adjust the delay duration as needed
    // Attach the printCV() function to the window.onload event
window.onload = function() {
    const printButton = document.getElementById('generateBtn');
    printButton.addEventListener('click', printCV);
};
}


