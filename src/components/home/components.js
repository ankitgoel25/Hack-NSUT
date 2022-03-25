import styled from 'styled-components';

export const Heading = styled.span`
  font-family: 'Sora', sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #000411;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const SubHeading = styled.p`
  font-family: 'Sora', sans-serif;
  color: #35858b;
  font-size: 18px;
  font-weight: 600;
  width: 99%;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 17px;
  outline: none;
  border-color: red;
  border-radius: 10px;
  background: #aefeff35;
  font-family: 'Sora', sans-serif;
  margin-bottom: 15px;
  border: 2px solid transparent;
  padding: 8px 10px;
  border: 2px solid #160c2811;

  &:hover,
  &:focus,
  &:active {
    color: #160c28;
    background: #aefeff35;
    border: 2px solid #160c28;
    box-shadow: none;
  }
`;

export const StyledSubmitButton = styled.button`
  height: 48px;
  border-radius: 20px;
  font-family: 'Sora', sans-serif;
  background: #4fbdba;
  color: #160c28;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: unset;
  border: 2px solid transparent;
  text-transform: none;
  padding: 6px 12px;

  &:hover,
  &:focus,
  &:active {
    color: #160c28;
    background: #4fbdba;
    border-color: unset;
  }

  &:hover {
    border: 2px solid #160c28;
  }
`;

export const RecentMeetings = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 20px;
  font-family: 'Sora', sans-serif;
  color: #160c28;
  font-size: 20px;
  font-weight: 400;
  background: #aefeff35;
  cursor: pointer;
  padding: 5px 20px;

  &:hover {
    background: #4fbdba;
  }
`;
