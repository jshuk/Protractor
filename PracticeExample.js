describe("Example",function(){
	
	
	it("Open browser",function(){
		browser.manage().window().maximize()
		browser.waitForAngularEnabled(true)
		browser.get("https://qaclickacademy.github.io/protocommerce/")
		
		browser.sleep(3000)
		//
		
		
		
		element(by.name("name")).sendKeys("JayaS")
		element(by.name("email")).sendKeys("jaya124shukla@gmail.com")
		element(by.id("exampleInputPassword1")).sendKeys("jaya")
		element(by.id("exampleCheck1")).click()
		element(by.cssContainingText("#exampleFormControlSelect1 option","Female")).click()
		element.all(by.name("inlineRadioOptions")).first().click()
		element(by.buttonText("Submit")).click()
		element(by.xpath("//div[@class='alert alert-success alert-dismissible']")).getText().then(function(text){
			console.log(text)
		})
	})
})