//interface
//la interface es un contrato que se usa para definir la estructura de un objeto o una especie de verificacion de tipos o molde



//interfaces vs classes

//interface
//las interface no se pueden instanciar
//interface solo existen en typescript y no se compilan a javascript
//solo se usan para definir la estructura de un objetoo verificacion de tipos

//class
//las clases se pueden instanciar
//se pueden inicializar propiedades e implementar metodos
// existen en tiempo de compilacion y en tiempo de ejecucion

interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?:(id:number)=>void;
}

// const book: Book[]=[]

function getBooks():Book {
        return {id:1, title:'El señor de los anillos', author:'J.R.R Tolkien'}
}
const myBook = getBooks();


function createBook(book:Book):Book {
    return book
}

const newBook: Book = {
    id: 2,
    title: 'El señor de los anillos',
    author: 'J.R.R Tolkien',
    coAuthor: 'J.R.R Tolkien',
    isLoan: (id:number)=>
        console.log(`El libro con el id ${id} esta prestado`)
    
}

createBook(newBook)

//extender interfaces
interface Person {
    id: number;
    name: string;
}

interface Employee extends Person {
   
    dept: string;
}

interface Customer extends Person {
   
    country: string;
}

const employee: Employee = {
    id: 1,
    name: 'John',
    dept: 'IT'
}


//implementar interfaces

interface Animal {
    name: string;
    getCats(): void;
    getDogs(): void;
}

class Pet implements Animal {
    name = 'pet';
    getCats() {
        console.log('Cats');
    }
    getDogs() {
        console.log('Dogs');
    }
   
}





