# Proyecto de Búsqueda de Personajes - Rick and Morty

Este proyecto es una aplicación web de búsqueda de personajes de la serie **Rick and Morty**, creada con **React** y **Vite**. Permite realizar búsquedas utilizando la API de Rick and Morty con filtrado de nombres y más.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Scripts Disponibles](#scripts-disponibles)
3. [Dependencias](#dependencias)
4. [Estructura del Proyecto](#estructura-del-proyecto)

---

## Instalación

Para instalar este proyecto en tu máquina local, sigue los pasos a continuación:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/juanpabloct/rick-and-morty-prueba
   ```

2. Navega dentro del directorio del proyecto:
   `cd rick-and-morty-prueba`

3. Instala las dependencias necesarias con npm o yarn:

```
  npm install
  # o
  yarn install
```

Scripts Disponibles
En este proyecto, puedes ejecutar los siguientes scripts:

```
npm run dev
Este comando ejecuta la aplicación en modo de desarrollo. Abre http://localhost:5173 para verla en tu navegador.

La página se recargará si haces ediciones en el código.

npm run dev
```

```
npm run build
Construye la aplicación para producción dentro de la carpeta dist/. Este comando empaqueta tu aplicación de la manera más eficiente para su despliegue.

npm run build
```

```
npm run preview
Sirve para previsualizar la aplicación construida después de ejecutar el comando build. Útil para asegurarte de que todo funciona correctamente antes de desplegar.

npm run preview
```

4. Estructura del Proyecto

```
   La estructura de carpetas del proyecto es la siguiente:

├── public/ # Archivos públicos
├── src/
│ ├── assets/ # Imágenes e íconos
│ ├── components/ # Componentes reutilizables
│ ├── hooks/ # Custom Hooks
│ ├── pages/ # Páginas principales
│ ├── App.tsx # Componente principal
│ ├── main.tsx # Punto de entrada de la aplicación
└── package.json # Archivo de configuración de npm
```
