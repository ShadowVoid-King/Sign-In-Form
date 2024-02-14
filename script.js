var emailValue;
var atPosition;
var lastAtPosition;
var dotPosition;
var redMesgVisibility;

// * zero variable
function zeroVariable() {
    atPosition = null;
    lastAtPosition = null;
    dotPosition = null;
    document.getElementById('redMesg').innerHTML = "";
    document.getElementById('redMesg').style.visibility = "hidden";
}

// * email error Mesg
function emailAlarm() {
    emailValue = document.getElementById("emailChecker").value;
    emailValue = emailValue.trim();
    redMesgVisibility = document.getElementById('redMesg').style.visibility = "visible";
    if (emailValue != null && emailValue != "") {
        // * validation        
        atPosition = emailValue.indexOf("@"); // 2
        lastAtPosition = emailValue.lastIndexOf("@"); // 2
        dotPosition = emailValue.indexOf("."); // 6
        
        if (atPosition == -1) {
            document.getElementById("redMesg").innerHTML +=
                `Email doesn\'t has "@"<br>`;
            redMesgVisibility;
        }
        if (atPosition != lastAtPosition) {
            document.getElementById("redMesg").innerHTML +=
                `Email has more than one "@"<br>`;
            redMesgVisibility;
        }
        if (atPosition < 2 && atPosition != -1) {
            document.getElementById("redMesg").innerHTML +=
                `Email user Name Letters less than two<br>`;
                redMesgVisibility;
        }
        if (dotPosition == -1) {
            document.getElementById("redMesg").innerHTML +=
                `Email doesn't has "." after Email Company<br>`;
            redMesgVisibility;
        }
        // * 4 because it's index so we need to add 1 to three to check there are 3 characters
        if (dotPosition - atPosition < 4 && dotPosition != -1) {
            document.getElementById("redMesg").innerHTML +=
                `Email Company Name Letters less than three<br>`;
            redMesgVisibility;
        }
        if (emailValue.length - dotPosition < 4 && dotPosition != -1) {
            // result is 4
            document.getElementById("redMesg").innerHTML +=
                `Characters of mail extension less than three<br>`;
                redMesgVisibility;
        }
        setTimeout(function() {
            document.getElementById("redMesg").style.visibility = "hidden";
        }, 5000);
        // !else
    } else{
        emailValue = document.getElementById("emailChecker").value;
        emailValue = emailValue.trim();        
        zeroVariable()
    }
}

/*
add here power of password
*/
// var passChecker = toString(document.getElementById('passChecker'));
// function passAlarm() {
// }

// TODO animation stuff will be add :D get ready
// TODO don't forget to add mesg of error and animation
/*
events in input :-
    1. (unblur) is best one
    2. (onchange) is like one but need more search on it
    3. (oninput) can handle it to
*/
