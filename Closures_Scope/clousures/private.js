const person = () => {
    var saveName = 'Kevin';
    return {
        getName: () => {
         return   saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Jefferson");
console.log(newPerson.getName())