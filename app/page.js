import styles from "./../styles/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className={styles.Title}>Women Power!</h1>
      <Image src="/images/post2.png" alt="Large Image" width={200} height={200} />
    </div>
  );
}
