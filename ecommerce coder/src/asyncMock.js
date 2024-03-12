const products = [
    {
        id: '1',
        name: 'Vans Knu Skool',
        price: 75,
        category: 'Vans',
        img: 'https://images.vans.com/is/image/Vans/VN0009QC_6BT_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
        stock: 25,
        description: 'Descripcion de Vans Knu Skool'
    },
    {
        id: '2',
        name: 'Old Skool Stackform Shoe',
        price: 80,
        category: 'Vans',
        img: 'https://images.vans.com/is/image/Vans/VN0A7Q5M_6BT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',
        stock: 50,
        description: 'Descripcion de Old Skool Stackform Shoe'
    },
    {
        id: '3',
        name: 'Classic Slip-On Checkerboard Stackform Shoe',
        price: 70,
        category: 'Vans',
        img: 'https://images.vans.com/is/image/Vans/VN0A7Q5R_TYQ_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
        stock: 15,
        description: 'Descripcion de Classic Slip-On'
    },
    {
        id: '4',
        name: 'Campus 00S Shoes',
        price: 110,
        category: 'Adidas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cae11c7f6de47e799153b05b52b0dad_9366/Campus_00s_Shoes_Grey_ID3172_01_standard.jpg',
        stock: 100,
        description: 'Descripcion de Campus 00S'
    },
    {
        id: '5',
        name: 'Stan Smith Lux Shoes',
        price: 140,
        category: 'Adidas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52d0e48ed048486ebdbd6ec4e43a78a1_9366/Stan_Smith_Lux_Shoes_White_IF8846_01_standard.jpg',
        stock: 90,
        description: 'Descripcion de Stan Smith Lux Shoes'
    },
    {
        id: '6',
        name: 'SUPERSTAR XLG',
        price: 110,
        category: 'Adidas',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d093fdab93a647d0b96ea7416b8145c1_9366/Superstar_XLG_Shoes_Pink_ID5733_01_standard.jpg',
        stock: 150,
        description: 'Descripcion de SUPERSTAR XLG'
    },
    {
        id: '7',
        name: 'Air Jordan 1 Mid',
        price: 125,
        category: 'Nike',
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b720303b-a097-4a59-98c8-fdedaf369ad6/air-jordan-1-mid-womens-shoes-Kg3nnj.png',
        stock: 100,
        description: 'Descripcion de Air Jordan 1 Mid'
    },
    {
        id: '8',
        name: 'Nike Air Force 1 Shadow',
        price: 135,
        category: 'Nike',
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10dfe4fb-ded2-4156-9c44-88c0e1d86bc3/air-force-1-shadow-womens-shoes-kTgn9J.png',
        stock: 160,
        description: 'Descripcion de Nike Air Force 1 Shadow'
    },
    {
        id: '9',
        name: 'Nike Air Max SC',
        price: 90,
        category: 'Nike',
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3077de6-e8a2-40e0-87c9-0a5fa292d592/air-max-sc-womens-shoes-CwMCK7.png',
        stock: 160,
        description: 'Descripcion de Nike Air Max SC'
    },

    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}