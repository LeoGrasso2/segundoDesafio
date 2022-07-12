let listaNotas=[];
let seguir;

let nombreUser=prompt('Bienvenido a Mis Notas®.\nIngrese su nombre:');
do{
    let opcion=prompt(`Mis Notas®\n----------\n${nombreUser}, ¿que acción desea realizar?\n1. Añadir nota.\n2. Ver notas.\n3. Eliminar`);
    switch(opcion){
    case '1':
    let notaTitle=prompt(`Mis Notas® - Nueva nota.\n----------\nTitulo:`);
    let notaTexto=prompt(`Mis Notas® - Nueva nota.\n----------\nTexto:`);
    addNota(notaTitle,notaTexto);
    break;
    case '2':
    for(let i=0; i<listaNotas.length;i++){
        alert(`Mis Notas® - Nota n°${listaNotas[i].posActual}.\n\nTitulo: ${listaNotas[i].notaTitle}\nTexto: ${listaNotas[i].notaTexto}`);
    }
    
    break;
    case '3':
    let del=(Number.parseInt(prompt(`Mis Notas® - Eliminar nota.\nHay ${listaNotas.length} notas, ¿cual desea eliminar?`)));
    deleteNota(del);
    
}
    seguir=prompt('¿Quiere realizar otra acción?\n1. Si.\n 2.No.');
}while(seguir=='1');

alert('Gracias por utilizar mi programa!.\n-Leonardo Grasso.');

function addNota(notaTitle,notaTexto){
    this.notaTitle=notaTitle;
    this.notaTexto=notaTexto;

    listaNotas.push({
        notaTitle: notaTitle,
        notaTexto: notaTexto,
        posActual: (listaNotas.length+1),
    })
}
function deleteNota(del){
    this.del=del;
    listaNotas.splice(del-1,1);
}
