import { useContext, useState } from 'react';
import 'agora-react-uikit/dist/index.css';
import styles from '../../styles/Agora.module.scss';
import dynamic from 'next/dynamic';
import { UserContext } from '../../context/UserContext';
import Loader from '../Loader';

const AgoraUIKit = dynamic(() => import('agora-react-uikit'), {
  ssr: false,
});
const layout = dynamic(
  () => import('agora-react-uikit').then((module) => module.layout),
  {
    ssr: false,
  },
);

const Agora = (props) => {
  const { user } = useContext(UserContext);
  const [videocall, setVideocall] = useState(false);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);

  if (user)
    return (
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <h1 className={styles.heading}>Meet Buddy</h1>
          {videocall ? (
            <>
              <div className={styles.nav}>
                <p className={styles.role}>
                  You&apos;re {isHost ? 'a host' : 'an audience'}
                </p>
                <p className={styles.btn} onClick={() => setHost(!isHost)}>
                  Change Role
                </p>
                <p
                  className={styles.btn}
                  onClick={() => setPinned((prev) => !prev)}
                >
                  Change Layout
                </p>
                <p className={styles.btn} onClick={() => {}}>
                  Transcript
                </p>
              </div>
              <div className={styles.agoraContainer}>
                <AgoraUIKit
                  rtcProps={{
                    appId: 'a10f9b8f0bf54750ad8f0c29bc3ef339',
                    channel: props.channel,
                    token: props.token,
                    layout: isPinned ? layout.pin : layout.grid,
                  }}
                  rtmProps={{
                    username: user.displayName,
                    displayUsername: true,
                  }}
                  callbacks={{
                    EndCall: () => setVideocall(false),
                  }}
                />
              </div>
            </>
          ) : (
            <div className={styles.nav}>
              {/* <input
              className={styles.input}
              placeholder="nickname"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            /> */}
              <h3 className={styles.btn} onClick={() => setVideocall(true)}>
                Start Call
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  else return <Loader />;
};

export default Agora;
