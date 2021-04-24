import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ViewListIcon from "@material-ui/icons/ViewList";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function MainContent() {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();

    // Create a folder in the database
    setName("");
    closeModal();
  }
  const customStyles = {
    content: {
      height: "12.5rem",
      width: "25rem",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      padding: "20px",
      overflow: "hidden",
    },
  };
  return (
    <>
      <Container>
        <MainHeader>
          <MyDrive onClick={openModal}>
            <span>My Drive</span>
            <ArrowDropDownIcon
              style={{
                fontSize: "40",
                color: "#5f6368",
                // margin: "3px",
                padding: "6px",
              }}
            />
          </MyDrive>
          <IconsContainer>
            <ListIconContainer>
              <ViewListIcon
                style={{
                  fontSize: "40",
                  color: "#5f6368",
                  margin: "3px",
                  padding: "8px",
                }}
              />
            </ListIconContainer>
            <InfoIconContainer>
              <InfoOutlinedIcon
                style={{
                  fontSize: "40",
                  color: "#5f6368",
                  margin: "3px",
                  padding: "8px",
                }}
              />
            </InfoIconContainer>
          </IconsContainer>
        </MainHeader>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
        >
          <NewFolder>New folder</NewFolder>
          <Form onSubmit={handleSubmit}>
            <FolderName
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ButtonContainer>
              <Cancel onClick={closeModal}>CANCEL</Cancel>
              <Create type='submit'>CREATE</Create>
            </ButtonContainer>
          </Form>
        </Modal>
      </Container>
    </>
  );
}

export default MainContent;
const Container = styled.div`
  margin-left: 250px;
  height: 48px;
  background-color: white;
`;
const MainHeader = styled.div`
  position: fixed;
  // padding: 0px 8px 8px 8px;
  width: 81.5vw;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #dadce0;
`;
const MyDrive = styled.div`
  border-radius: 10px;
  cursor: pointer;
  span {
    padding-left: 10px;
    top: -12px;
    font-size: 18px;
    font-weight: 400;
  }
  :hover {
    background-color: #f1f3f4;
  }
`;
const IconsContainer = styled.div`
  display: flex;
`;
const ListIconContainer = styled.div`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #e0e0e0;
  }
`;
const InfoIconContainer = styled.div`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #e0e0e0;
  }
`;
const NewFolder = styled.h2`
  font-weight: 400;
  font-size: 20px;
`;
const FolderName = styled.input`
  width: 100%;
  height: 1.7rem;
`;
const Form = styled.form``;
const ButtonContainer = styled.div`
  display: flex;
  margin: 25px 10px;
  justify-content: flex-end;
`;
const Cancel = styled.button`
  padding: 10px 18px;
  // margin: 25px 25px 0 25px;
  background-color: white;
  font-size: 12px;
  font-weight: 600;
  border: none;
  color: #27282b;
  border-radius: 2px;
  cursor: pointer;
`;
const Create = styled.button`
  padding: 8px 18px;
  background-color: #4285f4;
  font-size: 12px;
  font-weight: 600;
  border: none;
  color: white;
  border-radius: 2px;
  cursor: pointer;
`;
