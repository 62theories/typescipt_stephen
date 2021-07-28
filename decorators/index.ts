@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `color is ${this.color}`;
  }

  @logErr1
  pilot1(): void {
    throw new Error();
    console.log("swish");
  }

  @logErr2("test")
  pilot2(): void {
    throw new Error();
    console.log("roger");
  }

  funcWithParam(
    @parameterDecorator param1: any,
    @parameterDecorator param2: any
  ) {}
}

function logErr1(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;
  desc.value = function () {
    try {
      method();
    } catch (err) {
      console.log("error catch");
    }
  };
}

function logErr2(message: string) {
  return function logErr1(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(message);
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log("target ", target);
  console.log("key ", key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log("key is ", key);
  console.log("index is ", index);
}

function classDecorator(constructor: typeof Boat) {
  console.log("constuctor is ", constructor);
}

new Boat().pilot1();
new Boat().pilot2();
