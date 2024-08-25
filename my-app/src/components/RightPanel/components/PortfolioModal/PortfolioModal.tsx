import styles from './PortfolioModal.module.scss';

export interface PortfolioItem {
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  date: Date;
}

interface PortfolioModalProps {
  selectedItem: PortfolioItem;
  onClose: () => void;
}

export function PortfolioModal({ selectedItem, onClose }: PortfolioModalProps) {
  return (
    <div className={styles.portfolioModal}>
      <div className={styles.modalOverlay} onClick={onClose}></div>
      <div className={styles.modalContainer}>
        <h3>{selectedItem.name}</h3>
        <p>
          <em>Description:</em> {selectedItem.description}
        </p>
        <p>
          <em>Year:</em> {selectedItem.date?.toDateString()}
        </p>
        <a href={selectedItem.url} target="_blank" rel="noreferrer">
          Go to project
        </a>
      </div>
    </div>
  );
}
