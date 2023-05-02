## Bot Lab
Bot Lab is a React app that lets you browse a collection of bots and enlist them into your army. The app consists of two main components: BotCollection and YourBotArmy.

## BotCollection
The BotCollection component displays a list of bots that can be enlisted, along with their name, avatar, description, and an "Enlist" button. When the user clicks the "Enlist" button, the bot is added to their army.

The BotCollection component receives an array of bot objects as a prop, which it maps into individual bot cards. It also maintains a state of enlisted bots, which is initially empty. When a bot is enlisted, it is added to the state using the useState hook. The enlisted bots are displayed in another section of the component, with a "Discharge" button that removes them from the army, and a "Delete" button that deletes them from the server.

The BotCollection component communicates with the server using the fetch API. When a bot is deleted, a DELETE request is sent to the /bots/:id endpoint, where :id is the ID of the bot to be deleted.

## YourBotArmy
The YourBotArmy component displays a list of bots that have been enlisted, along with their name, avatar, and a "Discharge" button. When the user clicks the "Discharge" button, the bot is removed from their army.

The YourBotArmy component receives an array of enlisted bot objects as a prop, which it maps into individual bot cards. When a bot is discharged, it is removed from the state using the useState hook.

## App
The App component is the top-level component that renders both BotCollection and YourBotArmy. It maintains the state of the bots collection and the enlisted bots using the useState hook, and fetches the bots data from the server using the fetch API. It also defines the addBotToArmy, removeBotFromArmy, and dischargeBot functions, which are passed down to the child components as props.

## Installation
To run the app locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/bot-lab.git
Install the dependencies: cd bot-lab && npm install
Start the server: npm start
Open the app in your browser: http://localhost:3000
Note that you will need to have Node.js and npm installed on your system.

##  Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you want to contribute code, please fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.