import styles from "./book.module.scss";
import Button from "../button/button";

const Book = (props) => {
  return (
    <div className={styles.bookNowContainer}>
      <h2>Book An Appointment</h2>
      <p>Find the next available appointment by clicking the button below.</p>
      <a
        href="https://problems-afoot.selectandbook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Book Now</Button>
      </a>
      <p>Alternatively, reach out directly using the contact details below.<br /><br />alison@problemsafoot.com<br />07739 354 447</p>
    </div>
  );
};

export default Book;
