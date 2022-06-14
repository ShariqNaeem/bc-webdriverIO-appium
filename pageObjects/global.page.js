class GlobalPage{

    get getHomeTab(){ return $('//android.widget.Button[@content-desc="Home, tab, 1 of 4"]'); }
    get getMenuTab(){ return $('//android.widget.Button[@content-desc="Menu, tab, 2 of 4"]'); }
    get getCartTab(){ return $('//android.widget.Button[@content-desc="Cart, tab, 3 of 4"]'); }
    get getProfileTab(){ return $('//android.widget.Button[@content-desc="AuthProfile, tab, 4 of 4"]'); }

    scrollUp(){
        const {height} = driver.getWindowSize();
        console.log('>>>>>>>>>>>>>>>>>>>>> ',height,' <<<<<<<<<<<<<<<<<<<<<<')
        const anchorPercentage = 25;
        const startPointPercentage = 80;
        const endPointPercentage = 20;

        const anchor = height * anchorPercentage / 100;
        const startPoint =  height * startPointPercentage / 100;
        const endPoint = height * endPointPercentage / 100;
        driver.touchAction([
            { action: 'press', x: anchor, y: startPoint },
            { action: 'wait', ms:2000},
            { action: 'moveTo', x: anchor, y: endPoint },
            'release'
        ])       
    }
}
module.exports = new GlobalPage();