interface AbstractFactory {
	createProductA(): AbstractProductA;
	createProductB(): AbstractProductB;
}

class FactoryA implements AbstractFactory {
	public createProductA(): AbstractProductA {
		return new ProductA1();
	}

	public createProductB(): AbstractProductB {
		return new ProductB1();
	}
}

class FactoryB implements AbstractFactory {
	public createProductA(): AbstractProductA {
		return new ProductA2();
	}

	public createProductB(): AbstractProductB {
		return new ProductB2();
	}
}

interface AbstractProductA {
	usefulFunctionA(): string;
}

class ProductA1 implements AbstractProductA {
	public usefulFunctionA(): string {
		return 'The result of the product A1.';
	}
}

class ProductA2 implements AbstractProductA {
	public usefulFunctionA(): string {
		return 'The result of the product A2.';
	}
}

interface AbstractProductB {
	usefulFunctionB(): string;
	anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ProductB1 implements AbstractProductB {
	public usefulFunctionB(): string {
		return 'The result of the product B1.';
	}

	public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
		const result = collaborator.usefulFunctionA();
		return `The result of the B1 collaborating with the (${result})`;
	}
}

class ProductB2 implements AbstractProductB {
	public usefulFunctionB(): string {
		return 'The result of the product B2.';
	}

	public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
		const result = collaborator.usefulFunctionA();
		return `The result of the B2 collaborating with the (${result})`;
	}
}

function clientCode(factory: AbstractFactory) {
	const productA = factory.createProductA();
	const productB = factory.createProductB();

	console.log(productB.usefulFunctionB());
	console.log(productB.anotherUsefulFunctionB(productA));
}

clientCode(new FactoryA());
clientCode(new FactoryB());
