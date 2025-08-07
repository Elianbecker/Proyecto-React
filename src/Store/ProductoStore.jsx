 import { create } from 'zustand'

const useProductStore = create((set, get) => ({
  carrito: [],
  
  agregarAlCarrito: (producto) => {
    const carritoActual = get().carrito
    const productoExistente = carritoActual.find(p => p.id === producto.id)

    if (productoExistente) {
      
      const nuevoCarrito = carritoActual.map(p =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
      set({ carrito: nuevoCarrito })
    } else {
      
      set({ carrito: [...carritoActual, { ...producto, cantidad: 1 }] })
    }
  },

  quitarDelCarrito: (id) => {
    const nuevoCarrito = get().carrito.filter(p => p.id !== id)
    set({ carrito: nuevoCarrito })
  },

  vaciarCarrito: () => set({ carrito: [] })
}))

export default useProductStore