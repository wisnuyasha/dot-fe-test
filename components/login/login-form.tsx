import React from "react";
import { signInAction } from "@/hooks/login/actions";
import { Input } from "../input";
import { Button } from "../button";

export default function LoginForm() {
  return (
    <form action={signInAction} className="space-y-5">
      <Input
        id="email"
        label="Email"
        type="text"
        defaultValue="wisnuyeahfaizal@gmail.com"
        placeholder="wisnuyeahfaizal@gmail.com"
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        defaultValue="tes123"
        placeholder="tes123"
        required
      />
      <Button type="submit" className="bg-slate-500 hover:bg-slate-600 w-full">
        Login
      </Button>
    </form>
  );
}
