import { useState } from 'react';

function BotCollection(props) {
  const { bots } = props;
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const dischargeBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((b) => b !== bot));
  };

  const deleteBot = (bot) => {
    fetch(`/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setEnlistedBots(enlistedBots.filter((b) => b !== bot));
      })
      .catch((error) => console.log(error));
  };

  const botCards = bots.map((bot) => (
    <div className="bot-card" key={bot.id}>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
      <p>{bot.description}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  ));

  const enlistedBotCards = enlistedBots.map((bot) => (
    <div className="bot-card" key={bot.id}>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
      <p>{bot.description}</p>
      <button onClick={() => dischargeBot(bot)}>Discharge</button>
      <button className="delete-button" onClick={() => deleteBot(bot)}>
        X
      </button>
    </div>
  ));

  return (
    <div className="bot-collection">
      <h2>Bots available for enlistment:</h2>
      <div className="bot-cards">{botCards}</div>
      <h2>Your Bot Army:</h2>
      <div className="bot-cards">{enlistedBotCards}</div>
    </div>
  );
}

export default BotCollection;
