class BasketPage {
    elements = {
        addToBasket: ()=> cy.get("div[data-csa-c-slot-id*='newAccordionRow'] input#add-to-cart-button"),
        proceedToCheckout: ()=> cy.get("#attach-sidesheet-checkout-button input"),
        delete: ()=> cy.get("#activeCartViewForm input[value='Delete']"),
        emptyCartMsg: ()=> cy.get("div[id='sc-active-cart'] h1"),
        productDelMsg: ()=> cy.get("div.sc-list-item-removed-msg div[data-action='delete'] a:not(span)"),
        buyNowButton: ()=> cy.get("#bottomSubmitOrderButtonId input[name='placeYourOrder1']"),
        basketButton: ()=> cy.get("#attach-sidesheet-view-cart-button input"),
        productName: ()=> cy.get("span[class='a-list-item'] a[rel='noopener'] span[class='a-truncate-cut']")
    }

    clickOnAddToBasket() {
        this.elements.addToBasket().click()
    }

    clickOnProceedToCheckout() {
        this.elements.proceedToCheckout().click()
    }

    clickOnDeleteLink() {
        this.elements.delete().click()
    }

    verifyCartIsEmpty(emptyCartMsg) {
        this.elements.emptyCartMsg().should('have.text', emptyCartMsg)
    }

    verifyProductIsRemoved(productName) {
        this.elements.productDelMsg().should('have.text', productName+" Opens in a new tab  ")
    }

    clickOnBuyNowButton() {
        this.elements.buyNowButton().click()
    }

    clickOnBasket() {
        this.elements.basketButton().click({force: true})
    }

    verifyProductIsAddedSuccessfully(productName) {
        this.elements.productName().should('have.text', productName)
    }
}
export default BasketPage; 