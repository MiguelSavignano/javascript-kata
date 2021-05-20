// To run one test use regexp patter
// npx jest -t "adds"
// npx jest -t "reverse"
// npx jest -t "#1"

function sum(a, b) { return a + b }

test('#0 adds 1 + 2', () => {
  expect(sum(1, 2)).toEqual(3);
});

test('#01 reverse', () => {
  expect( reverse([1,2]) ).toEqual([2,1]);
  expect( reverse([ "A", 5, [3,5], { id:4 } ]) ).toEqual([ { id: 4 }, [ 3, 5 ], 5, 'A' ]);
});

test('#02 filter even', () => {
  expect( filterEven([1,2,3,4,5,6]) ).toEqual([2,4,6]);
  expect( filterEven([0,1,2,"3","4",5,6]) ).toEqual([0,2,4,6]);
});

test('#03 zip list', () => {
  expect( zip([0,1,2,3,4,5,6,7,8,9]) ).toEqual([[0,1],[2,3],[4,5],[6,7],[8,9]]);
});

test('#04 list of products', () => {
  products = [ {id: 1, price: 0.5 }, {id: 2, price: 8 }, {id: 3, price: 5.5 }, {id: 4, price: 4.8 } ]

  expect( maxPrice(products) ).toEqual({id: 2, price: 8 });
  expect( orderByPrice(products, "ASC") ).toEqual([ {id: 1, price: 0.5 }, {id: 4, price: 4.8 }, {id: 3, price: 5.5 }, {id: 2, price: 8 } ]);
  expect( orderByPrice(products, "DESC") ).toEqual([ {id: 2, price: 8 }, {id: 3, price: 5.5 }, {id: 4, price: 4.8 }, {id: 1, price: 0.5 } ]);
  expect( orderByPrice(products) ).toEqual([ {id: 2, price: 8 }, {id: 3, price: 5.5 }, {id: 4, price: 4.8 }, {id: 1, price: 0.5 } ]);
  expect( sumPrices(products) ).toEqual(18.8);
});

test('#05 codes generator', () => {
  expect( genCode(1, "51") ).toEqual("51000001");
  expect( genCode(100, "51") ).toEqual("51000100");
  expect( genCode(4, "52") ).toEqual("52000004");
  expect( genCode(10000, "52") ).toEqual("52010000");
});

test('#06 merge objects', () => {
  const productRaw = { price: 4, type: 'A' }
  const product = { id: 1, locale: 'ES' }
  expect( mergeObj(productRaw, product) ).toEqual({id: 1, locale: 'ES', price: 4, type: 'A'});
});

test('#07 return promise', async () => {
  expect( await sumAsync(1, 2) ).toEqual(3);
});

test('#08 functions return function', () => {
  expect( MathFnc("sum")(1, 2) ).toEqual(3);
  expect( concatArguments(0,1)(2, 3) ).toEqual([0,1,2,3]);
});

test('#09 class objects', () => {
  const person = new Person({name: "Jhon", lastName: "Doe"})
  expect(person).toBeInstanceOf(Person);
  expect(person.name).toEqual("Jhon");
  expect(person.fullName()).toEqual("Jhon Doe");
});

test('#10 share object methods', () => {
  const dog = new Dog()
  const cat = new Cat()
  const parrot = new Parrot()

  expect(dog.talk()).toEqual('woof, woof!');
  expect(cat.talk()).toEqual('miau, miau!');
  expect(parrot.talk('woof, woof!')).toEqual('woof, woof!');
  expect(parrot.dog()).toEqual('woof, woof!');
  expect(parrot.cat()).toEqual('miau, miau!');
});
