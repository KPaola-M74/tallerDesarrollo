const express = require('express');
const app = express();

let recetas = {
  1: {
    id: 1,
    nombre: 'Tarta de Manzana',
    ingredientes: ['manzanas', 'azúcar', 'harina', 'canela'],
    pasos: 'Paso 1: Pelar y cortar las manzanas. Paso 2: Mezclar los ingredientes y hornear.',
    tiempoPreparacion: 60,
    dificultad: 'Fácil'
  },
  2: {
    id: 2,
    nombre: 'Sopa de Verduras',
    ingredientes: ['zanahoria', 'cebolla', 'calabacín', 'apio', 'caldo de verduras'],
    pasos: 'Paso 1: Cortar las verduras. Paso 2: Cocinar en caldo de verduras.',
    tiempoPreparacion: 45,
    dificultad: 'Moderada'
  },
};

app.get('/recetas', (req, res) => {
    const recetasConIngredientesComoString = Object.values(recetas).map(receta => {
     
      const recetaConIngredientes = { ...receta };
      recetaConIngredientes.ingredientes = recetaConIngredientes.ingredientes.join(', ');
      return recetaConIngredientes;
    });
    res.json(recetasConIngredientesComoString);
  });

app.get('/recetas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const receta = recetas[id];
  if (receta) {
    res.json(receta);
  } else {
    res.status(404).json({ message: 'Receta no encontrada' });
  }
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Servidor de recetas escuchando en el puerto ${PORT}`);
});
