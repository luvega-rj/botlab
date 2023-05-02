import { useEffect, useState }from 'react';
import React from 'react'


function BotCollection() {
    const [bots, setBots] = useState([]);
    const [listedBots, setlistedBots] = useState([]);
     const [filter, setFilter] = useState('');
    useEffect(() => {
        fetch ("https://new-repository.onrender.com/bots")
        .then(response => response.json())
        .then(data => setBots(data))
        .catch(err => console.log(err))
    }, []);
    

     const listedBot = (bot) => {
    if (!listedBots.includes(bot)) {
      setlistedBots([...listedBots, bot]);
    }
  };
   const releaseBot = (bot) => {
    setlistedBots(listedBots.filter(b => b.id !== bot.id));
  };

  
   const deleteBot = (bot) => {
    fetch(`https://new-repository.onrender.com/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(b => b.id !== bot.id));
        setlistedBots(listedBots.filter(b => b.id !== bot.id));
      })
      .catch(err => console.log(err));
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredBots = filter
    ? bots.filter(bot => bot.bot_class.toLowerCase().includes(filter.toLowerCase()))
    : bots;
  return (
     <div className='TABLE'>
      <h1>Bots</h1>
       <div>
        <label htmlFor="filter" className='FILTER1'>Filter by bot class:</label>
        <input type="text" id="filter" value={filter} onChange={handleFilterChange} className='INPUT1' />
      </div>
      <table className='TABLE1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Health</th>
            <th>Damage</th>
            <th>Armor</th>
            <th>bot_class</th>
            <th>Avatar URL</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Enlist</th>
          </tr>
        </thead>
      
  
                <tbody>
          {filteredBots.map(bot => (
           <tr key={bot.id}>
              <td>{bot.id}</td>
              <td>{bot.name}</td>
              <td>{bot.health}</td>
              <td>{bot.damage}</td>
              <td>{bot.armor}</td>
              <td>{bot.bot_class}</td>
              <td><img src={bot.avatar_url} alt={bot.name} /></td>
              <td>{bot.created_at}</td>
              <td>{bot.updated_at}</td>
              <td>
                {!listedBots.includes(bot) && (
                  <button onClick={() => listedBot(bot)} className='BTN1'>list</button>
                )}

                {listedBots.includes(bot) && (
                  <button onClick={() => releaseBot(bot)} className='BTN2'>Release</button>
                )}
              </td>
               <td>
                <button onClick={() => deleteBot(bot)} className='BTN3'>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <div style={{ float: 'right', marginTop: '20px' }}>
        
        <YourBotArmy bots={listedBots} releaseBot={releaseBot} />
      </div>
    </div>
  );
}

 function YourBotArmy({ bots, releaseBot }) {
  return (
    <div  className='UL1'>
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
             <img src={bot.avatar_url} alt={bot.name} />
            {bot.name}
              {bot.name}
              {bot.health}
              {bot.damage}
              {bot.armor}
              {bot.bot_class}
              {bot.created_at}
              {bot.updated_at}
             <button onClick={() => releaseBot(bot)} className='BTN4'>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
        };
export default BotCollection;