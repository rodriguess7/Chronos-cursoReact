import styles from "./styles.module.css";
type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>
    <div className={styles.content}>{children}</div>
  </div>
);
