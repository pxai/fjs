function happyBirthday(person) {
  return { ...person, age: person.age++ };
}

// it should not modify a param
