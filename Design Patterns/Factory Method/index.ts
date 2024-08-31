abstract class Creator {
	public abstract factoryMethod(): Product;
	public someOperation(): string {
		const product = this.factoryMethod();
		return `Creator: The same creator's code has just worked with ${product.operation()}`;
	}
}

class ProductCreator1 extends Creator {
	public factoryMethod(): Product {
		return new ProductProduct1();
	}
}

class ProductCreator2 extends Creator {
	public factoryMethod(): Product {
		return new ProductProduct2();
	}
}

interface Product {
	operation(): string;
}

class ProductProduct1 implements Product {
	public operation(): string {
		return '{Result of the ProductProduct1}';
	}
}

class ProductProduct2 implements Product {
	public operation(): string {
		return '{Result of the ProductProduct2}';
	}
}

function clientCode(creator: Creator) {
	console.log(
		"Client: I'm not aware of the creator's class, but it still works."
	);
	console.log(creator.someOperation());
}

console.log('App: Launched with the ProductCreator1.');
clientCode(new ProductCreator1());
console.log('');

console.log('App: Launched with the ProductCreator2.');
clientCode(new ProductCreator2());
