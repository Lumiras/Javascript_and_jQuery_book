var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;

elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint(){
    var package = this.options[this.selectedIndex].value;
    if(package == 'monthly'){
        elPackageHint.innerHTML = 'Save $10 by buying the yearly package!';
    } else {
        elPackageHint.innerHTML = 'Great choice, you know how to save some cash!';
    }
}

function checkTerms(event) {
    if(!elTerms.checked){ //if terms checkbox is NOT checked
        elTermsHint.innerHTML = 'Please agree to the terms and conditions';
        event.preventDefault();
    }
}

//create event listeners
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
