describe("ActionsDemo",function(){
	
	
	it("Open browser",function(){
		browser.manage().window().maximize()
		browser.waitForAngularEnabled(false)
		browser.get("https://www.rahulshettyacademy.com/#/part-time-jobs")
		
		browser.sleep(3000)
		//
		
		browser.actions().click(element(by.xpath("//select[@id='input-is-subscriber']"))).perform()
		
		element(by.xpath("//select[@id='input-is-subscriber']")).sendKeys("API")
		browser.sleep(9000)
	})
})