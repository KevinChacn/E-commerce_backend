const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    // URI de conexión a la base de datos
    const uri = "mongodb+srv://kevin-chacon:J00W{4H2-a)m@kevin-devs.ikmkd03.mongodb.net/?retryWrites=true&w=majority&appName=kevin-devs";

    // Opciones de conexión
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      connectTimeoutMS: 30000 // Establece el tiempo máximo de espera para la conexión en 30 segundos (30000 milisegundos)
    };

    // Conectar a la base de datos
    await mongoose.connect(uri, options);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Llamar a la función para conectar a la base de datos
connectToDatabase();




