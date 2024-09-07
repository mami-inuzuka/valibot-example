"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { User, userSchema } from "./userSchema";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const ReactHookFormPane = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: valibotResolver(userSchema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" {...register("age", { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>
      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </>
  );
};
