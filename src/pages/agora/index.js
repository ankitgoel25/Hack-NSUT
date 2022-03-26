import React, { CSSProperties, useState } from 'react';
import AgoraUIKit, { layout } from 'agora-react-uikit';
import 'agora-react-uikit/dist/index.css';
import styles from './Agora.module.scss';


const Agora = () => {

  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState('User');

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <h1 className={styles.heading}>Meet Buddy</h1>
        {videocall ? (<>
          <div className={styles.nav}>
            <p className={styles.role}>{isHost && isHost ? (<p>You're Host</p>) : (<p>You're Audience</p>)} </p>
            <p className={styles.btn} onClick={() => setHost(!isHost)}>Change Role</p>
            <p className={styles.btn} onClick={() => setPinned(!isPinned)}>Change Layout</p>
          </div>
          <AgoraUIKit
          styles={{height: '90vh', overflowY: scroll}}
            rtcProps={{
              appId: 'a10f9b8f0bf54750ad8f0c29bc3ef339',
              channel: 'test',
                layout: isPinned ? layout.pin : layout.grid,
                token: '006a10f9b8f0bf54750ad8f0c29bc3ef339IAAKxCq4+HeEz4jCPdJhI5kIt0HvvhpoCz9/Q+jRjSPb4Qx+f9gAAAAAEADR1hyr7R0/YgEAAQDtHT9i'

            }}
            rtmProps={{ username: username || 'user', displayUsername: true }}
            callbacks={{
              EndCall: () => setVideocall(false),
            }} />
            
            </>
        ) : (
          <div className={styles.nav}>
            <input className={styles.input} placeholder='nickname' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <h3 className={styles.btn} onClick={() => setVideocall(true)}>Start Call</h3>
          </div>
        )}
      </div>
    </div>
  )
}



export default Agora