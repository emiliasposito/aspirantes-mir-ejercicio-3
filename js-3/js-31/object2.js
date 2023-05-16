const persona = {
    nombre : "Emilia",
    edad : 21,
    ciudad : "Bogota",
    profesion : "Developer",
} ;

console.log (persona);

function presentacion(persona) {
    return "Me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }


  function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
  const mensaje = presentacion(persona);
  console.log(mensaje);
  
  persona.hobbies = ["programar", "jugar tenis", "ir a cine"];
  console.log("mis hobbies son" + persona.hobbies);

  
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }
  