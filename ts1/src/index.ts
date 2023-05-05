//tipos de datos primitivos

let myTypeString: string = 'Hello World';
let myTypeNumber: number = 1234;
let myTypeBoolean: boolean = true;

// myTypeString = 99.99; // Error: Type 'number' is not assignable to type 'string'.
// myTypeNumber = 'Hello World'; // Error: Type 'string' is not assignable to type 'number'.

// Arrays
let myTypeArrayString: string[] = ['Hello', 'World'];
// let myTypeArrayString: Array<number> = ['Hello', 'World'];
let myTypeArrayNumber: number[] = [1, 2, 3, 4, 5];
let myTypeArrayBoolean: boolean[] = [true, false, true];

let myTypeArrayAny: any[] = ['Hello', 1, true, [1, 2, 3, 4, 5]];

// Tuples
//se utiliza para declarar un array con un numero fijo de elementos cuyos tipos son conocidos, pero no necesariamente iguales
let myTypeTuple: [string, number, boolean] = ['Hello', 1, true];
//playe tupla
let player: [string, number][];
player = [['Raul Jimenez', 9], ['Raul Alonso', 7]];
//'string' only refers to a type, but is being used as a value here. 
//
let myVarible
myVarible = 'Hello World';


//inferencia de tipos
let myTypeInferenceString = 'Hello World';
typeof myTypeInferenceString; // string
let myTypeInferenceNumber = 1234;
typeof myTypeInferenceNumber; // number
let myTypeInferenceBoolean = true;
typeof myTypeInferenceBoolean; // boolean

//union de tipos
 
let unionType: string | number | null = 'Hello World';
// unionType = true