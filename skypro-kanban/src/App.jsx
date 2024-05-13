import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import BrowsePopup from "./components/Popups/Browse/Browse";
import ExitPopup from "./components/Popups/Exit/Exit";
import NewCardPopup from "./components/Popups/NewCard/NewCard";

function App() {
  return (
    <div className="wrapper">
      <ExitPopup />
      <NewCardPopup />
      <BrowsePopup />
      <Header />
      <Main />
    </div>
  );
}

export default App;
