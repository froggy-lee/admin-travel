import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import StyledComponentsRegistry from "@/lib/styled-component";
import Layout from "@/components/Layout";
import ImportBsJS from "@/lib/bootstrap-js";
import ReduxProvider from "@/lib/redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const DynamicBootstrap = dynamic(
  () => require("bootstrap/dist/js/bootstrap.min.js"),
  { ssr: false }
);

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin Travel",
  description: "Admin Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <StyledComponentsRegistry>
          <ReduxProvider>
            <Layout>
              <ImportBsJS />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              {children}
            </Layout>
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
