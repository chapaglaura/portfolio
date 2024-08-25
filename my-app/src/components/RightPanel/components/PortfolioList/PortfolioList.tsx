import { PortfolioItem } from '../PortfolioModal/PortfolioModal';
import styles from './PortfolioList.module.scss';

interface PortfolioListProps {
  portfolio: PortfolioItem[];
  onSelectItem: (item: PortfolioItem) => void;
}

export function PortfolioList({ portfolio, onSelectItem }: PortfolioListProps) {
  return (
    <div className={styles.portfolioList}>
      {portfolio.map((item, i) => (
        <button key={`${item.name}-${i}`} onClick={() => onSelectItem(item)} className={styles.portfolioItem}>
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}
