var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

debug(friends.pop());
debug(friends.sort());

var friends2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var myFriendsArray = friends2.split(",");

debug(myFriendsArray.sort());

debug(myFriendsArray.reverse());

// 5
var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];
var joinedFriends = myFriends.join(",")+","+yourFriends.join(",");
var joinedFriendsArray = joinedFriends.split(",");
debug(joinedFriendsArray.sort());

// 6
var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];
debug(foods.indexOf("Pho")+1);

// 7

debug(foods.splice(foods.indexOf("Donuts"), 1));
debug(foods);

// 8

debug(foods.slice(5,10));

// 9

function person(name, age){
  this.name = name;
  this.age = age;
}

var newPerson = new person("Moe", 18);
debug(newPerson);
