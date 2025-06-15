import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const [orderId, setOrderId] = useState('');
  const { cart, cartTotal, clear } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const finalizarCompra = (dataDelForm) => {
    let orden = {
      comprador: {
        name: dataDelForm.name,
        address: dataDelForm.address,
        email: dataDelForm.email
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };

    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      {orderId ? (
        <div className="text-center">
          <h2 className="mb-3 text-success">¡La orden ha sido generada correctamente!</h2>
          <h4>ID de la orden:</h4>
          <p className="text-primary">{orderId}</p>
          <Link to="/" className="btn btn-dark mt-3">Volver a Home</Link>
        </div>
      ) : (
        <div className="card shadow p-5" style={{ maxWidth: '500px', width: '100%' }}>
          <h3 className="text-center mb-4">Completa con tus datos</h3>
          <form onSubmit={handleSubmit(finalizarCompra)}>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Nombre completo"
                type="text"
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name?.type === "required" && <small className="text-danger">El campo Nombre es requerido</small>}
              {errors.name?.type === "minLength" && <small className="text-danger">El nombre es muy corto</small>}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Dirección de envío"
                {...register("address", { required: true, minLength: 10, maxLength: 40 })}
              />
              {errors.address?.type === "required" && <small className="text-danger">La dirección es requerida</small>}
              {errors.address?.type === "minLength" && <small className="text-danger">Debe tener mínimo 10 caracteres</small>}
              {errors.address?.type === "maxLength" && <small className="text-danger">La dirección es demasiado larga</small>}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Correo electrónico"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && <small className="text-danger">El correo es requerido</small>}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Repetir correo"
                {...register("secondemail", {
                  required: true,
                  validate: {
                    equalsMails: mail2 => mail2 === getValues().email
                  }
                })}
              />
              {errors.secondemail?.type === "required" && <small className="text-danger">Repetir correo es obligatorio</small>}
              {errors.secondemail?.type === "equalsMails" && <small className="text-danger">Los correos no coinciden</small>}
            </div>

            <button type="submit" className="btn btn-success w-100">Finalizar Compra</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
