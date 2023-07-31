import styles from "./styles";

function ArrowRightIcon({ ...props }) {
  return (
    <img
      src="ArrowRight.svg"
      alt="Arrow Right"
      {...styles.arrowStyle}
      {...props}
    />
  );
}

export default ArrowRightIcon;
