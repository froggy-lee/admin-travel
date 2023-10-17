"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLogin,
  selectUserInfo,
  handleIsLogin,
} from "@/store/slide/user";
import { GrLogout } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Navbar() {
  const isLogin = useSelector(selectIsLogin);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    router.push("/");
    dispatch(handleIsLogin(false));
  }, [dispatch, router]);

  return (
    <>
      {isLogin && (
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div className="container">
            <Link className="navbar-brand" href="#">
              Trang chủ
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-3 dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Người dùng
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Danh Sách Người Dùng
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#createUser"
                      >
                        Tạo Người Dùng Mới
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3 dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tin Tức
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Danh Sách Tin Tức
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Tạo Mới Tin Tức
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3 dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Đặt Vé
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-secondary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#createAdmin"
                  >
                    Tạo Tài Khoản ADMIN
                  </button>
                  <FaRegCircleUser size="1.5rem" className="text-primary" />
                  <div className="fw-bold fs-4 text-primary ms-2">
                    {userInfo?.name}
                  </div>
                  <button
                    className="p-1 ms-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Logout"
                    onClick={handleLogout}
                  >
                    <GrLogout size="1.5rem" color="#6c757d" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
