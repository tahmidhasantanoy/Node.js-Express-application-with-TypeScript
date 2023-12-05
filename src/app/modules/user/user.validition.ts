import { z } from "zod";

const userFullNameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const userAddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const userOrdersValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
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
