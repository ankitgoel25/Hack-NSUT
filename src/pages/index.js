import styles from '../styles/Home.module.scss';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  color: red;

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export default function Home() {
  const { user, signOutUser } = useContext(UserContext);

  if (user)
    return (
      <div className={styles.container}>
        <Paragraph hoverColor="black">
          I am a component made with Styled Components
        </Paragraph>
        <Typography variant="h1" color="medBlue" component="h2">
          h1. Heading
        </Typography>
        <Button onClick={() => signOutUser()}>Logout</Button>
      </div>
    );
  else return <></>;
}
