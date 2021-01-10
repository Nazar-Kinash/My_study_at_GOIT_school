import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
	return <p className={styles.Error}>{error}</p>;
};

export default Error;
