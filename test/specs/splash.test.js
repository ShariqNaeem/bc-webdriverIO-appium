const { expect } = require('chai');
const homePage = require('../../pageObjects/home.page');
const signinPage = require('../../pageObjects/signin.page');
const splashPage = require('../../pageObjects/splash.page');
const globalPage = require('../../pageObjects/global.page');

describe('Splash Screen Tests', ()=>{

    beforeEach(()=>{
        driver.pause(3000);
    });

    it('Verify that opening text should be present', () => {
        let paraText = splashPage.getOpeningParaText.getText();
        console.log(paraText);
        expect(paraText.replace('\n','')).equal('Go farther with the best outdoor gear and apparel Get free expert advice from our Gearheads');
    });

    it('Verify that shop now button should navigate to the home page', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();

        driver.pause(5000);
        globalPage.scrollUp();
        driver.pause(5000);

        let shopByCategoryTxt = homePage.getShopByCategoryText.getText();
        expect(shopByCategoryTxt).equal('Shop by Category');
    });

    it.skip('Verify that sign-in button should navigate to the sign-in page', () => {
        let shopNowBtnTxt = splashPage.getSignInBtnText.getText();
        expect(shopNowBtnTxt).equal('Sign In');
        splashPage.getSignInBtn.click();
        driver.pause(5000);
        let signInLabelText = signinPage.getSignInLabel.getText();
        expect(signInLabelText).equal('Sign in')
    });

    afterEach(()=>{
        driver.reset();
    });
})