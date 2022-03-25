import React, { CSSProperties, useState } from 'react';
import AgoraUIKit, { layout } from 'agora-react-uikit';
import 'agora-react-uikit/dist/index.css';
import styles from './Agora.module.scss';

const Agora = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <h1 style={styles.heading}>Agora React Web UI Kit</h1>
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p style={{ fontSize: 20, width: 200 }}>
                You're {~isHost ? 'a host' : 'an audience'}
              </p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
              <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </p>
            </div>
            <AgoraUIKit
              rtcProps={{
                appId: '58def5ad48114fa6b4fcdc3dd08e8e6e',
                channel: 'test',
                layout: layout.grid,
                //   layout: isPinned ? layout.pin : layout.grid
              }}
              rtmProps={{ username: username || 'user', displayUsername: true }}
              callbacks={{
                EndCall: () => setVideocall(false),
              }}
            />
          </>
        ) : (
          <div style={styles.nav}>
            <input
              style={styles.input}
              placeholder="nickname"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <h3 style={styles.btn} onClick={() => setVideocall(true)}>
              Start Call
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agora;
