import { FC, useCallback, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, Button } from '@mui/material';
import Typography from '@/ui/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@/ui/Divider';
import styles from './Sidebar.module.scss';
import { PROJECTS } from '@/utils/constants';

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string>('СМР');

  const id = isOpen ? 'custom-menu-popper' : undefined;

  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleItemClick = useCallback((text: string) => {
    setSelectedItem(text);
  }, []);

  return (
    <Box className={styles.sidebar}>
      <Button
        className={styles.button}
        aria-describedby={id}
        onClick={handleClick}
      >
        <Box className={styles.buttonContent}>
          <Typography size={14}>Название проекта</Typography>
          <Typography size={10}>Аббревиатура</Typography>
        </Box>
        <ExpandMoreIcon />
      </Button>
      <Divider flexItem />
      {isOpen && (
        <List className={styles.list}>
          {PROJECTS.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                className={styles.listItem}
                selected={selectedItem === text}
                onClick={() => handleItemClick(text)}
              >
                <Typography size={22}>
                  <DashboardIcon />
                </Typography>
                <Typography size={14}>{text}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Sidebar;
