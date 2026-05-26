export const role = ['user', 'admin', 'super_admin'] as const;
type Role = (typeof role)[number];

export type User = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  age: number;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
};

export type RUser = Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'passwordHash'>;

export type Order = {
  id: number;
  customerId: number;
  quantity: number;
  food: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};
