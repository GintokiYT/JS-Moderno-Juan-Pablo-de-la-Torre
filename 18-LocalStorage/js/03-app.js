localStorage.removeItem("nombre");  

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem("meses"));
mesesArray.push("Nuevo mes");

localStorage.setItem("meses", mesesArray);

// Limpia todo el localStorage
localStorage.clear();