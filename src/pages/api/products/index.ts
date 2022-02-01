import { NextApiRequest, NextApiResponse } from 'next';
import { products } from './product-list';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([ ...products ]);
}
