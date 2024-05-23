const people = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Jane', age: 30, gender: 'female' },
    { name: 'Bob', age: 22, gender: 'male' },
    { name: 'Alice', age: 28, gender: 'female' },
    { name: 'Tom', age: 35, gender: 'male' },
    { name: 'Mary', age: 32, gender: 'female' },
    { name: 'Charlie', age: 27, gender: 'male' },
    { name: 'Eve', age: 29, gender: 'female' },
    { name: 'Sam', age: 31, gender: 'male' },
    { name: 'Linda', age: 26, gender: 'female' },
    { name: 'Mike', age: 34, gender: 'male' },
    { name: 'Susan', age: 33, gender: 'female' },
    { name: 'Chris', age: 24, gender: 'male' },
    { name: 'Karen', age: 36, gender: 'female' },
    { name: 'Kevin', age: 23, gender: 'male' },
    { name: 'Nancy', age: 37, gender: 'female' },
    { name: 'James', age: 40, gender: 'male' },
    { name: 'Patricia', age: 38, gender: 'female' },
    { name: 'David', age: 39, gender: 'male' },
    { name: 'Jennifer', age: 41, gender: 'female' },
    { name: 'Robert', age: 42, gender: 'male' },
    { name: 'Lisa', age: 43, gender: 'female' },
    { name: 'Michael', age: 44, gender: 'male' },
    { name: 'Sandra', age: 45, gender: 'female' },
    { name: 'William', age: 46, gender: 'male' },
    { name: 'Jessica', age: 47, gender: 'female' },
    { name: 'Joseph', age: 48, gender: 'male' },
    { name: 'Sarah', age: 49, gender: 'female' },
    { name: 'Thomas', age: 50, gender: 'male' },
    { name: 'Kimberly', age: 51, gender: 'female' },
    { name: 'Charles', age: 52, gender: 'male' },
    { name: 'Emily', age: 53, gender: 'female' },
    { name: 'Daniel', age: 54, gender: 'male' },
    { name: 'Donna', age: 55, gender: 'female' },
    { name: 'Matthew', age: 56, gender: 'male' },
    { name: 'Carol', age: 57, gender: 'female' },
    { name: 'Anthony', age: 58, gender: 'male' },
    { name: 'Michelle', age: 59, gender: 'female' },
    { name: 'Mark', age: 60, gender: 'male' },
    { name: 'Amanda', age: 20, gender: 'female' },
    { name: 'Paul', age: 21, gender: 'male' },
    { name: 'Laura', age: 22, gender: 'female' },
    { name: 'Steven', age: 23, gender: 'male' },
    { name: 'Stephanie', age: 24, gender: 'female' },
    { name: 'Andrew', age: 25, gender: 'male' },
    { name: 'Rebecca', age: 26, gender: 'female' },
    { name: 'Kenneth', age: 27, gender: 'male' },
    { name: 'Sharon', age: 28, gender: 'female' },
    { name: 'Joshua', age: 29, gender: 'male' },
    { name: 'Cynthia', age: 30, gender: 'female' },
    { name: 'George', age: 31, gender: 'male' },
    { name: 'Kathleen', age: 32, gender: 'female' },
    { name: 'Edward', age: 33, gender: 'male' },
    { name: 'Amy', age: 34, gender: 'female' },
    { name: 'Brian', age: 35, gender: 'male' },
    { name: 'Shirley', age: 36, gender: 'female' },
    { name: 'Ronald', age: 37, gender: 'male' },
    { name: 'Angela', age: 38, gender: 'female' },
    { name: 'Timothy', age: 39, gender: 'male' },
    { name: 'Melissa', age: 40, gender: 'female' },
    { name: 'Jason', age: 41, gender: 'male' },
    { name: 'Deborah', age: 42, gender: 'female' },
    { name: 'Jeffrey', age: 43, gender: 'male' },
    { name: 'Brenda', age: 44, gender: 'female' },
    { name: 'Ryan', age: 45, gender: 'male' },
    { name: 'Pamela', age: 46, gender: 'female' },
    { name: 'Jacob', age: 47, gender: 'male' },
    { name: 'Nicole', age: 48, gender: 'female' },
    { name: 'Gary', age: 49, gender: 'male' },
    { name: 'Katherine', age: 50, gender: 'female' },
    { name: 'Nicholas', age: 51, gender: 'male' },
    { name: 'Virginia', age: 52, gender: 'female' },
    { name: 'Eric', age: 53, gender: 'male' },
    { name: 'Catherine', age: 54, gender: 'female' },
    { name: 'Jonathan', age: 55, gender: 'male' },
    { name: 'Christine', age: 56, gender: 'female' },
    { name: 'Larry', age: 57, gender: 'male' },
    { name: 'Samantha', age: 58, gender: 'female' },
    { name: 'Justin', age: 59, gender: 'male' },
    { name: 'Rachel', age: 60, gender: 'female' },
    { name: 'Scott', age: 20, gender: 'male' },
    { name: 'Carolyn', age: 21, gender: 'female' },
    { name: 'Brandon', age: 22, gender: 'male' },
    { name: 'Janet', age: 23, gender: 'female' },
    { name: 'Frank', age: 24, gender: 'male' },
    { name: 'Heather', age: 25, gender: 'female' },
    { name: 'Benjamin', age: 26, gender: 'male' },
    { name: 'Diane', age: 27, gender: 'female' },
    { name: 'Gregory', age: 28, gender: 'male' },
    { name: 'Julie', age: 29, gender: 'female' },
    { name: 'Raymond', age: 30, gender: 'male' },
    { name: 'Joyce', age: 31, gender: 'female' },
    { name: 'Patrick', age: 32, gender: 'male' },
    { name: 'Victoria', age: 33, gender: 'female' },
    { name: 'Jack', age: 34, gender: 'male' },
    { name: 'Kelly', age: 35, gender: 'female' },
    { name: 'Alexander', age: 36, gender: 'male' },
    { name: 'Christina', age: 37, gender: 'female' },
    { name: 'Dennis', age: 38, gender: 'male' },
    { name: 'Lauren', age: 39, gender: 'female' },
  ];

  // Getting tag from html
