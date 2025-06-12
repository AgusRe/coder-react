import { useEffect } from "react";
//Es la funcion del HOC
export function withLogging(WrappedComponent){
    //Este es el nuevo componente que se crea
    function ComponentWithLogging(props){
        //Este efecto se ejecuta cuando el componente aparece en pantalla
        useEffect(()=>{
            console.log(`Componente ${WrappedComponent.name} montado`)
        },[])
        //Mostramos el componente original con sus props
        return <WrappedComponent {...props}/>
    }
    //Devuelve el componente
    return ComponentWithLogging
}