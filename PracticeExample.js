describe("Example",function(){
	var using = require('jasmine-data-provider');
	var obj = require("./pageobjects.js");
	var d = require("./data.js");
	
	
	
	beforeEach(function(){
			obj.getURL()
			//browser.manage().window().maximize()
		    browser.waitForAngularEnabled(false)
		})
		
		
	using(d.datadriven, function (data, description){
		it("Fucntion1",function(){
			
			obj.name.sendKeys(data.name1)
			obj.email.sendKeys(data.email1)
			obj.input.sendKeys(data.id1)
			element(by.id("exampleCheck1")).click()
			obj.gender.click()
			element.all(by.name("inlineRadioOptions")).first().click()
			obj.submit.click()
			obj.successmessage.getText().then(function(text){
				console.log(text)
			})
			
			element(by.linkText("Shop")).click()
			element.all(by.tagName("app-card")).each(function(item){
				item.element(by.css("h4 a")).getText().then(function(text){
					if(text=="iphone X" || text=="Blackberry"){
						item.element(by.css("button")).click()
						
					}
					
				})
			})
			
			browser.sleep(5000)
			element(by.partialLinkText("Checkout")).getText().then(function(count){
				var r = count.split("(")
				console.log(r[1].trim().charAt(0))
				expect(r[1].trim().charAt(0)).toBe('2')
			})
		})
	});	
	
	
	afterEach(function(){
		browser.takeScreenshot().then(function(){
			obj.writepath('png','exception.png')
		})
		console.log("Test complete")
		
		
	})
	
	
	
})