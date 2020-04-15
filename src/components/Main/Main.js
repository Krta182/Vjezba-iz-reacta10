import React from 'react';
import styles from './Main.module.css';
import AddForm from '../AddForm/AddForm';
import CardList from '../CardList/CardList';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <main className={styles.containerFlexColumn}>
      <AddForm onAddCards={props.onAddCards} />
      <CardList
        cards={props.cards}
        onRemoveCard={props.onRemoveCard}
        onUpdateCard={props.onUpdateCard}
        onBookmarkCard={props.onBookmarkCard}
      />
    </main>
  );
}

Main.propTypes = {
  onAddCards: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onUpdateCard: PropTypes.func,
  onBookmarkCard: PropTypes.func,
  cards: PropTypes.array,
}

export default Main;
