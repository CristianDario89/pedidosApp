var cervezas = [ {
    id:"1",
    marca: "shneider",
    descripcion: ["lata","1L"],
    precio: ["55","110"],
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "heineken",
    descripcion: ["lata","1L"],
    precio: ["90","140"],
    cantidad:"",
    seccion:"",
    proveedor:""
},                
{
    id:"3",
    marca: "brahama",
    descripcion:["lata","1L"],
    precio: ["55","110"],
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "Quilmes",
    descripcion:["lata","1L"],
    precio: ["70","110"],
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "images/bebi/b4.jpg"  
}            
];


var jugos = [ {
    id:"1",
    marca: "fresh",
    descripcion: "",
    precio: 50,
    cantidad:"",
    seccion:"",
    img:"images/bebi/b9.webp"
},
{
    id:"2",
    marca: "baggio",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"images/bebi/b8.jpg" 
},
{
    id:"3",
    marca: "tang",
    descripcion: "",
    precio: 20,
    cantidad:"",
    seccion:"",
    img:"images/bebi/bb1.jpg" 
},
{
    id:"4",
    marca: "clight",
    descripcion: "",
    precio: 20,
    cantidad:"",
    seccion:"",
    img:"images/bebi/cer3.jpg" 
},
{
    id:"5",
    marca: "Coca-cola",
    descripcion: ["1/4","lata"],
    precio: [120, 45],
    cantidad:"",
    seccion:"",
    img:"images/bebi/b3.png" 
},
{
    id:"6",
    marca: "manaos",
    descripcion: "",
    precio: 55,
    cantidad:"",
    seccion:"",
    img:"images/bebi/gase1.jpg" 
},
{
    id:"7",
    marca: "lata coca mini",
    descripcion: "",
    precio:45,
    cantidad:"",
    seccion:"",
    img:"images/bebi/bg1.jpg" 
},
{
    id:"8",
    marca: "seven up 2 1/4",
    descripcion: "",
    cantidad:"",
    precio: 140,
    cantidad:"",
    seccion:"",
    img:"images/bebi/b2.jpg" 
}];

