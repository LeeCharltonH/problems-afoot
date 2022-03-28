import styles from './card.module.scss';

const Card = props => {
    return <div className={styles.cardContainer}>
        {props.children}
    </div>
};

export default Card;