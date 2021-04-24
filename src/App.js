import "./App.css";
import Header from "./components/Header.js";
import LeftSideBar from "./components/LeftSideBar.js";
import MainContent from "./components/MainContent.js";
import QuickAccessFiles from "./components/QuickAccessFiles";
import Folders from "./components/Folders";
import Files from "./components/Files";
function App() {
  return (
    <>
      <Header />
      <LeftSideBar />
      <MainContent />
      <QuickAccessFiles />
      <Folders />
      <Files />
    </>
  );
}

export default App;
