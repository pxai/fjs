map(function(x) { return x + 1}, Right(2)); // Right(3)

map(function(x){ return x + 1}, Left("Invalid data")); // Left("Invalid data")

var determineAge = function (user) {
    return user.age ? Right(user.age) : Left("Don't have age");
}


var yearOlder = compose(map(add(1)), determineAge);

yearOlder({age: 22}); // => Right(23)

yearOlder({});  // => Left("Don't have age");

const add = x => y => x + y;

var getPrice = function (product) {
    return product.price ? Right(product.price) : Left("Don't have price");
}

var addPrice = compose(add(1), getPrice);

addPrice({price: 6.66}); // => Right(7.66)

addPrice({});  // => Left("Don't have price");