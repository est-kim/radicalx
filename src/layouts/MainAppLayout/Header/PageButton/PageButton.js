import React from "react";
import { Button } from "@mui/material";
import styles from "./styles";

const PageButton = ({ page, selectedPage, handlePageClick }) => {
  return (
    <Button
      key={page}
      onClick={() => handlePageClick(page)}
      {...styles({ page, selectedPage }).buttonStyle}
    >
      {page}
    </Button>
  );
};

export default PageButton;
