import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // Funciones que modifican el estado

    // Agregar un item al carrito sin repetir y sumando cantidades
    const addItem = (item, cantidad) => {
        console.log(item, cantidad, 'desde el contexto')
        console.log({...item, quantity:cantidad}, 'desde el contexto')

        if(isInCart(item.id)) {
            // Ya está en el carrito:
            //console.log('Ya está en el carrito, suma cantidad.')
            setCart(
                cart.map((prod) => {
                if(prod.id === item.id) {
                    // Suma cantidad
                    return {...prod, quantity: prod.quantity + cantidad}
                }
                else {
                    // No modifica el objeto
                    return prod
                }
            }))
        }
        else {
            //console.log('No está en el carrito, se agrega nuevo item')
            setCart([...cart, {...item, quantity:cantidad}])
        }   
    }

    // Borrar carrito
    const clear = () => {
        setCart([])
    }

    // Eliminar un item del carrito
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    // Devuelve un booleano si está o no en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    // Cantidad de items usable en CartWidget
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    // Total a pagar
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0)
    }

    return(
        <CartContext.Provider value = {{cart, addItem, clear, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}