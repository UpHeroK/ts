class Personita {
    public zona = 'Centro';
    protected ciudad = 'Madrid';
    private country = 'Spain';
    constructor() {
        this.greet();
    }
   greet():void{
        console.log('Hello');}
}


class Employe extends Personita{

    constructor( private readonly id: number, private name: string, private dept: string){
        super();
        this.display();
    }
    // metodos
    display():void{
        console.log(`id: ${this.id}, name: ${this.name}, dept: ${this.dept}, zona: ${this.ciudad}`);
    }
}
const emplea2:Employe  = new Employe(100, 'John', 'IT');
emplea2;
