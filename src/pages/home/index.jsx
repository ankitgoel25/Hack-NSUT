import { useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { StyledSubmitButton } from "./components";
import { useSnackbar } from "notistack";
import { Collapse, Button, Avatar } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import HomeView from "./views/homeView";

const Wrapper = styled.div`
  width: 100vw;
  padding: 25px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #072227;
`;

const StyledSignoutButton = styled(Button)`
  height: 50px;
  border-radius: 40px;
  font-family: "Sora", sans-serif;
  background: #4fbdba;
  color: #072227;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border: 2px solid transparent;
  text-transform: none;

  &:hover,
  &:focus,
  &:active {
    color: #072227;
    background: #efcb68;
    border-color: unset;
  }

  &:hover {
    border: 2px solid #072227;
  }
`;

const TopNavBar = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 80px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 3px solid #000411;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  margin-top: 80px;
  display: flex;

  .leftContainer {
    width: 24%;
    height: 100%;
    border-right: 3px solid #072227;
    padding: 20px 0;
    text-align: center;

    .logo {
      width: 82%;
    }

    .userDetails {
      margin-top: 30px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        font-family: "Sora", sans-serif;
        color: #072227;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      p {
        font-family: "Sora", sans-serif;
        color: #072227;
        font-size: 17px;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
  }
  .rightContainer {
    width: 76%;
    height: 100%;
    padding: 30px;
    display: grid;
    grid-template-columns: 48.5% 48.5%;
    grid-template-rows: 100%;
    column-gap: 3%;

    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .option {
        height: 47%;
        width: 100%;
        border-radius: 20px;
        background-color: #aeb7b3;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;

        .content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: top;
          width: 100%;
        }
      }
    }

    .right {
      border-radius: 20px;
      background-color: #aeb7b3;
      display: flex;
      padding: 20px 30px;
      flex-direction: column;
      justify-content: top;
      align-items: center;
      width: 100%;
      height: 100%;
      max-height: 100%;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 10px;
        background: #e1efe6;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #aeb7b3;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #000411;
      }
    }
  }
`;

const Home = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user, signOutUser } = useContext(UserContext);
  // const meetingContext = useContext(MeetingContext);
  // const { endMeeting } = meetingContext;
  const [view, setView] = useState("home");

  // useEffect(() => {
  //   endMeeting();
  // }, []);

  if (user)
    return (
      <Wrapper>
        <HomeWrapper>
          <TopNavBar>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StyledSignoutButton
                type="default"
                size="large"
                onClick={async () => {
                  await signOutUser();
                }}
              >
                <AiOutlineLogout size={30} />
                &nbsp;&nbsp;SignOut
              </StyledSignoutButton>
              <Avatar
                size={55}
                sx={{ width: 55, height: 55 }}
                src={
                  user.userImage
                    ? user.userImage
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
              />
            </div>
          </TopNavBar>
          <BottomContainer>
            <div className="leftContainer">
              <img className="logo" alt="logo" src="/images/Logo.png" />
              <div className="userDetails">
                <span className="title">User Details</span>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <StyledSubmitButton
                  style={{ marginTop: "10px", width: "70%" }}
                  onClick={() => {
                    navigator.clipboard.writeText(user.id).then(() => {
                      enqueueSnackbar("User ID copied", {
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center",
                        },
                        TransitionComponent: Collapse,
                        variant: "success",
                      });
                    });
                  }}
                >
                  Share ID&nbsp;&nbsp;
                  <BsFillShareFill size={20} />
                </StyledSubmitButton>
              </div>
            </div>
            <div className="rightContainer">
              <HomeView />
            </div>
          </BottomContainer>
        </HomeWrapper>
      </Wrapper>
    );
  else return <></>;
};

export default Home;
