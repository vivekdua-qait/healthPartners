class ProductPage {
    elements = {
        productList: ()=> cy.get(".a-section h2:nth-child(2) span")
    }

    clickOnProduct(productName) {
        cy.get(".a-section h2 span")
        .each(($product, index, $list) => {
            if($product.text() == productName){
                cy.log("##########"+productName)
                cy.wrap($product).click()
            }
        })
    }
}
export default ProductPage; 