# Coderhouse - Curso de React: E-Commerce App

En este curso exploramos la creación de una aplicación de e-commerce desarrollada con React, React Router y Firebase/Firestore, que permite navegar por categorías de productos, ver detalles, agregar ítems al carrito y rellenar un formulario al completar la compra.

---

## 🚀 Tecnologías

- **React** (v18+)
- **React Router** (v6+)
- **Firebase** (Firestore)
- **React Context API** (CartContext)
- **React Hook Form** / **react-hot-toast** (opcional, para formularios y notificaciones)
- **CSS Modules** (para estilos)

---

## 📥 Instalación

1. **Clona el repositorio**  
    ```
   git clone https://github.com/AgusRe/coder-react.git
   cd coder-react
   ```
2. **Instala dependencias**
    ```
    npm install
    # o
    yarn install
    ```
3. **Configura Firebase**
Crea un proyecto en Firebase Console y linkealo en la carpeta de /src, creando un archivo firebaseConfig.js y copiando y pegando lo que nos provee *Firebase*. Por el momento, tendrá acceso a el *Firebase* base del proyecto. En caso de querer linkear el suyo, deberían implementar:
    ```
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey:   "<TU_API_KEY>",
    authDomain: "<TU_AUTH_DOMAIN>",
    projectId: "<TU_PROJECT_ID>",
    storageBucket: "<TU_STORAGE_BUCKET>",
    messagingSenderId: "<TU_MESSAGING_SENDER_ID>",
    appId: "<TU_APP_ID>"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```
## ⚙️ Uso
En la **carpeta raíz del proyecto**, para iniciar el proyecto deberán poner en la consola:

```npm run dev```

Ejemplo: 

```C:\Usuario\TuUsuario\DireccionDeCarpeta> npm run dev```

## 🔄 Navegación
- SPA con **React Router v6**.
- Rutas dinámicas:
    - /category/:categoryId
    - /product/:id
- Utilización de NavLink para indicar la ruta activa y useParams + useEffect para recarga de datos.

## 🛒 Carrito de Compras
- Se utiliza CartContext para proveer funciones como: ```cartItems, addItem(), removeItem(), clearCart()```.
Posterior a la confirmación de la compra:
- CheckoutForm separado en componente propio, gestionado con React Hook Form y notificaciones.

## 📖 Librerias Utilizadas 
- **React Bootstrap:** para el styling de la página.
- **React Router Dom:** para la navegación por rutas.
- **Firebase:** como base de datos.
#
©️ Desarrolado por Agustín Ré.
