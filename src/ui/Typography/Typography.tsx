import styled from 'styled-components';

const Typography = styled('span')<{ size?: number; weight?: number }>`
  font-size: ${({ size }) => `${size}px` || '14px'};
  line-height: ${({ size }) => (size ? `${size + 2}px` : '16px')};
  font-weight: ${({ weight }) => weight || 400};
`;

export default Typography;
