const orderHistory = [
  {
    deliveryInfo: {
      orderNumber: '114-3941689-8772232',
      datePlaced: '8/4/2020',
      dateDelivered: '8/8/2020',
      totalPrice: 34.0,
      recipient: 'JS Masher',
      placement: 'at Door',
    },
    shipmentInfo: [
      {
        productName: 'JavaScript for impatient programmers',
        maker: 'Dr. Axel Rauschmayer',
        returnWindow: '9/7/2020',
        image: 'fakeImage.jpg',
        price: 31.55,
      },
    ],
  },
  {
    deliveryInfo: {
      orderNumber: '113-9984268-1280257',
      datePlaced: '7/19/2020',
      dateDelivered: '7/20/2020',
      totalPrice: 44.53,
      recipient: 'JS Masher',
      placement: 'to Resident',
    },
    shipmentInfo: [
      {
        productName: 'The Timeless Way of Building',
        maker: 'Christopher Alexander',
        returnWindow: '8/19/2020',
        image: 'fakeImage2.jpg',
        price: 41.33,
      },
    ],
  },
  {
    deliveryInfo: {
      orderNumber: '114-2875557-9059409',
      datePlaced: '7/4/2020',
      dateDelivered: '7/7/2020',
      totalPrice: 17.22,
      recipient: 'JS Masher',
      placement: 'to Resident',
    },
    shipmentInfo: [
      {
        productName: 'Gamecube Controller Adapter.....',
        maker: '',
        returnWindow: '8/5/2020',
        image: 'fakeImage3.jpg',
        price: 15.98,
      },
    ],
  },
  {
    deliveryInfo: {
      orderNumber: '113-2883177-2648248',
      datePlaced: '7/3/2020',
      dateDelivered: '7/5/2020',
      totalPrice: 138.93,
      recipient: 'JS Masher',
      placement: 'at Door',
    },
    shipmentInfo: [
      {
        productName: 'GameCube Controller - SSB Edition (Nintendo Switch)',
        maker: '',
        returnWindow: '8/4/2020',
        image: 'fakeImage4.jpg',
        price: 94.95,
      },
      {
        productName: 'The Art of Sql',
        maker: 'Stephanie Faroult',
        returnWindow: '8/4/2020',
        image: 'fakeImage5.jpg',
        price: 33.99,
      },
    ],
  },
];
console.log('My order history is: ', orderHistory);