const main = document.querySelector(`#main`);
const searchBTN = document.querySelector(`#searchBTN`);
const searchBar = document.querySelector(`#searchBar`);
  
const searchingFun = searchword => {
    const fileredArr = people.filter((person)=> person.name.toLocaleLowerCase().includes(searchword.toLocaleLowerCase()));
    if(fileredArr.length >= 1 ){
    creatingTableFun(fileredArr)
    }
    else{
      wholeTable.innerHTML = '';
    }
  }

const creatingTableFun = arr => {
  main.innerHTML = ``;
  arr.forEach((person)=>{
    if(typeof person === 'object'){
      const trtag = document.createElement('tr');
      trtag.className = `bg-white border-b dark:bg-gray-800 dark:border-gray-700`;
      const thtag = document.createElement('th');
      thtag.scope = 'row';
      thtag.innerHTML = person.name;
      thtag.className = 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      const tdtag = document.createElement('td');
      tdtag.innerHTML = person.age;
      tdtag.className = 'px-6 py-4';
      const secondTdtag = document.createElement('td');
      secondTdtag.innerHTML = person.gender;
      secondTdtag.className = 'px-6 py-4';
      trtag.appendChild(thtag)
      trtag.appendChild(tdtag)
      trtag.appendChild(secondTdtag)
      main.appendChild(trtag)
    }
    
  })
}

creatingTableFun(people)

searchBar.addEventListener('input',(e) => {
  const fileredArr = people.filter((person)=> person.name.toLocaleLowerCase().includes(searchBar.value.toLocaleLowerCase()));
    if(fileredArr.length >= 1 ){
    creatingTableFun(fileredArr)
    }
    else{
      main.innerHTML = '';
    }
})

