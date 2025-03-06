import { FC } from 'react';
import Header from '../Header';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar';
import Typography from '@/ui/Typography';
import styles from './Layout.module.scss';
import Divider from '@/ui/Divider';

const Layout: FC = () => {
  return (
    <Box className={styles.layout}>
      <Header />
      <Divider flexItem />
      <Box className={styles.body}>
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Box className={styles.main}>
          <Box display="flex">
            <Box className={styles.tableTitle}>
              <Typography size={18}>Строительно-монтажные работы</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
          </Box>
          <Divider flexItem />
          <Box className={styles.table}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
