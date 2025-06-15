import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

// Local Storage:
const prodLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart]= useState(prodLocalStorage)

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    // Agregar un item al carrito sin repetir y sumando cantidades
    const addItem = (item, cantidad)=>{
        if(isInCart(item.id)){
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + cantidad}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
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