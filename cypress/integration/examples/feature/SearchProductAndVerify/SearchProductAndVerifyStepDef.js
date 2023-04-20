/// <reference types = "Cypress"/>

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";
import BasketPage from "../../../pageObjects/BasketPage";

const homePage = new HomePage()
const productPage =  new ProductPage()
const basketPage = new BasketPage()
var product

Given("User Login into the application with {string} and {string}", (username, password) => {
cy.visit(Cypress.env('url'))
homePage.clickOnAcceptCookies()
cy.title().should('include', 'Amazon.co.uk')
homePage.clickOnSignInButton()
homePage.enterEmailId(username)
homePage.clickOnContinueButton()
homePage.enterSignPassword(password)
homePage.loginUser()
})

Then("User verify it lands on homePage and verify {string}", (username) => {
    homePage.verifyUserIsLoggedIn(username)
})

Given("User search for the product {string} in search box", (productName) => {
    homePage.enterProductName(productName)
    homePage.clickOnSearchIcon()
    productPage.clickOnProduct(productName)
})

When("User add the product {string} to the basket and verify", (productName)=> {
    basketPage.clickOnAddToBasket()
    basketPage.clickOnBasket()
    // basketPage.verifyProductIsAddedSuccessfully(productName)
})

Then("Verify User is able to delete the added product and message is displayed", ()=> {
    basketPage.clickOnDeleteLink()
    basketPage.verifyProductIsRemoved(" Samsung Tab A8 32GB Grey Wifi (Old Version) ")
    basketPage.verifyCartIsEmpty("\nYour Amazon Cart is empty.\n")
})

Given("User select the item from the {string}", (categoryType)=> {
    homePage.clickOnHamburgerMenu()
    homePage.clickOnMenuItem(categoryType)
    homePage.clickOnFirstListItem()
})

Then("Verify User is able to select a product and pre order", ()=> {
    homePage.clickOnPreOrderButton()
    homePage.verifyUserIsOnPaymentPage()
})

Given("User selects the item from today's deal", ()=> {
    homePage.clickOnTodayDeal()
    homePage.selectItemFromTodayDeal()
})

Then("User clicks on Buy now and verify payment page", ()=> {
    homePage.clickOnBuyNowButton()
    homePage.verifyUserIsOnPaymentPage()
})
