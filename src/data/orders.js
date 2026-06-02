const orders = [
  {
    id: 'ORD-20260530-01',
    userId: 'demo-user',
    date: '30 May 2026',
    status: 'Delivered',
    shipping: 'Express shipping',
    paymentMethod: 'Card',
    total: 6296,
    items: [
      {
        id: 'void-performance-tee',
        name: 'Void Performance Tee',
        price: 1299,
        quantity: 2,
      },
      {
        id: 'core-training-shorts',
        name: 'Core Training Shorts',
        price: 1499,
        quantity: 1,
      },
      {
        id: 'training-socks',
        name: 'Training Socks Pack',
        price: 499,
        quantity: 1,
      },
    ],
  },
];

export default orders;
