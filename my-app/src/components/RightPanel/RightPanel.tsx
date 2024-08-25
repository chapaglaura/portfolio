import { useState } from 'react';
import styles from './RightPanel.module.scss';
import { PortfolioList } from './components/PortfolioList/PortfolioList';
import { PortfolioItem, PortfolioModal } from './components/PortfolioModal/PortfolioModal';

export function RightPanel() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem>();
  const portfolio: PortfolioItem[] = [
    {
      name: 'Partify',
      description:
        "An upgrade to Spotify's current features. Create a room with your friends, add songs to a queue and upvote/downvote them to pick what will be up next.",
      url: 'https://chapaglaura.github.io/Project-1/',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: 'Disney Dazzling Definitions',
      description:
        'From Ancient Greece to the jungle madness, test your Disney knowledge with this fun and entertaining quiz.',
      url: 'https://chapaglaura.github.io/TriviaGame/',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: 'Datamania',
      description:
        'The main purpose of this app is to look for random data of specific dog breeds, but you can add anything to the options to get a random movie with that keyword and GIFs related to it as well.',
      url: 'https://chapaglaura.github.io/Giftastic/',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: 'Hangman (African Safari)',
      description: 'You know the game. Try to guess the animal without exhausting your guesses.',
      url: 'https://chapaglaura.github.io/Word-Guess-Game/',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: 'Star Wars RPG',
      description:
        'Fight against your enemies as a Star Wars character. Choose between Obi-Wan Kenobi, Luke Skywalker, Darth Sidious or Darth Maul, and try to defeat them without getting defeated first.',
      url: 'https://chapaglaura.github.io/unit-4-game/',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: '',
      description: '',
      url: '',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: '',
      description: '',
      url: '',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: '',
      description: '',
      url: '',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
    {
      name: '',
      description: '',
      url: '',
      thumbnail: '',
      date: new Date('2018-05-20'),
    },
  ];

  return (
    <div className={styles.rightPanel}>
      <PortfolioList portfolio={portfolio} onSelectItem={(item) => setSelectedItem(item)} />
      {selectedItem && (
        <PortfolioModal selectedItem={selectedItem} onClose={() => setSelectedItem(undefined)} />
      )}
    </div>
  );
}
