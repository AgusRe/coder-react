const products = [
    {
        id: '01',
        name: 'Mouse Pad Gaming L Antideslizante Meetion Mt-p110 Premium Color Negro',
        price: 12500,
        description: 'Descripción del mousepad',
        stock: 10,
        img: 'https://i.postimg.cc/fTkZS4Tb/imagen-2025-05-19-162826881.png',
        category: 'mas vendidos'
    },
    {
        id: '02',
        name: 'Monitor Gamer LG con pantalla de 27" 144Hz 220V y resolución 4K',
        price: 145000,
        description: 'Monitor 144zh 27"',
        stock: 5,
        img: 'https://i.postimg.cc/6pwkVDBR/imagen-2025-05-19-163148769.png',
        category: 'ofertas'
    },
    {
        id: '03',
        name: 'Mouse Gamer Inalámbrico Redragon Storm Pro M808-ks Negro Color Black',
        price: 20000,
        description: 'Mouse inalambrico 1000hz 16000dpi',
        stock: 20,
        img: 'https://i.postimg.cc/sxqLZNwB/imagen-2025-05-19-162936084.png',
        category: 'ofertas'
    },
    {
        id: '04',
        name: 'Teclado mecánico HYPERX ALLOY FPS CHERRY MX RED',
        price: 40000,
        description: 'Teclado inalambrico switches cherry mx red',
        stock: 17,
        img: 'https://i.postimg.cc/DzPRY5yD/imagen-2025-05-19-162911622.png',
        category: 'mas vendidos'
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
    }, 2000);
  });
}
