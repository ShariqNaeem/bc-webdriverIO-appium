class CreateAccountPage{
    get getCreateAccountLabel(){ return $('//android.widget.TextView[@text="Create Your Account"]'); }
    get getLinkSignIn(){ return $('//android.widget.TextView[@text="Sign in"]'); }
    get getFirstNameField(){ return $('//android.widget.EditText[@index="4"]'); }
    get getLastNameField(){ return $('//android.widget.EditText[@index="5"]'); }
    get getEmailField(){ return $('//android.widget.EditText[@index="8"]'); }
    get getPasswordField(){ return $('//android.widget.EditText[@index="11"]'); }
    get getRetypePasswordField(){ return $('//android.widget.EditText[@index="20"]'); }//19
    get getTermsConditionsCheckbox(){ return $('//android.widget.CheckBox[@index="26"]'); }
    get getJoinNowBtn(){ return $('//android.view.ViewGroup[@index="0"]'); }
    get getJoinNowText(){ return $('//android.widget.TextView[@text="Join Now"]'); }

    
    get getErrorAlert(){ return $('//android.widget.TextView[@text="Please correct the errors."]'); }
    get getErrorFirstName(){ return $('//android.widget.TextView[@text="Enter first name"]'); }
    get getErrorLastName(){ return $('//android.widget.TextView[@text="Enter last name"]'); }
    get getErrorEmail(){ return $('//android.widget.TextView[@text="Enter valid email"]'); }
    get getErrorPassword(){ return $('//android.widget.TextView[@text="Enter a valid password"]'); }
    get getErrorMoreCharacters(){ return $('//android.widget.TextView[@text="Include 8 or more characters"]'); }
    get getErrorSpecialCharacter(){ return $('//android.widget.TextView[@text="Include at least 1 special character"]'); }
    get getErrorPasswordMatch(){ return $('//android.widget.TextView[@text="Passwords provided do not match"]'); }







}
module.exports = new CreateAccountPage();