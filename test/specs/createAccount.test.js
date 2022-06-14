const { expect } = require("chai");
const createAccountPage = require("../../pageObjects/createAccount.page");
const globalPage = require("../../pageObjects/global.page");
const signinPage = require("../../pageObjects/signin.page");
const splashPage = require("../../pageObjects/splash.page")

describe('Create account tests',()=>{
    
    beforeEach( () =>{
        driver.pause(3000);
    });

    it.skip('Sign-in link should navigate to the sign-in screen.',()=>{
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        signinPage.getLinkCreateAnAccount.click();
        driver.pause(3000);
        //createAccountPage.getLinkSignIn.click();
        //driver.pause(3000);
        // let signInLabelText = signinPage.getSignInLabel.getText();
        // expect(signInLabelText).equal('Sign in');
    });

    it('User should be able to create a account successfully.',()=>{
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        signinPage.getLinkCreateAnAccount.click();
        driver.pause(3000);

        createAccountPage.getFirstNameField.addValue('shariq');
        createAccountPage.getLastNameField.addValue('naeem');
        createAccountPage.getEmailField.addValue('shariqtest@yopmail.com');
        createAccountPage.getPasswordField.addValue('Mobile@11');
        createAccountPage.getRetypePasswordField.addValue('Mobile@11');
        //Select Birthdate
        createAccountPage.getTermsConditionsCheckbox.click();
        expect(createAccountPage.getTermsConditionsCheckbox.getAttribute('checked')).equals('true');

        while(!createAccountPage.getJoinNowText.isDisplayed()){
            globalPage.scrollUp();
            driver.pause(2000);
        }

        expect(createAccountPage.getJoinNowText.getText()).equal("Join Now")
        createAccountPage.getJoinNowBtn.click();
        driver.pause(5000)
        
    });

    it.skip('Validation of all the errors',()=>{
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        signinPage.getLinkCreateAnAccount.click();
        driver.pause(3000);

        //createAccountPage.getFirstNameField.addValue('s');
        expect(createAccountPage.getErrorAlert.getText()).equal("Please correct the errors.");
        expect(createAccountPage.getErrorFirstName.getText()).equal("Enter first name");


        //createAccountPage.getLastNameField.addValue('s');
        expect(createAccountPage.getErrorLastName.getText()).equal("Enter last name");

        //createAccountPage.getEmailField.addValue('test');
        expect(createAccountPage.getErrorEmail.getText()).equal("Enter valid email");


        //createAccountPage.getPasswordField.addValue('s');
        expect(createAccountPage.getErrorPassword.getText()).equal("Enter a valid password");
        expect(createAccountPage.getErrorMoreCharacters.getText()).equal("Include 8 or more characters");
        expect(createAccountPage.getErrorSpecialCharacter.getText()).equal("Include at least 1 special character");
        expect(createAccountPage.getErrorPasswordMatch.getText()).equal("Passwords provided do not match");


        //createAccountPage.getRetypePasswordField.addValue('');
        //Select Birthdate
        // createAccountPage.getTermsConditionsCheckbox.click();
        // expect(createAccountPage.getTermsConditionsCheckbox.getAttribute('checked')).equals('true');

        // while(!createAccountPage.getJoinNowText.isDisplayed()){
        //     globalPage.scrollUp();
        //     driver.pause(2000);
        // }

        // expect(createAccountPage.getJoinNowText.getText()).equal("Join Now")
        // createAccountPage.getJoinNowBtn.click();
        // driver.pause(5000)
    });


    afterEach(()=>{
        driver.reset();
    });
})