import DOMPurify from "isomorphic-dompurify";
import styles from "./Card.module.css";

const Card = ({ richTextString }) => {
  return (
    <>
      <div>
        <h2>I'm a card with rich text</h2>
      </div>
      <div
        className={styles.card_body}
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(richTextString)}}
      />
    </>
  );
};

export default Card;
