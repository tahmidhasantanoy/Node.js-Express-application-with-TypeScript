import { z } from "zod";

const userFullNameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const userAddressValidationSchema = z.object({
  street: z.string(),
  price: z.string(),
  quantity: z.string(),
});

const userOrdersValidationSchema = z.object({
  productName: z.string(),
  price: z.string(),
  quantity: z.string(),
});

const userValidationSchema = z.object({
  userId: z.string(),
  userName: z.string(),
  password: z.string(),
  fullName: userFullNameValidationSchema,
  age: z.number(),
  email: z.string().email("Invalid email address"),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: userAddressValidationSchema,
  orders: userOrdersValidationSchema,
});

export default userValidationSchema;
