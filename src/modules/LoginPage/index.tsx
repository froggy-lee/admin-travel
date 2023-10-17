"use client";
import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { toast } from "react-toastify";
import { ADMIN } from "@/const";
import { handleIsLogin } from "@/store/slide/user";
import { useDispatch } from "react-redux";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [saveLogin, setSaveLogin] = useState(false);
  const dispatch = useDispatch();

  const resetForm = useCallback(() => {
    setUserName("");
    setPassWord("");
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (userName === "" || password === "") {
        toast.error("Nhập tài khoản và mật khẩu!!!");
        return;
      }

      if (ADMIN.userName === userName && ADMIN.password === password) {
        toast.success("Đăng nhập thành công !");
        dispatch(handleIsLogin(true));
      } else toast.error("Tài khoản hoặc mật khẩu không đúng !!!");

      resetForm();
    },
    [dispatch, password, resetForm, userName]
  );

  return (
    <S.LoginWrapper className="container-fluid d-flex  justify-content-center align-items-center">
      <div className="container">
        <S.Form className="w-50 mx-auto p-5 border" onSubmit={handleSubmit}>
          <h1 className="text-center fw-bold mb-5 text-primary">
            TRAVEL ADMIN
          </h1>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-semibold">
              Tên Đăng Nhập
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="userHelp"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Mật Khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="saveLogin"
              checked={saveLogin}
              onChange={() => setSaveLogin(!saveLogin)}
            />
            <label className="form-check-label" htmlFor="saveLogin">
              Lưu đăng nhập
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng Nhập
          </button>
        </S.Form>
      </div>
    </S.LoginWrapper>
  );
}

export default LoginPage;
