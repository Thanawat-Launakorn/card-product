type RateProps = {
  rate: number;
  count: number;
};

export interface IProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating?: RateProps;
  quantity: number;
}

export interface ICart extends IProduct {}
