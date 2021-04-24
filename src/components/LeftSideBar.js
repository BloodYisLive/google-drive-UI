import React from "react";
import styled from "styled-components";
// import FolderModal from "./FodlerModal";
import { Line } from "rc-progress";
import google_plus from "../SVGs/google_plus.svg";
import BookIcon from "@material-ui/icons/Book";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
function LeftSideBar() {
  // const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <NewButton>
          <img src={google_plus} alt='Plus Sign' />
          <span>New</span>
        </NewButton>
        <NavigationMenu>
          <MyDrive>
            <ArrowRightIcon style={{ color: "#5f6368" }} />
            <BookIcon style={{ color: "#4285F4" }} />
            <span>My Drive</span>
          </MyDrive>
          <ShareWithMe>
            <PeopleAltOutlinedIcon style={{ color: "#5f6368" }} />
            <span>Shared with me</span>
          </ShareWithMe>
          <RecentContainer>
            <AccessTimeOutlinedIcon style={{ color: "#5f6368" }} />
            <span>Recents</span>
          </RecentContainer>
          <StarredContainer>
            <StarBorderOutlinedIcon style={{ color: "#5f6368" }} />
            <span>Starred</span>
          </StarredContainer>
          <BinContainer>
            <DeleteOutlineOutlinedIcon style={{ color: "#5f6368" }} />
            <span>Bin</span>
          </BinContainer>
        </NavigationMenu>
        <LineBreak />
        <CloudContainer>
          <CloudQueueIcon style={{ color: "#5f6368" }} />
          <span>Storage</span>
        </CloudContainer>
        <StorgeContainer>
          <Line
            percent='30'
            strokeWidth='1.5'
            strokeColor='#2079E8'
            trailWidth='1.5'
          />
          <StorageUsed>5 Gb of 15 GB used</StorageUsed>
        </StorgeContainer>
      </Container>
    </>
  );
}

export default LeftSideBar;
const Container = styled.div`
  position: fixed;
  width: 240px;
  height: 100vh;
  padding: 10px 10px 10px 0;
`;
const NewButton = styled.div`
  width: 120px;
  margin-left: 10px;
  box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.75);
  border-radius: 2rem;
  cursor: pointer;
  span {
    position: relative;
    top: -19px;
    padding-left: 9px;
    font-size: 14px;
    font-weight: 600;
  }
  img {
    padding: 4px;
    margin-left: 3px;
    margin-top: 3px;
  }
`;
const NavigationMenu = styled.div`
  margin-top: 10px;
`;
const MyDrive = styled.div`
  padding: 7px 0;
  background-color: #e8f0fe;
  border-radius: 0px 20px 20px 0px;
  span {
    top: -5px;
    padding-left: 20px;
    color: #4285f4;
  }
`;
const ShareWithMe = styled.div`
  padding: 7px 0 7px 25px;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
  span {
    color: #5f6368;
  }
  :hover {
    background-color: #f5f5f5;
  }
`;
const RecentContainer = styled.div`
  padding: 7px 0 7px 25px;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
  span {
    color: #5f6368;
  }
  :hover {
    background-color: #f5f5f5;
  }
`;
const StarredContainer = styled.div`
  padding: 7px 0 7px 25px;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
  span {
    color: #5f6368;
  }
  :hover {
    background-color: #f5f5f5;
  }
`;
const BinContainer = styled.div`
  padding: 7px 0 7px 25px;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
  span {
    color: #5f6368;
  }
  :hover {
    background-color: #f5f5f5;
  }
`;
const LineBreak = styled.hr`
  margin-top: 10px;
`;
const CloudContainer = styled.div`
  margin-top: 10px;
  padding: 7px 0 7px 25px;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
  span {
    color: #5f6368;
  }
  :hover {
    background-color: #f5f5f5;
  }
`;
const StorgeContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  span {
    text-align: left;
  }
`;
const StorageUsed = styled.span`
  padding: 0;
  font-size: 12px;
  color: #5f6368;
  text-align: left;
`;
