function pageobjects(){
	var fs = require('fs');
	this.name = element(by.name("name"))
	this.email = element(by.name("email"))
	this.input = element(by.id("exampleInputPassword1"))
	this.gender = element(by.cssContainingText("#exampleFormControlSelect1 option","Female"))
	this.submit = element(by.buttonText("Submit"))
	this.successmessage = element(by.xpath("//div[@class='alert alert-success alert-dismissible']"))
	this.getURL = function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/")
	}
	this.writepath = function(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
}

module.exports = new pageobjects()
