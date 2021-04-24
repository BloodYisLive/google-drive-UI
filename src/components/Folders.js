import React from "react";
import styled from "styled-components";
import FolderSharedIcon from "@material-ui/icons/FolderShared";

const folder1 = {
  title: "Test Fodler",
};
const folder2 = {
  title: "Untitled Folder",
};
const folder3 = {
  title: "Study xD",
};

function Folders() {
  return (
    <>
      <Container>
        <FoldersTitle>Folders</FoldersTitle>
        <LowerContainer>
          <Folder title={folder1.title} />
          <Folder title={folder2.title} />
          <Folder title={folder3.title} />
        </LowerContainer>
      </Container>
    </>
  );
}

const Folder = (props) => {
  return (
    <>
      <FolderContainer>
        <FolderSharedIcon
          style={{ color: "#5f6368", padding: "14px", fontSize: "53px" }}
        />
        <FolderTitle>{props.title}</FolderTitle>
      </FolderContainer>
    </>
  );
};

export default Folders;
const Container = styled.div`
  margin-left: 250px;
`;
const FoldersTitle = styled.h1`
  margin-left: 10px;
  font-size: 12px;
  padding: 20px 10px;
`;
const LowerContainer = styled.div`
  display: flex;
`;
const FolderContainer = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 4px;
  width: 250px;
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 7px;
`;
const FolderTitle = styled.h1`
  padding-top: 9px;
`;
