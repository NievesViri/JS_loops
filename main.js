let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 1000);

// console.log( result);

let user = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },

  {
    firstName: "mary",
    lastName: "smith",
    birthDate: "feb 5, 1935",
    gender: "female",
  },

  {
    firstName: "john",
    lastName: "Barnes",
    birthDate: "march 5, 2001",
    gender: "male",
  },
];
//.keys()
console.log(Object.keys(user));

//.entries()
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }

for (const element of user) {
  console.log(element.birthDate);
  if (parseInt(element.birthDate.slice(-4)) % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

let arrayOfPersons = user.map(function(user) {
return user.firstName + " " + user.lastName;
})
console.log('****', arrayOfPersons)

const male = user.filter((user) => {
  return user.gender === 'male'
});

console.log(male,"male")

const ninety = user.filter(user=> {
  if (user.birthDate >= 1990) {return true;}
});

console.log(ninety)

//// FINISHED////





// const year = user.filter(user => {
//   const ageInSeconds = new Date().getTime() - new Date(user.birthday).getTime();
//   return ageInSeconds < 30 * 365 * 86400 * 1000;
// })

// console.log(year);
