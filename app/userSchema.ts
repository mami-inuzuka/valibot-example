import * as v from "valibot";

export const userSchema = v.object({
  name: v.string(),
  email: v.pipe(v.string("Email must be a string"), v.email("Email must be a valid email address")),
  age: v.pipe(v.number("Age must be a number"), v.minValue(18, "Age must be at least 18")),
});

export const userData = {
  name: "John Doe",
  email: "john@example.com",
  age: 25,
};

export type User = v.InferInput<typeof userSchema>;
