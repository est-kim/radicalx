import React from "react";
import { Button } from "@mui/material";
import styles from "./styles";

const PageButton = ({ page, selectedPage, handlePageClick }) => {
  const buttonStyles = styles({ page: page.text, selectedPage }).buttonStyle;

  return (
    <Button
      key={page.text}
      onClick={() => handlePageClick(page.text)}
      {...buttonStyles}
    >
      {page.emoji} <span>{page.text}</span>
    </Button>
  );
};

export default PageButton;
