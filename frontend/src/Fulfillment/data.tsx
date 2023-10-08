export default {
    orders: [{
        _id: 1,
        createAT: '02/20/2021',
        totalPrice: 42.90,
        user: {
            name: 'Taylor'
        },
        isShipped: true,
        ShippedAt: '02/22/2021',
        isDelivered: false,
        deliveredDate: null,
    },
    {
        _id: 2,
        createAT: '02/20/2021',
        totalPrice: 42.90,
        user: {
            name: 'Pedro'
        },
        isShipped: true,
        ShippedAt: '02/24/2021',
        isDelivered: true,
        deliveredDate: '02/26/2021',
    },

    {
        _id: 3,
        createAT: '02/20/2021',
        totalPrice: 42.90,
        user: {
            name: 'Sanjay'
        },
        isShipped: false,
        ShippedAt: null,
        isDelivered: false,
        deliveredDate: null,
    }, 
    {
        _id: 4,
        createAT: '02/20/2021',
        totalPrice: 32.80,
        user: {
            name: 'Erica'
        },
        isShipped: false,
        ShippedAt: null,
        isDelivered: false,
        deliveredDate: null,
    }]
}