"use server";

import { revalidatePath } from "next/cache";


export const serverActions = async (prevState: unknown, formData: FormData) => {
  console.log(formData);
  return { message: "Hello, world!" };
};
