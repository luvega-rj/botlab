import React, { useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots data from local db.json file
  fetch("http://localhost:8001/bots")
    .then((response) => response.json())
    .then((data) => setBots(data.bots));

  const addBotToArmy = (id) => {
    // Check if bot is already in army
    if (!army.some((bot) => bot.id === id)) {
      // Find bot by ID in bots array
      const botToAdd = bots.find((bot) => bot.id === id);

      // Add bot to army
      setArmy([...army, botToAdd]);
    }
  };

  const removeBotFromArmy = (id) => {
    // Remove bot from army
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    // Remove bot from bots array
    setBots(bots.filter((bot) => bot.id !== id));

    // Remove bot from army if it's in there
    setArmy(army.filter((bot) => bot.id !== id));
  };

  return (
    <div className="App">
      <h1>Bot Lab</h1>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      <YourBotArmy army={army} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;