var Otros = [
{
    id:"1",
    marca: "chandon",
    descripcion: "",
    precio: 170,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "dr.lemon vodka lata",
    descripcion: ["lata","510ml"],
    cantidad:"",
    precio: [60,95],
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
{
    id:"3",
    marca: "fernet",
    descripcion: "chico $150",
    precio: 240,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "gancia",
    descripcion: ["chico","grande"],
    precio: [160,240],
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
{
    id:"5",
    marca: "frizze",
    descripcion: "",
    precio: 160,
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
    {
    id:"6",
    marca: "Michel torino 720ml",
    descripcion: "",
    precio: 75,
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"7",
    marca: "Estancia mendoza 800ml",
    descripcion: "",
    cantidad:"",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"8",
    marca: "Fed. de alvear extra dulce",
    descripcion: "",
    precio: 185,
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"9",
    marca: "Termidor tinto",
    descripcion: "",
    precio: 75,
    cantidad:"",
    seccion:"",
    img:""
}

] 

/*--------------------------------*/
var galletitas = [ {
    id:"",
    secciones:["budines","facturas","dulces","saladas"],
    descripcion: "",
    proveedores:["budines","facturas","dulces","saladas"]   
}];
/*--------------------------------*/
var proveedores = [ {
    id:"",
    nombre:"",
    telefono: "",
    direccion:"",
    productos:["budines","facturas","dulces","saladas"]   
}]; 
/*------------------------------------*/
var orden = jugos.sort(function (a, b){
    return ( a.marca.toLowerCase().localeCompare(b.marca.toLowerCase()))
});

console.log(orden);

var orden2 = cervezas.sort(function (a, b){
    return ( a.marca.toLowerCase().localeCompare(b.marca.toLowerCase()))
});
console.log(orden2);


var orden3 = Otros.sort(function (a, b){
    return ( a.marca.toLowerCase().localeCompare(b.marca.toLowerCase()))
});
console.log(orden3);
/*-------------Card Overlay---------*/
var over1 = function(atr,one,two,three,four) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">B</h2>
    <ul class="listlista">
      <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
      <li class="flexito"><div>${three}</div><div>$ ${four}</div></li> 
</ul>`}     

over1("#pz1", cervezas[0].marca,cervezas[0].precio[0],cervezas[0].marca,cervezas[0].precio[1]);

var over2 = function(atr,one,two,three,four) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">H</h2>
<ul class="listlista">
  <li class="flexito">
      <div>${one}</div>
      <div>$ ${two}</div>
  </li>
  <li class="flexito">
            <div>${three}</div>
      <div>$ ${four}</div>
  </li>
</ul> `}     
over2("#pz2", cervezas[1].marca,cervezas[1].precio[0],cervezas[1].marca,cervezas[1].precio[1]);

 

var over3 = function(atr,one,two,three,four) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">Q</h2>
<ul class="listlista">
      <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
      <li class="flexito"><div>${three}</div><div>$ ${four}</div></li> 
</ul> `}     
over3("#pz3", cervezas[2].marca,cervezas[2].precio[0],cervezas[2].marca,cervezas[2].precio[1]);

 
var over4 = function(atr,one,two,three,four) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">S</h2>
<ul class="listlista">
      <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
      <li class="flexito"><div>${three}</div><div>$ ${four}</div></li> 
</ul> `}     
over4("#pz4", cervezas[3].marca,cervezas[3].precio[0],cervezas[3].marca,cervezas[3].precio[1]);
/*--------------------JUGOS--------------------------*/ 
var renderjugos = function(atr,one,two,three,four,five,six,seven,eight,nine,ten) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">A - D</h2>
<ul class="listlista">
    <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
    <li class="flexito"><div>${three}</div><div>$ ${four}</div></li>
    <li class="flexito"><div>${five}</div><div>$ ${six}</div></li>
    <li class="flexito"><div>${seven}</div><div>$ ${eight}</div></li>
    <li class="flexito"><div>${nine}</div><div>$ ${ten}</div></li>
</ul> `  }     


renderjugos("#pgas1", 
            jugos[0].marca,jugos[0].precio,
            jugos[1].marca,jugos[1].precio,
            jugos[2].marca,jugos[2].precio,
            jugos[3].marca,jugos[3].precio, 
            jugos[4].marca,jugos[4].precio, 
            jugos[5].marca,jugos[5].precio);
 
var renderjugos2 = function(atr,one,two,three,four) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">F - Z</h2>
    <ul class="listlista">
      <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
  <li class="flexito"><div>${three}</div><div>$ ${four}</div></li>
</ul> `  }     

renderjugos2("#pgas2", 
             jugos[6].marca,jugos[6].precio,
             jugos[7].marca,jugos[7].precio,);

var renderjugos3 = function(atr,one,two,three,four,five,six,seven,eight,nine,ten,eleven,
twelve) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">A - F</h2>
    <ul class="listlista">
        <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
        <li class="flexito"><div>${three}</div><div>$ ${four}</div></li>
        <li class="flexito"><div>${five}</div><div>$ ${six}</div></li>
        <li class="flexito"><div>${seven}</div><div>$ ${eight}</div></li>
        <li class="flexito"><div>${nine}</div><div>$ ${ten}</div></li>
        <li class="flexito"><div>${eleven}</div><div>$ ${twelve}</div></li></ul> `  }     


renderjugos3("#vino1", 
            Otros[0].marca,Otros[0].precio,
            Otros[1].marca,Otros[1].precio[0],
            Otros[2].marca,Otros[2].precio,
            Otros[3].marca,Otros[3].precio, 
            Otros[4].marca,Otros[4].precio, 
            Otros[5].marca,Otros[5].precio, 
            Otros[6].marca,Otros[6].precio);
 
var renderjugos4 = function(atr,one,two,three,four,five,six) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
    
    <h2 class="titlelistlistaa">F - Z</h2>
    <ul class="listlista">
        <li class="flexito"><div>${one}</div><div>$ ${two}</div></li>
        <li class="flexito"><div>${three}</div><div>$ ${four}</div></li>
        <li class="flexito"><div>${five}</div><div>$ ${six}</div></li>
</ul> `  }     

renderjugos4("#vino2", 
             Otros[6].marca,Otros[6].precio[0],
             Otros[7].marca,Otros[7].precio,
             Otros[8].marca,Otros[8].precio);

 