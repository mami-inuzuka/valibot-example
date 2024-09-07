"use client";

import * as v from "valibot";
import { userData, userSchema } from "./userSchema";

export const ParseExample = () => {
  // parse() はスキーマに従ってデータを検証し、エラーがあれば例外を投げる
  // したがって、try-catch でエラーをキャッチする必要がある
  try {
    const user = v.parse(userSchema, userData);
    console.log(user);
  } catch (error) {
    console.log(error);
  }

  return <div>ParseExample</div>;
};
