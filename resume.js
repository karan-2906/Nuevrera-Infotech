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
