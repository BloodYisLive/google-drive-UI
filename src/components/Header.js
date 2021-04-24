import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
function Header() {
  return (
    <>
      <Container>
        <HeaderLogo>
          <img
            src='https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png'
            alt='Google Drive'
          />
          <span>Drive</span>
        </HeaderLogo>
        <HeaderSearch>
          <HeaderSearchContainer>
            <SearchIcon
              style={{
                fontSize: "40",
                color: "#5f6368",
                margin: "3px",
                padding: "8px",
              }}
            />
          </HeaderSearchContainer>
          <HeaderSearchInput type='text' />
          <HeaderArrowContainer>
            <ArrowDropDownIcon
              style={{
                fontSize: "40",
                color: "#5f6368",
                margin: "3px",
                padding: "8px",
              }}
            />
          </HeaderArrowContainer>
        </HeaderSearch>
        <RightContainer>
          <SupportContainer>
            <HelpOutlineIcon
              style={{
                fontSize: "40",
                color: "#5f6368",
                margin: "3px",
                padding: "8px",
              }}
            />
          </SupportContainer>
          <SettingsContainer>
            <SettingsIcon
              style={{
                fontSize: "40",
                color: "#5f6368",
                margin: "3px",
                padding: "8px",
              }}
            />
          </SettingsContainer>
          <AppContainer>
            <AppsRoundedIcon
              style={{
                fontSize: "40",
                color: "#5f6368",
                margin: "3px",
                padding: "8px",
              }}
            />
          </AppContainer>
          <ProfilePhoto>
            <img
              src='https://lh3.googleusercontent.com/-waf981Uzkjk/X82wDKl4HrI/AAAAAAAAAKc/_cLk5QC66m8S2qjRbOGDKpI8VLC2KiKRwCEwYBhgLKtQDAL1OcqzWPZtajEOoImAr67B1dBoo3O-iBkLd5xaaw0YE_k6tlIxGlgn3_agJpnQ9L0SHm9VCTIlqFLlaqDlrEf3PCrDsDafft3sjBRmk6xgZ-kwMEwZLjvvFN7F1ahdN6x7iCkQdiJxdT0g_Z-KiIRqb52y5qu8AT1UbMZ4pkADtIaJWK2hixzbb1SlAc1FAT17E02rc4R9y5kLJ9UA3uRCH3c2TKMclzS4UVZA0uXKLX21dQ7CX1GAp-UsTef_sXJGqCsBZ-Qs4BlOQvnP_tLfIYnbdoUw6MLOvzVLnKchHjUs8cLKvNzCVOB1kVz28K-HsayTFjJpGAd_JZaLN15vTO1gXIuKIeS5J76sC2GxPqus2g4R0jJryW92bA3dJhFjufCmQ1RtXqd2wu6XkN7Nd8OUyBBhM0ecTSQJk9igRoCDaK7iq5p44Ume0KmsYg-_Ea2aDKP10azmg9Ylbz6LoLIMjpgvqWyxcJbsZ3QCBMfI-2lbAX2P8jEAkouIZdVgbOe0CIlp8nkqsTbOSkoqienVQ5Z50DtpRXCGfe6j8cYaRdV2pIhyNn4gGe0I-iimR8lcwYaIBNdC4dKVpRvYtK0XHfsLlM9RlrOoDC1MDU5oaMMDR_4MG/w140-h140-p/b2e73243bd2a7894b6d7362ab2d8f254.gif'
              alt='Profile'
            />
          </ProfilePhoto>
        </RightContainer>
      </Container>
    </>
  );
}

export default Header;
const Container = styled.div`
  position: sticky;
  padding: 8px;
  display: flex;
  border-bottom: 1px solid #dadce0;
  justify-content: space-between;

  top: 0;
  background-color: #ffffff;
`;
const HeaderLogo = styled.div`
  display: flex;
  padding: 4px 30px 0 12px;
  img {
    height: 40px;
    margin-bottom: 4px;
  }
  span {
    font-size: 22px;
    color: #5f6368;
    position: relative;
    top: 3px;
    padding: 0 10px;
    font-weight: 600;
  }
`;
const HeaderSearch = styled.div`
  position: relative;
  margin-right: 30px;
  width: 50%;
  height: 48px;
  background-color: #f1f3f4;
  border-radius: 6px;
`;
const HeaderSearchContainer = styled.div`
  display: inline-block;
  margin-left: 8px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  :hover {
    background-color: #e3e5e6;
  }
`;
const HeaderArrowContainer = styled.div`
  float: right;
  height: 46px;
  width: 46px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    background-color: #e3e5e6;
  }
`;
const HeaderSearchInput = styled.input`
  position: absolute;
  height: 46px;
  font-size: 15px;
  border: none;
  background-color: #f1f3f4;
  :focus {
    outline: none;
  }
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SupportContainer = styled.div`
  height: 46px;
  width: 46px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    background-color: #e3e5e6;
  }
`;
const SettingsContainer = styled.div`
  height: 46px;
  width: 46px;
  margin-right: 2rem;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    background-color: #e3e5e6;
  }
`;
const AppContainer = styled.div`
  height: 46px;
  width: 46px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    background-color: #e3e5e6;
  }
`;
const ProfilePhoto = styled.div`
  margin-right: 12px;
  img {
    margin: -2px;
    padding: 8px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
