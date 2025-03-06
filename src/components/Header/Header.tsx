import { FC, useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import styles from './Header.module.scss';
import { NAV_TABS_LABELS } from '@/utils/constants';

function getTabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.header}>
      <BottomNavigation className={styles.navigation}>
        <BottomNavigationAction
          value="menu"
          icon={<AppsIcon />}
          className={styles.navigationAction}
        />
        <BottomNavigationAction
          value="back"
          icon={<ReplyIcon />}
          className={styles.navigationAction}
        />
      </BottomNavigation>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className={styles.tabs}
      >
        {NAV_TABS_LABELS.map((label, index) => {
          const props = getTabProps(index);
          return (
            <Tab label={label} {...props} key={index} className={styles.tab} />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default Header;
