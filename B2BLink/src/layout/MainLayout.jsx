import React, { useTransition } from "react";
import Header from "../components/Home1/Header";
import Footer1 from "../components/Footer/Footer1";
import Topbar from "../components/Home1/Topbar";
import Breadcrumb from "./Breadcrumb";
import Modals from "../components/Home1/Modals";
import { useTranslations } from "next-intl";

function MainLayout({ children }) {
  return (
    <>
      <Topbar />
      <Modals />
      <Header />
      {/* <Breadcrumb /> */}
      {children}
      <Footer1 />
    </>
  );
}

export default MainLayout;
