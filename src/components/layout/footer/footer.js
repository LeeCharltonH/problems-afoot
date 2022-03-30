import styles from "./footer.module.scss";

const Footer = (props) => {

    const date = new Date();


  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAddresses}>
          <div>
            Waterside Therapy
            <br />
            The Island
            <br />
            Hardwick
            <br />
            Witney
            <br />
            OX29 7QF
          </div>
          <div>
            The Old Tannery
            <br />
            Hensington Road
            <br />
            Woodstock
            <br />
            OX20 1JH
          </div>
        </div>
        <div className={styles.footerContact}>
          <p>Alison Charlton BSc(Hons) MCPod PGDip MIHM</p>
          <p>
            Tel: 07739 354 447
            <br />
            Email: alison@problemsafoot.com
          </p>
        </div>
      </div>
      <div className={styles.footerCopyright}>© {date.getFullYear()} Problems Afoot</div>
    </footer>
  );
};

export default Footer;
