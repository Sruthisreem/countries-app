import styles from "../ErrorComponent/ErrorComponent.module.css";

/**
 * A component for displaying error message
 */
const ErrorComponent = () => {
  return (
    <div className={styles.error}>
      Failed to fetch the countries. Please try again.
    </div>
  );
};
export default ErrorComponent;
