const { expect } = require('chai');
const globalPage = require('../../pageObjects/global.page');
const homePage = require('../../pageObjects/home.page');
const signinPage = require('../../pageObjects/signin.page');
const splashPage = require('../../pageObjects/splash.page');

describe('Home Screen Tests', () => {

    beforeEach(() => {
        driver.pause(3000);
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

    it('Verify that search field should be displayed on the home screen', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();
        driver.pause(3000)
        expect(homePage.getSearchField.isDisplayed()).equal(true);
        expect(homePage.getSearchFieldPlaceholderText.getText()).equal('Search for gear & clothing');

    });

    it('Verift that popular search by a text should be displayed', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();
        driver.pause(5000);
        homePage.getSearchFieldPlaceholderText.click();
        homePage.assertPopularSearches();

    });

    it.only('Verift that search suggestions should be displayed', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();
        driver.pause(5000);
        homePage.getSearchFieldPlaceholderText.click();
        homePage.getSearchFieldPlaceholderText.addValue('jacket');
        homePage.assertSearchCategories();
        homePage.assertSearchSuggestions();

    });


    it('Verify that favorite brands should be displayed on the home page', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();

        driver.pause(5000);
        //globalPage.scrollUp(); 
        while (!homePage.getFavoriteBrandsText.isDisplayed()) {
            globalPage.scrollUp();
            driver.pause(2000);
        }
        driver.pause(5000);
        let favoriteBrandsTxt = homePage.getFavoriteBrandsText.getText();
        expect(favoriteBrandsTxt).equal('Favorite Brands');
    });

    it('Verify that best sellers section should be displayed on the home page', () => {
        let shopNowBtnTxt = splashPage.getShopNowBtnText.getText();
        expect(shopNowBtnTxt).equal('Shop Now');
        splashPage.getShopNowBtn.click();

        driver.pause(5000);
        globalPage.scrollUp();
        while (!homePage.getBestSellerSection.isDisplayed()) {
            globalPage.scrollUp();
            driver.pause(2000);
        }
        driver.pause(5000);
        let bestSellerTxt = homePage.getBestSellerText.getText();
        expect(bestSellerTxt).equal('Best Sellers');
    });

    afterEach(() => {
        driver.reset();
    });
})