// Validates everything (everything returns here)
function validation(){
    var firstname = document.registration.fname;
    var lastname = document.registration.lname;
    var gender = document.registration.gend;
    var email = document.registration.mail;
    var tele = document.registration.phonenum;

    // Allows everything to be read
    if(checkfname(firstname)){
        if(checklname(lastname)){
            if(checkgender(gender)){
                if(checkemail(email)){
                    if(checkphone(tele)){
                    }
                }
            }
        }
    }
}

// Checks First Name for validation
function checkfname(firstname){
    var letters= /^[A-Za-z]+$/;
    if (firstname.value.length==0){
        alert('Please enter first name');
        firstname.focus();
        return false;
    }

    else if(firstname.value.match(letters)){
        return true;
    }

    else{
        alert('First name must have alphabet characters only');
        firstname.focus();
        return false;
    }
}

// Checks Last Name for validation
function checklname(lastname){
    var letters= /^[A-Za-z]+$/;
    if (lastname.value.length==0){
        alert('Please enter last name');
        lastname.focus();
        return false;
    }

    else if(lastname.value.match(letters)){
        return true;
    }

    else{
        alert('Last name must have alphabet characters only');
        lastname.focus();
        return false;
    }
}

// Checks Gender for validation
function checkgender(gender){
    if(gender.value=="Default"){
        alert('Select your gender');
        gender.focus();
        return false;
    }
    else{
        return true;
    }
}

// Checks Email for validation
function checkemail(email){
    var letnumcharac = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length==0){
        alert('Please enter your email');
        email.focus();
        return false;
    }

    else if(email.value.match(letnumcharac)){
        return true;
    }
}

// Checks Phone Number for validation
function checkphone(tele){
    var numbers = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (tele.value.length==0){
        alert('Please enter your phone number');
        tele.focus();
        return false;
    }

    else if(tele.value.length>10){
        alert('Please enter a valid phone number');
        tele.focus();
        return false;
    }

    else if(tele.value.match(numbers)){
        return true;
    }

    else{
        alert('Phone number cannot have letters')
        tele.focus();
        return false;
    }
}