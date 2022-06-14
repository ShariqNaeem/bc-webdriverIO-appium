const { expect } = require("chai");
const globalPage = require("./global.page");

class MenuPage{

    get getSearchField(){ return $('//android.view.ViewGroup[@index="0"]'); }
    get getSearchFieldPlaceholderText(){ return $('//android.widget.EditText[@text="Search for gear & clothing"]')}
    get getFooter(){ return $('//android.widget.TextView[@text="Call"]'); }
    get getAvailableCategoryElements(){ return $$('//android.widget.TextView[@index=0]');}

    allCategoriesName=new Set();
    setCategoriesName(){
        while((!this.allCategoriesName.has("Wake"))){
            let index=1;

            while(index <= this.getAvailableCategoryElements.length){
                try {
                    const element = $(`//android.view.ViewGroup[${index}]/android.widget.TextView[@index=0]`);
                    console.log(element.getText())
                    this.allCategoriesName.add(element.getText());
                    index++;
                } catch (error) {
                    index++;
                    console.log(error.message);
                }
            }
            globalPage.scrollUp();
        }
        console.log(this.allCategoriesName);
    }

    assertCategoriesTitle(element){
        element.click();
        expect(element.getText())
    }
}
module.exports = new MenuPage();