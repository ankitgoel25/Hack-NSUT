import { useState } from 'react';
import 'agora-react-uikit/dist/index.css';
import styles from '../../styles/Agora.module.scss';
import dynamic from 'next/dynamic';

const AgoraUIKit = dynamic(() => import('agora-react-uikit'), {
  ssr: false,
});
const layout = dynamic(
  () => import('agora-react-uikit').then((module) => module.layout),
  {
    ssr: false,
  },
);

const Agora = () => {
  const [videocall, setVideocall] = useState(false);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <h1 className={styles.heading}>Agora React Web UI Kit</h1>
        {videocall ? (
          <>
            <div className={styles.nav}>
              <p className={{ fontSize: 20, width: 200 }}>
                You&apos;re {isHost ? 'a host' : 'an audience'}
              </p>
              <p className={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
              <p className={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </p>
              <p className={styles.btn} onClick={() => {}}>
                Transcript
              </p>
            </div>
            <AgoraUIKit
              rtcProps={{
                appId: 'a10f9b8f0bf54750ad8f0c29bc3ef339',
                channel: 'test',
                token:
                  '006a10f9b8f0bf54750ad8f0c29bc3ef339IAAKxCq4+HeEz4jCPdJhI5kIt0HvvhpoCz9/Q+jRjSPb4Qx+f9gAAAAAEADR1hyr7R0/YgEAAQDtHT9i',
                layout: isPinned ? layout.pin : layout.grid,
              }}
              rtmProps={{ username: username || 'user', displayUsername: true }}
              callbacks={{
                EndCall: () => setVideocall(false),
              }}
            />
          </>
        ) : (
          <div className={styles.nav}>
            <input
              className={styles.input}
              placeholder="nickname"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <h3 className={styles.btn} onClick={() => setVideocall(true)}>
              Start Call
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agora;
