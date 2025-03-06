import { Divider, DividerProps } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../colors';

const StyledDivider = styled((props: DividerProps) => <Divider {...props} />)({
  '&&': {
    borderColor: Colors.black03,
  },
});

export default StyledDivider;
