"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectIsLogin } from "@/store/slide/user";

function Navbar() {
  const isLogin = useSelector(selectIsLogin);
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
                      <Link className="dropdown-item" href="#">
                        Tạo Người Dùng Mới
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
                  <button type="button" className="btn btn-secondary  me-3">
                    Tạo Tài Khoản ADMIN
                  </button>
                  <div className="col">User Name</div>
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
