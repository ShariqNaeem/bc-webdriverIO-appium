const { expect } = require("chai");
const createAccountPage = require("../../pageObjects/createAccount.page");
const signinPage = require("../../pageObjects/signin.page");
const splashPage = require("../../pageObjects/splash.page");

describe('Login screen tests', ()=>{

    beforeEach( () =>{
        driver.pause(3000);
    });

    it.skip('User should able to login in BC app',()=>{
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        signinPage.getEmailInputField.addValue('feb25user1@bc.com');
        signinPage.getPasswordInputField.addValue('Mobile@1')
        signinPage.getRememberMeCheckbox.click();
        expect(signinPage.getRememberMeCheckbox.getAttribute('checked')).equals('true');
        //signinPage.getSignInBtn.click();
    });

    it.skip('Create an account link should navigate to the account creation screen',()=>{
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        signinPage.getLinkCreateAnAccount.click();
        driver.pause(3000);
        let creatAccountLabelText = createAccountPage.getCreateAccountLabel.getText();
        expect(creatAccountLabelText).equal('Create Your Account')
    });

    it.skip('Validate the wrong email error',()=>{
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        signinPage.getEmailInputField.addValue('backcountry.com');
        signinPage.getPasswordInputField.addValue('Mobile@1')
        signinPage.getSignInBtn.click();
        console.log(signinPage.getWrongEmailError.getText());
        expect(signinPage.getWrongEmailError.getText()).equal('Enter valid email');
        expect(signinPage.getErrorAlert.getText()).equal('Please correct the errors.');
    })

    afterEach(()=>{
        driver.reset();
    });

})