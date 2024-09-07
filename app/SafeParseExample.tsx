"use client";

import * as v from "valibot";
import { userData, userSchema } from "./userSchema";

export const SafeParseExample = () => {
  // safeParse() はスキーマに従ってデータを検証し、result オブジェクトを返す
  // result.success が true なら result.output に検証済みデータが格納される
  // result.success が false なら result.issues にエラー情報が格納される
  // したがって try-catch は不要
  const result = v.safeParse(userSchema, userData);

  if (result.success) {
    console.log(result.output);
  } else {
    console.log(result.issues);
  }

  return <div>SafeParseExample</div>;
};
