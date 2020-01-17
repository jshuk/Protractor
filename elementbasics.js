describe('Protractor locator',function(){
	
	function Add(a,b,c){
		element(by.model("first")).sendKeys(a)
		element(by.model("second")).sendKeys(b)
		
		element.all(by.tagName('option')).each(function(item){
			item.getAttribute("value").then(function(values){
				
				
				if(values==c){
					item.click()
				}
			})
		})
		element(by.id("gobutton")).click()
		
		
	}
	
	it('TestCase1',function(){
		browser.manage().window().maximize()
		/*browser.waitForAngularEnabled(false)
		browser.get('https://www.google.com/')*/
		browser.waitForAngularEnabled(true)
		browser.get('https://juliemr.github.io/protractor-demo/')
		Add(2,4,"ADDITION")
		Add(5,7,"DIVISION")
		Add(6,9,"MODULO")
		Add(50,100,"MULTIPLICATION")
		
		
		
	/*	expect($("h2[class='ng-binding']").getText()).toBe("8").then(function(text){
			console.log("Passed 1")
		})
		
			$("h2[class='ng-binding']").getText().then(function(text){
				console.log(text)
			})
			
			
		
		
		element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
			console.log(text)
		})*/
		
		/*element.all(by.repeater('result in memory')).count().then(function(count){
			console.log(count)
			
		})*/
		
		element.all(by.repeater('result in memory')).each(function(item){
			
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				console.log(text)
			})
			
			
		})
	})
		
	//tagname[attribute='value']
	
	///non-angular websites
	
}

)