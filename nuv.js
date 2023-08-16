// function generateCV(){
//     let nameField = document.getElementById("username").value;
//     let emailField = document.getElementById("useremail").value;
//     let contactField = document.getElementById("userphone").value;
//     let addressField = document.getElementById("useraddress").value;
//     if (addressField !== null) { var elementValue = addressField.value; console.log(elementValue)} 
    
//     let userdob = document.getElementById("dob").value;
//     let qualifyField = document.getElementById("userqualificatiion").value;
//     let instituteField = document.getElementById("userinstitute").value;
//     let specialField = document.getElementById("userspecial").value;
//         if (specialField !== null) { var elementValue = specialField.value; console.log(elementValue)}
//     let yearsField = document.getElementById("expyear");
//         if (yearsField !== null) { var elementValue = yearsField.value; console.log(elementValue)   } 
//     let companyField = document.getElementById("expcompany");
//         if (companyField !== null) { var elementValue = companyField.value; console.log(elementValue)  }
//     let titleField = document.getElementById("exptitle");
//         if (titleField !== null) { var elementValue = titleField.value; console.log(elementValue) }
    
//     let linkedField1 = document.getElementById("linkedField").value;
//     let fbField1 = document.getElementById("fbField").value;

    
//     document.getElementById("1username").innerHTML = nameField;
//     document.getElementById("1useremail").innerHTML = emailField;
//     document.getElementById("1userphone").innerHTML = contactField;
//     document.getElementById("1useraddress").innerHTML = addressField;
//     document.getElementById("1userdob").innerHTML = userdob;
//     document.getElementById("1userqualificatiion").innerHTML = qualifyField;
//     document.getElementById("1userinstitute").innerHTML = instituteField;
//     document.getElementById("1userspecial").innerHTML = specialField;
//     document.getElementById("1expyear").innerHTML = yearsField;
//     document.getElementById("1expcompany").innerHTML = companyField;
//     document.getElementById("1exptitle").innerHTML = titleField;
//     document.getElementById("fbT").innerHTML = fbField1;
//     document.getElementById("linkedT").innerHTML = linkedField1;

//     document.getElementById('cv-form').style.display ='none'
//     document.getElementById('cv-template').style.display ='block'
   
// }
// function printCV() {
//     // Hide the CV form to prevent it from showing in the print preview
//     document.getElementById('cv-form').style.display = 'none';

//     // Show the CV template to be printed
//     document.getElementById('cv-template').style.display = 'block';
//     // document.getElementById('navbar').style.display = 'none';


//     // Wait for a short delay to ensure the template is fully rendered
//     setTimeout(function () {
//         // Trigger the print functionality
//         window.print();

//         // Show the CV form again after printing is done
//         document.getElementById('cv-form').style.display = 'block';
//         // document.getElementById('navbar').style.display = 'block';


//         // Hide the CV template again
//         document.getElementById('cv-template').style.display = 'none';
//     }, 500); // Adjust the delay duration as needed
//     // Attach the printCV() function to the window.onload event
// window.onload = function() {
//     const printButton = document.getElementById('generateBtn');
//     printButton.addEventListener('click', printCV);
// };
// }






document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateBtn');
    const printButton = document.getElementById('printBtn');
    
    generateButton.addEventListener('click', generateCV);
    printButton.addEventListener('click', printCV);
});

function generateCV() {
    const nameField = document.getElementById('username').value;
    const emailField = document.getElementById('useremail').value;
    const contactField = document.getElementById('userphone').value;
    const addressField = document.getElementById('useraddress');
    const ObjField = document.getElementById('ObjField');
    const userdob = document.getElementById('dob').value;
    const qualifyField = document.getElementById('userqualificatiion').value;
    const specialField = document.getElementById('userspecial');
    const ExpField = document.getElementById('exp').value;
    const linkedField1 = document.getElementById('linkedField').value;
    const fbField1 = document.getElementById('fbField').value;

    document.getElementById('1username').textContent = nameField;
    document.getElementById('2username').textContent = nameField;
    document.getElementById('1useremail').textContent = emailField;
    document.getElementById('1userphone').textContent = contactField;
    document.getElementById('obj').textContent = ObjField;
    document.getElementById('1useraddress').textContent = addressField ? addressField.value : '';
    document.getElementById('1userexp').textContent = ExpField;
    document.getElementById('1qualificatiion').textContent = qualifyField;
    document.getElementById('fbT').textContent = fbField1;
    document.getElementById('linkedT').textContent = linkedField1;
    let file = document.getElementById("imgField").files[0];
    if (file) {

        let reader = new FileReader()

        reader.readAsDataURL(file)

        console.log(reader.result);

        reader.onloadend = function(){
            document.getElementById("imgTemplate").src = reader.result

}
}

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printCV() {
    const cvForm = document.getElementById('cv-form');
    const cvTemplate = document.getElementById('cv-template');

    cvForm.style.display = 'none';
    cvTemplate.style.display = 'block';

    setTimeout(function () {
        window.print();

        cvForm.style.display = 'block';
        cvTemplate.style.display = 'none';
    }, 500);
}
