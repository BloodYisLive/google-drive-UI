import React from "react";
import styled from "styled-components";
import file1 from "../SVGs/file1.png";
import file2 from "../SVGs/file2.png";
import file3 from "../SVGs/file3.png";
import file4 from "../SVGs/file4.png";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DescriptionIcon from "@material-ui/icons/Description";
function Files() {
  const firstFile = {
    img: file1,
    title: "ajp-5(186080307043)",
  };
  const secondFile = {
    img: file2,
    title: "ds_basic",
  };
  const thirdFile = {
    img: file3,
    title: "ds_linked-list",
  };
  const fourthFile = {
    img: file4,
    title: "ds_sort_hash",
  };

  return (
    <>
      <Container>
        <FilesTitle>Files</FilesTitle>
        <LowerContainer>
          <File
            img={firstFile.img}
            title={firstFile.title}
            type={<PictureAsPdfIcon style={{ color: "red" }} />}
          />
          <File
            img={secondFile.img}
            title={secondFile.title}
            type={<DescriptionIcon style={{ color: "blue" }} />}
          />
          <File
            img={thirdFile.img}
            title={thirdFile.title}
            type={<DescriptionIcon style={{ color: "blue" }} />}
          />
          <File
            img={fourthFile.img}
            title={fourthFile.title}
            type={<DescriptionIcon style={{ color: "blue" }} />}
          />
        </LowerContainer>
      </Container>
    </>
  );
}

const File = (props) => {
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
export default Files;
const Container = styled.div`
  margin-left: 250px;
`;
const FilesTitle = styled.h1`
  margin-left: 10px;
  font-size: 12px;
  padding: 20px 10px;
`;
const LowerContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;
const FilesContainer = styled.div`
  margin-left: 10px;
  margin-right: 4px;
  width: 250px;
  height: 250px;
  border: 1px solid #dadce0;
  border-radius: 7px;
`;
const UpperPortion = styled.div`
  height: 80%;
`;
const LowerPortion = styled.div`
  display: flex;
`;
const FileType = styled.div``;
const FileTitle = styled.h1``;
