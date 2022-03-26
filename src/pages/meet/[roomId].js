import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Agora from '../../components/agora';
import Loader from '../../components/Loader';
import { channels } from '../../utils/channels';

const MeetRoom = () => {
  const router = useRouter();
  const { roomId } = router.query;

  useEffect(() => {
    if (!roomId) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  if (roomId) {
    return (
      <div>
        <Agora
          token={channels[roomId].token}
          channel={channels[roomId].channel}
        />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default MeetRoom;
