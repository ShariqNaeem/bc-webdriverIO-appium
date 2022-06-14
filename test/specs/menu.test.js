const { expect } = require('chai');
const globalPage = require('../../pageObjects/global.page');
const homePage = require('../../pageObjects/home.page');
const menuPage = require('../../pageObjects/menu.page');
const splashPage = require('../../pageObjects/splash.page');

describe('Home Screen Tests', () => {

    beforeEach(() => {
        driver.pause(3000);
    });

    it('Verify that MENU page', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();

        driver.pause(5000);
        globalPage.getMenuTab.click();
        driver.pause(5000);
        menuPage.setCategoriesName();
        driver.pause(5000);

        // let shopByCategoryTxt = homePage.getShopByCategoryText.getText();
        // expect(shopByCategoryTxt).equal('Shop by Category');
    });

    afterEach(() => {
        driver.reset();
    });
})