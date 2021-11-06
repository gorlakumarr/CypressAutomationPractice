class ProductsPage {

    clickAddToCartForMobiles(productNameValue) {
        return productNameValue.forEach(function (element) {
            cy.selectProduct(element, "h4[class*='title'] a")
        });
    }
    checkoutButton() {
        return cy.get("a:contains('Checkout')")
    }
}

export default ProductsPage;