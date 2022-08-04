import styles from './Card.module.css'

const Card = () => {
    function createMarkup() {
        return {__html: '<h3>I\'m an H3</h3><p>First &middot; Second</p>'};
      }
      
    return (
        <>
            <div>
                <h2>I'm a card with rich text</h2>
            </div>
            <div className={styles.card_body}  dangerouslySetInnerHTML={createMarkup()} />
        </>
    )
}

export default Card;