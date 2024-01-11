import Link from 'next/link';
import styles from "@/app/styles/common.module.css"; // Import your CSS module

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error_page}>
        <h2 className={styles.error_heading}>404</h2>
        <h3 className={styles.error_subheading}>Not Found</h3>
        <p className={styles.error_message}>Sorry, The page you are requested is not found.</p>
        <Link href="/">
           Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
