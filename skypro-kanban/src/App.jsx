import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import BrowsePopup from "./components/Popups/Browse/Browse";
import ExitPopup from "./components/Popups/Exit/Exit";
import NewCardPopup from "./components/Popups/NewCard/NewCard";
import { useState, useEffect } from "react";
import { cardList, statusList } from "./data";

function App() {
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState(cardList);
  const addCard = () => {
    const newCard = {
      id: cards.length +1,
      topic: "Research",
      title: "ToDO",
      data: new Date().toLocaleDateString(),
      status: statusList[1],
    };
    setCards([...cards, newCard]);
  };
  useEffect (() => { setTimeout(() => setLoading(false), 2000)
  }, [] );
  return (
    <div className="wrapper">
      <ExitPopup />
      <NewCardPopup addCard={addCard}/>
      <BrowsePopup />
      <Header />
      
      {loading ? <p>Загрузка...</p> : (<Main cards={cards} />)}
    </div>
  );
}

export default App;
