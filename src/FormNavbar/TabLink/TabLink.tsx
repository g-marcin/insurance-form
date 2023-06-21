import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./tabLink.module.css";

type TabLinkProps = {
  address: string;
};

export const TabLink: FC<TabLinkProps> = ({ address }) => {
  return (
    <NavLink
      to={`/${address}`}
      className={({ isActive, isPending }) => (isPending ? styles["pending"] : isActive ? styles["active"] : "")}
    >
      {address}
    </NavLink>
  );
};
