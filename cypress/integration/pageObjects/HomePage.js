class HomePage{
    elements = {
        signInButton: ()=> cy.get("#nav-link-accountList"),
        signInEmail: ()=> cy.get("input[id='ap_email']"),
        continueButton: ()=> cy.get("input#continue"),
        signInPassword: ()=> cy.get("input#ap_password"),
        loginButton: ()=> cy.get("#signInSubmit"),
        searchTextBox: ()=> cy.get("#twotabsearchtextbox"),
        searchButton: ()=> cy.get("#nav-search-submit-button"),
        hamburgerMenu: ()=> cy.get("a[id='nav-hamburger-menu']"),
        menuList: ()=> cy.get("div[id='hmenu-content'] li"),
        acceptCookies: ()=> cy.get("#sp-cc-accept"),
        todayDeal: ()=> cy.get("a[data-csa-c-content-id='nav_cs_gb']"),
        buyNowButton: ()=> cy.get("input#buy-now-button"),
        useThisPaymentMethod: ()=> cy.get("#orderSummaryPrimaryActionBtn-announce"),
        loggedUserName: ()=> cy.get("#nav-link-accountList-nav-line-1"),
        preOrderButton: ()=> cy.get("input#buy-now-button"),
        createAccount: ()=> cy.get("div[id='nav-signin-tooltip'] a[data-nav-role='signin']"),
        signIn: ()=> cy.get("div[id='nav-flyout-ya-newCust'] a"),
        oneTimePurchase: ()=> cy.get("div[id='buyBoxAccordion'] div[data-csa-c-slot-id='newAccordionRow_0'] i[class*='a-accordion-radio']")
    }

    clickOnSignInButton() {
        // this.elements.createAccount().then($button => {
        //     if($button.is(':visible')){
        //         this.elements.signIn().click()
        //     }else{
        //         this.elements.signInButton().click()
        //     }
        // })
        cy.wait(2000)
        cy.xpath("(//*[text()='Sign in'])[2]").click({force:true})
    }

    enterEmailId(emailId) {
        this.elements.signInEmail().type(emailId)
    }

    clickOnContinueButton() {
        this.elements.continueButton().click()
    }

    enterSignPassword(password) {
        this.elements.signInPassword().type(password)
    }

    loginUser() {
        this.elements.loginButton().click()
    }

    enterProductName(productName) {
        this.elements.searchTextBox().type(productName)
    }

    clickOnSearchIcon() {
        this.elements.searchButton().click()
    }

    clickOnMenuItem(itemName) {
        this.elements.menuList()
        .each(($item, index, $list) => {
            if($item.text() == itemName){
                cy.wrap($item).click()
            }
        })
    }

    clickOnFirstListItem() {
        cy.wait(2000)
        cy.xpath("(//a//div[contains(@class,'a-section')]/img)[1]").click()
    }

    clickOnAcceptCookies() {
        this.elements.acceptCookies().click()
    }

    clickOnHamburgerMenu() {
        this.elements.hamburgerMenu().click()
    }

    clickOnTodayDeal() {
        this.elements.todayDeal().click()
    }

    selectItemFromTodayDeal() {
        cy.wait(2000)
        cy.xpath("(//div[@data-testid='deal-card'])[1]//img").click()
        cy.wait(2000)
        cy.xpath("(//div[@id='octopus-dlp-asin-stream']//a[@title]//img)[1]").click({force: true})
    }

    clickOnBuyNowButton() {
        // this.elements.oneTimePurchase().then($button => {
        //     if($button.is(':visible')){
        //         this.elements.oneTimePurchase().click()
        //     }
        // })
         this.elements.buyNowButton().click()
    }

    verifyUserIsOnPaymentPage() {
        this.elements.useThisPaymentMethod().should('be.visible')
    }

    verifyUserIsLoggedIn(username) {
        this.elements.loggedUserName().should('have.text', "Hello, "+username)
    }

    clickOnPreOrderButton() {
        this.elements.preOrderButton().click()
    }


}
export default HomePage;