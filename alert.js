describe("Alert",function(){
	
	
	it("Open browser",function(){
		browser.manage().window().maximize()
		browser.waitForAngularEnabled(false)
		browser.get("https://www.rahulshettyacademy.com/AutomationPractice/")
		
		browser.sleep(3000)
		//
		
		
		
		element(by.css("input[id='alertbtn']")).click()
		browser.sleep(2000)
		browser.switchTo().alert().getText().then(function(text){
			console.log(text)
		})
		browser.switchTo().alert().accept().then(function(){
			console.log("ALert Accepted")
		})
		browser.sleep(9000);
		browser.switchTo().frame(0).then(function(){
			console.log("inside frame")
		})
		  element(by.xpath("//a[contains(@href,'sign_in')]")).getText().then(function(i){
	      console.log(i)
	 		
		})
		
	})
})