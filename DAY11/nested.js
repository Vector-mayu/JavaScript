// Nested objects in JS

const user = {
  user_name : `Mayu431`,
  account_id : 139678,
  balance : `173489`,
  address : {
    pincode : 500602,
    city : `Mumbai`,
    landmark : `Bikaner sweets LTD`
  },
  transaction_id :  55663434
}

console.log(user);
console.log(user.address);
console.log(user.address.city);

console.log(`${user.user_name} stays near ${user.address.landmark} in ${user.address.city} city and the pincode is ${user.address.pincode} `);


// assign user to another object

const admin = Object.assign({},user); // {} mean a new deep copy of object user 
// Here admin nested obj is still shallow copy to avoid this we use StructuredClone
console.log(admin);
admin.user_name = `Dandekar`;
console.log(user.user_name); // this is deep copied

admin.address.city = `Pune`;
console.log(user.address.city);


