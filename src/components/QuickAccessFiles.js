import React from "react";
import styled from "styled-components";
import img from "../SVGs/photo1.png";
import img2 from "../SVGs/photo2.png";
import img3 from "../SVGs/photo3.png";
import img4 from "../SVGs/photo4.png";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DescriptionIcon from "@material-ui/icons/Description";

const firstFile = {
  img: img,
  title: "ajp file 1",
};
const secondFile = {
  img: img2,
  title: "nma file 1",
};
const thirdFile = {
  img: img3,
  title: "Untitled Document",
};
const fourthFile = {
  img: img4,
  title: "Untitled Document(2)",
};

function QuickAccessFiles() {
  return (
    <>
      <Container>
        <QuickAccess>Quick access</QuickAccess>
        <LowerContainer>
          <Files
            img={firstFile.img}
            title={firstFile.title}
            type={<DescriptionIcon style={{ color: "blue" }} />}
          />
          <Files
            img={secondFile.img}
            title={secondFile.title}
            type={<PictureAsPdfIcon style={{ color: "red" }} />}
          />
          <Files
            img={thirdFile.img}
            title={thirdFile.title}
            type={<DescriptionIcon style={{ color: "blue" }} />}
          />
          <Files
            img={fourthFile.img}
            title={fourthFile.title}
            type={<PictureAsPdfIcon style={{ color: "red" }} />}
          />
        </LowerContainer>
      </Container>
    </>
  );
}

const Files = (props) => {
  return (
    <>
      <FilesContainer>
        <UpperPortion>
          <img src={props.img} alt='pdf' />
        </UpperPortion>
        <LowerPortion>
          <FileType style={{ padding: "10px", fontSize: "22px" }}>
            {props.type}
          </FileType>
          <FileTitle>{props.title}</FileTitle>
        </LowerPortion>
      </FilesContainer>
    </>
  );
};

export default QuickAccessFiles;
const Container = styled.div`
  margin-left: 250px;
`;
const FilesContainer = styled.div`
  margin-left: 10px;
  margin-right: 4px;
  width: 250px;
  height: 200px;
  background-color: #e6e6e6;
  border-radius: 7px;
  cursor: pointer;
`;
const LowerContainer = styled.div`
  display: flex;
`;
const QuickAccess = styled.h1`
  margin-left: 10px;
  font-size: 14px;
`;
const UpperPortion = styled.div`
  background-color: white;
  height: 65%;
  border: 1px solid #dadce0;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  img {
    height: auto;
    width: 100%;
  }
`;
const LowerPortion = styled.div`
  display: flex;
  background-color: white;
  height: 70px;
  border: 1px solid #dadce0;
  border-top: 0;
  border-radius: 0 0 7px 7px;
`;
const FileType = styled.div``;
const FileTitle = styled.h1``;
