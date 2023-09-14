'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { FormEventHandler } from "react";


export const SignInForm = () => {
    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const res = await signIn("creadentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });

        if (res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }



    return (
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    );
}