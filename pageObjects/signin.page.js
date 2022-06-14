class SignInPage{
    get getSignInLabel(){ return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]');}
    get getEmailInputField(){ return $('//android.widget.EditText[@index=5]');}
    get getPasswordInputField(){ return $('//android.widget.EditText[@index=8]');}
    get getRememberMeCheckbox(){ return $('//android.widget.CheckBox[@index=10]');}
    get getSignInBtn(){ return $('//android.view.ViewGroup[@index=12]'); }
    get getLinkCreateAnAccount(){ return $('//android.widget.TextView[@text="Create an account"]'); }
    get getWrongEmailError(){ return $('//android.widget.TextView[@text="Enter valid email"]'); }
    get getErrorAlert(){ return $('//android.widget.TextView[@text="Please correct the errors."]'); }

}
module.exports = new SignInPage();