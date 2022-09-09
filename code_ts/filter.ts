interface ITodos {
  id: number,
  title: string, 
  description: string
}

const todos:ITodos[] = [{
  id: 1,
  title: "leninsin",
  description: "pepito",
}, {
  id: 2,
  title: "leninsinconL",
  description: "pepit",
}, {
  id: 3,
  title: "leninsinSolin",
  description: "pepi",
}];

const filter = (filter: string | number) => {
  return todos.filter(({ id, title, description }: ITodos) => {
    if(id === filter || title.includes(filter as string) || description.includes(filter as string)) {
      return true
    }
  })
};

console.log(filter(3))