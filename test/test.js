let Rectangle = require('../lib/rectangle');

describe ("getArea Rectangle", function() {
	it ("must compute the rectangle area correctly", function() {
		let r = new Rectangle({ width: 100, height: 10 });
		let result = r.getArea();
		result.should.equal(1000);
	})
});
