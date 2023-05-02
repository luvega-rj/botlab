import React from "react";

function YourBotArmy({ army, handleReleaseBot, handleDeleteBot }) {
  function handleReleaseButtonClick(bot) {
    handleReleaseBot(bot);
  }

  function handleDeleteButtonClick(bot) {
    handleDeleteBot(bot);
  }

  return (
    <div>
      <h1>Your Bot Army</h1>
      <ul>
        {army.map((bot) => (
          <li key={bot.id}>
            <button onClick={() => handleReleaseButtonClick(bot)}>
              Release
            </button>
            <button onClick={() => handleDeleteButtonClick(bot)}>
              X
            </button>
            {bot.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
