export interface Item {
  id: string;
  sku: string;
  name: string;
  category: string;
  vendor: string;
  cost: number;
  price: number;
  stock: number;
  createdAt: Date;
}

export interface Sale {
  id: string;
  item: Item;
  quanity: number;
  date: Date;
}

export interface Vendor {
  id: string;
  name: string;
  shop: string;
  email: string;
  sales: number;
  earnings: number;
  phone: string;
  imgURL: string;
}

const vendors: Vendor[] = [
  {
    id: "1",
    name: "Caroline",
    shop: "Vintage",
    email: "caroline@gmail.com",
    sales: 120,
    earnings: 4000,
    phone: "519-231-2078",
    imgURL: "",
  },
  {
    id: "1",
    name: "Ronna",
    shop: "FIG",
    email: "ronna@gmail.com",
    earnings: 2300,
    sales: 67,
    phone: "519-235-2842",
    imgURL: "",
  },
  {
    id: "1",
    name: "Donna",
    shop: "FIG",
    email: "donna@gmail.com",
    phone: "520-331-4083",
    sales: 45,
    earnings: 1700,
    imgURL: "",
  },
];

const items: Item[] = [
  {
    id: "1",
    sku: "SKU1",
    name: "Drawer",
    category: "Furniture",
    vendor: "Caroline",
    cost: 10,
    price: 30,
    stock: 9,
    createdAt: new Date(Date.now()),
  },
  {
    id: "1",
    sku: "SKU2",
    name: "Chair",
    category: "Furniture",
    vendor: "Caroline",
    cost: 10,
    price: 30,
    stock: 6,
    createdAt: new Date(Date.now()),
  },
  {
    id: "1",
    sku: "SKU3",
    name: "Desk",
    category: "Furniture",
    vendor: "Donna",
    cost: 10,
    price: 30,
    stock: 5,
    createdAt: new Date(Date.now()),
  },
  {
    id: "1",
    sku: "SKU4",
    name: "Necklace",
    category: "Jewelery",
    vendor: "Ronna",
    cost: 10,
    price: 30,
    stock: 0,
    createdAt: new Date(Date.now()),
  },
];

export const getItems = () => items;
export const getVendors = () => vendors;

export const getRecentSales = () => {
  return [
    {
      id: "1",
      item: items[0],
      quanity: 2,
      date: new Date(Date.now()),
    },
    {
      id: "2",
      item: items[1],
      quanity: 3,
      date: new Date(Date.now()),
    },
    {
      id: "3",
      item: items[0],
      quanity: 4,
      date: new Date(Date.now()),
    },
    {
      id: "4",
      item: items[3],
      quanity: 5,
      date: new Date(Date.now()),
    },
  ];
};
