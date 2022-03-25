import styles from '../styles/Home.module.scss';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  color: red;

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Paragraph hoverColor="black">
        I am a component made with Styled Components
      </Paragraph>
      <Typography variant="h1" color="red" component="h2">
        h1. Heading
      </Typography>
    </div>
  );
}
