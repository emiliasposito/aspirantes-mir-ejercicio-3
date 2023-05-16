const receta = {
    nombre: "Sandwich",
    ingredientes: []
  };
  
  receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
  });
  
  receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
  });
  
  console.log(receta.ingredientes[0].nombre);
  
  let total = 0;
  for (let i = 0; i < receta.ingredientes.length; i++) {
    total = receta.ingredientes[i].cantidad + total;
  }
  
  console.log("Ingredientes:", total);
  