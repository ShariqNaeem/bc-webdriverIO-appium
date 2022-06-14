const { expect } = require("chai");

class HomePage{
    get getShopByCategoryText(){ return $('//android.widget.TextView[@index="6"]');}
    get getFavoriteBrandsText(){ return $('//android.widget.TextView[@index="21"]');}
    get getBestSellerSection(){ return $('//android.view.ViewGroup[@index="23"]');}
    get getBestSellerText(){ return $('//android.widget.TextView[@index="0"]');}
    get getSearchField(){ return $('//android.view.ViewGroup[@index="0"]');}
    get getSearchFieldPlaceholderText(){ return $('//android.widget.EditText[@text="Search for gear & clothing"]')}

    get getPopularSearchLabel(){ return $('//android.widget.TextView[@text="Popular Searches"]')};
    get getPopularSearchElements(){ return $$('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'); }
    get getSearchSuggestionLabel(){ return $('//android.widget.TextView[@text="Suggestions"]')};
    get getSearchSuggestionsElements(){ return $$('//android.widget.TextView[@index=0]')}
    get getSearchCategoriesElements(){ return $$('//android.widget.TextView[@index=1]')}


    assertPopularSearches(){
        let arrayOfPopularSearch = ['Patagonia','Stoic','Yeti','Hestra'];
        driver.pause(3000);

        expect(this.getPopularSearchLabel.getText()).equal('Popular Searches');
        
        for (let index = 0; index < this.getPopularSearchElements.length; index++) {
            let element = $(`//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[@index="${index+2}"]/android.widget.TextView`);
            console.log('ELEMENT TEXT: ',element.getText());
            expect(element.getText()).to.have.string(arrayOfPopularSearch[index]);
            
        }   
    }

    assertSearchSuggestions(){
        driver.pause(3000);
        expect(this.getSearchSuggestionLabel.getText()).equal('Suggestions');
        
        for (let index = 1; index < this.getSearchSuggestionsElements.length; index++) {
            let element = $(`//android.view.ViewGroup[@index="${index+5}"]/android.widget.TextView`);
            console.log('SUGGESTION ELEMENT TEXT: ',element.getText());
            expect(element.getText()).to.have.string('jacket');
            
        }   
    }

    assertSearchCategories(){
        driver.pause(3000);
        expect(this.getSearchSuggestionLabel.getText()).equal('Suggestions');
        
        for (let index = 0; index < this.getSearchCategoriesElements.length; index++) {
            let element = $(`//android.view.ViewGroup[${index+2}]/android.widget.TextView[@index=1]`);
            console.log('ELEMENT TEXT: ',element.getText());
            expect(element.getText().toLowerCase()).to.have.string('jacket');
            if(index>0){
                let catElement = $(`//android.view.ViewGroup[${index+2}]/android.widget.TextView[@index=2]`);
                console.log('CATEGORY ELEMENT TEXT: ',catElement.getText());
                expect(catElement.getText().toLowerCase()).to.have.string('jacket');
            }
        }   
    }
}
module.exports = new HomePage();