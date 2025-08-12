 import { create } from "zustand";

const useCarrito = create((set) => ({
  carrito: [],
  agregarAlCarrito: (producto, cantidad) =>
    set((state) => {
      const existe = state.carrito.find((item) => item.id === producto.id);
      if (existe) {
        return {
          carrito: state.carrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + cantidad }
              : item
          ),
        };
      } else {
        return { carrito: [...state.carrito, { ...producto, cantidad }] };
      }
    }),
  eliminarDelCarrito: (id) =>
    set((state) => ({
      carrito: state.carrito.filter((item) => item.id !== id),
    })),
  limpiarCarrito: () => set({ carrito: [] }),
}));

export default useCarrito;