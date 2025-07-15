# Guía de Estilos Tailwind - Ecommerce

## Fondo Home

- Color: `bg-secondary-light`

## Categorías

- Color: `bg-primary-accent`
- Texto: `text-secondary-accent`
- Hover: `hover:bg-primary-light`
- Active: `active:scale-105`
- Transición: `transition-all ease-in`
- Cursor: `cursor-pointer`
- Estado: `active:scale-105`

## Paleta de colores

- Primario: `bg-zinc-200`
- Secundario: `bg-zinc-300`
- Fondo: `bg-white`
- Texto principal: `text-black`
- Texto secundario: `text-gray-600`
- Éxito/Error: `text-blue-600`, `text-red-500`

## Componentes y Layout

- Contenedores: `container mx-auto px-4 py-8`
- Grillas: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Flexbox: `flex items-center justify-center gap-4`
- Tarjetas: `shadow-md rounded-md p-4 bg-white`

## Tipografía

- Títulos: `text-2xl font-bold`
- Subtítulos: `text-xl font-semibold`
- Texto normal: `text-base`
- Texto secundario: `text-gray-600`

## Bordes y Sombra

- Bordes redondeados: `rounded-md`
- Sombra: `shadow-md`

## Ejemplo de uso

```jsx
<div className="container mx-auto px-4 py-8">
  <div className="shadow-md rounded-md p-4 bg-white">
    <h2 className="text-2xl font-bold mb-4">Título</h2>
    <p className="text-gray-600">Texto descriptivo...</p>
  </div>
</div>
```
