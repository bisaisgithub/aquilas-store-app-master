import Product from '../../../models/Product';
import dbConnect from '../../../util/mongo';

export default async function handler(req, res) {
  try {
    dbConnect();
    const product = await Product.create({
      title: 'Crab Paste',
      desc: 'Our Crab paste with amazing taste!',
      img: '/img/crabp1.png',
      prices: [10, 20, 30],
      extraOptions: [
        {
          text: 'option1',
          price: 3,
        },
        {
          text: 'option2',
          price: 4,
        },
      ],
    });
    console.log('testing');
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
    console.log('error catch ');
  }
}
