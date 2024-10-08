
describe('Tesst saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$('#user-name')
        const passwordTextbox = await browser.$('#password')
        const loginButton = await browser.$('//input[@type="submit"]')

            usernameTextbox.addValue("standard_user")
            passwordTextbox.addValue("secret_sauce")
            loginButton.click()

        await browser.pause(5000)
       // asert.equal(await browser.getUrl,'https://www.saucedemo.com/inventory.html'); 
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTittle('Swag Labs 1')
    });

});