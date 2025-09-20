let user = {
  name: `mayuresh`,
  id: 2333,
  city: `Thane`
}
console.log(Object.getOwnPropertyDescriptor(user,`id`));

// Change properties of keys and vales (writable, enumerable, configurable)
Object.defineProperty(user,`id`,
  {
    writable: false,
  }
);
console.log(Object.getOwnPropertyDescriptor(user, `id`));

user.id = 2323;
console.log(user.id); // now it is immutable

user.name = `Mayuresh Dandekar`;
console.log(user.name); // name is still mutable