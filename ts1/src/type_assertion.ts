//type assertion
//el tipo de asercion es una forma de decirle al compilador "confia en mi, se lo que estoy haciendo"

let channel : any = 'Dev'; 
let channelStr = <string>channel; 
// let channelStr = channel as String; 

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement