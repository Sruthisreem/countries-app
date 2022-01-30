import * as React from "react";
import Header from "../Header/Header";
import style from "../Layout/Layout.module.css";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main className={style.layout}>{children}</main>
    </>
  );
}
