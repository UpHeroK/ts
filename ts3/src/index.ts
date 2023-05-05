interface Person {
    id: number;
    name: string;
}
interface Employee extends Person{
    role:string;
}
interface Product {
    id: number;
    name: string;
    price: number;
}

// type dataType = Person | Product;
class DataCollection<T extends {id:number ,name:string }>{
    private items:T [ ] = [ ];

    addItem(newItem:T):void{
        this.items.push(newItem);
    }
    getItems():void{
        console.log('list of items',JSON.stringify(this.items));
    }
    getNames():string[]{
        return this.items.map(item => item.name);
    }
    getItemById(id:number):T | undefined{
        return this.items.find((item:T) => item.id === id);
    }
}
// person
const personCollection = new DataCollection<Person>();
const newData:Person = {id:1,name:'John'};
const newData1:Person = {id:2,name:'xd'};
const newData2:Person = {id:3,name:'sas'};
const newData3:Person = {id:4,name:'ols'};
//product
const productCollection = new DataCollection<Product>();
const newData4:Product = {id:1,name:'John',price:200};
const newData5:Product = {id:2,name:'xd',price:200};
const newData6:Product = {id:3,name:'sas',price:200};
const newData7:Product = {id:4,name:'ols',price:200};

personCollection.addItem(newData);
personCollection.addItem(newData);
personCollection.addItem(newData2);
personCollection.addItem(newData3);

productCollection.addItem(newData4);
productCollection.addItem(newData5);
productCollection.addItem(newData6);
productCollection.addItem(newData7);

personCollection.getItems();
productCollection.getItems();

//los genericos son utiles para reutilizar codigo y no tener que escribir el mismo codigo para diferentes tipos de datos