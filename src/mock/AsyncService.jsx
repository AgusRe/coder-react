export const products = [
    {
        name: 'Silla gamer',
        price: 400000,
        description: 'Silla gamer ergonómica con soporte lumbar hecha de oro y diamantes, ideal para largas sesiones de juego.',
        stock: 21,
        img: 'https://i.postimg.cc/L8BHPXz9/imagen-2025-06-14-143106621.png',
        category: 'sillas gamer'
    },
    {
        name: 'Silla Gamer Marvo Scorpion Ch-106',
        price: 200000,
        description: 'Silla Gamer Marvo Scorpion Ch-106 Negro Y Roja Ergonomica',
        stock: 4,
        img: 'https://i.postimg.cc/5Nm4Yy5x/imagen-2025-06-14-143256906.png',
        category: 'sillas gamer'
    },
    {
        name: 'Silla Gamer Gadnic',
        price: 140000,
        description: 'Silla Gamer Gadnic de Escritorio Ergonómica con Ruedas Verde Ergonomica',
        stock: 7,
        img: 'https://i.postimg.cc/MKZkLDRS/imagen-2025-06-14-143456458.png',
        category: 'sillas gamer'
    },
    {
        name: 'SILLA GAMER SYX CH-451 PK ROSA PINK',
        price: 340000,
        description: 'Silla Gamer SYX CH-451 PK ROSA PINK, ergonomica de cuero con estructura metalica ideal para ganarle la lane',
        stock: 9,
        img: 'https://i.postimg.cc/C5F2WhRN/imagen-2025-06-14-143557233.png',
        category: 'sillas gamer'
    },
    {
        name: 'Auriculares Hyperx Cloud Alpha Inalámbricos Red Pc Color Negro',
        price: 117000,
        description: 'Auriculares ideales para no perderse ni un solo sonido del juego. Vas a escuchar los pasos de los rivales en todo el mapa.',
        stock: 9,
        img: 'https://i.postimg.cc/Y2n8pfZk/imagen-2025-06-14-143827709.png',
        category: 'perifericos'
    },
    {
        name: 'Auriculares Inalámbricos Logitech G435 Ligeros 18h Batería',
        price: 90000,
        description: 'Auriculares.',
        stock: 9,
        img: 'https://i.postimg.cc/rFRGq65C/imagen-2025-06-14-143941839.png',
        category: 'perifericos'
    }
    
]

let error = false

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(products);
      } else {
        reject('Hubo un error. Intente más tarde.');
      }
    }, 3000);
  });
}

export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}