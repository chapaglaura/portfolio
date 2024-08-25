import styles from './MainPanel.module.scss';

import { LeftPanel } from '../LeftPanel/LeftPanel';
import { RightPanel } from '../RightPanel/RightPanel';

export function MainPanel() {
  return (
    <div className={styles.mainPanel}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
