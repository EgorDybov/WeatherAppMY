import type React from "react";

import Header from "../header/Header";

import styles from "./index.module.scss";

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
