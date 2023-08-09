function conprint(){
    console.log("Fetching")
    let nameField = document.getElementById("username").value;
    let emailField = document.getElementById("useremail").value;
    let contactField = document.getElementById("userphone").value;
    let addressField = document.getElementById("useraddress").value;
        if (addressField !== null) { var elementValue = addressField.value; console.log(elementValue)} 
    let dob = document.getElementById("dob").value;
    let qualifyField = document.getElementById("userqualificatiion").value;
    let instituteField = document.getElementById("userinstitute").value;
    let specialField = document.getElementById("userspecial").value;
        if (specialField !== null) { var elementValue = specialField.value; console.log(elementValue)}
    let yearsField = document.getElementById("expyear");
        if (yearsField !== null) { var elementValue = yearsField.value; console.log(elementValue)   } 
    let companyField = document.getElementById("expcompany");
        if (companyField !== null) { var elementValue = companyField.value; console.log(elementValue)  }
    let titleField = document.getElementById("exptitle");
        if (titleField !== null) { var elementValue = titleField.value; console.log(elementValue) }
    // document.getElementById("username").innerHTML = nameField;
    // document.getElementById("useremail").innerHTML = emailField;
    // document.getElementById("userphone").innerHTML = contactField;
    // document.getElementById("useraddress").innerHTML = addressField;
    // document.getElementById("dob").innerHTML = dob;
    // document.getElementById("userqualificatiion").innerHTML = qualifyField;
    // document.getElementById("userinstitute").innerHTML = instituteField;
    // document.getElementById("userspecial").innerHTML = specialField;
    // document.getElementById("expyear").innerHTML = yearsField;
    // document.getElementById("expcompany").innerHTML = companyField;
    // document.getElementById("exptitle").innerHTML = titleField;

    console.log(nameField)
    console.log(emailField)
    console.log(contactField)
    console.log(dob)
    console.log(qualifyField)
    console.log(instituteField)
    console.log("Fetched") 
}