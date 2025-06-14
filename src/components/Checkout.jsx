import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { db } from '../service/firebase.jsx'

const Checkout = () => {

    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        // No recarga las apps
        e.preventDefault()


        if(!buyer.name || !buyer.adress || !buyer.email) {
            alert("Por favor, complete todos los campos")
        }
        else if(buyer.email !== validateEmail) {
            alert("Los correos electrónicos no coinciden")
        }
        else {
            // Pasamos datos a firebase
            let orden = {
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                fecha: serverTimestamp()
            }

            const ventas = collection(db, "orders")
            // Agregamos un documento:
            addDoc(ventas, orden)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        }
    }

    return (
        <>
        {
            orderId ? 
            <div>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu número de orden es: {orderId}</p>
                <Link to='/' className='btn btn-dark'>Volver a Home</Link>
            </div>
            :
            <div>
                <h1>Completá con tus datos</h1>
                <form onSubmit={finalizarCompra}>
                    <input className='form-control' placeholder='Nombre completo' type="text" name='name' onChange={buyerData}
                    />
                    <input className='form-control' type="text" placeholder='Dirección de envío' name='adress' onChange={buyerData}
                    />
                    <input className='form-control' placeholder='Correo electrónico' type="email" name='email' onChange={buyerData}
                    />
                    <input className='form-control' placeholder='Confirme correo electrónico' type="email" name='email2' onChange={(e)=> setValidateEmail(e.target.value)}
                    />
                    <button className='btn btn-success' type='submit'>Terminar compra</button>
                </form>
            </div>
        }
        </>        
    )
}

export default Checkout