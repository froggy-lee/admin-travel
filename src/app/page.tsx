"use client";
import HomePage from "@/modules/Home";
import LoginPage from "@/modules/LoginPage";
import { useSelector } from "react-redux";
import { selectIsLogin } from "@/store/slide/user";

export default function Home() {
  const isLogin = useSelector(selectIsLogin);
  return <>{isLogin ? <HomePage /> : <LoginPage />}</>;
}
