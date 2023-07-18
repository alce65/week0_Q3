const main = () => {
  console.log('Loaded');

  const dialogGreetingsElement = document.querySelector('#dialog-greetings');
  const hideButtonElement = document.querySelector('#hide-button');
  const showButtonElement = document.querySelector('#show-button');

  const handleClick = (event) => {
    if (event.target.id === 'show-button') {
      dialogGreetingsElement.showModal();
      return;
    }
    dialogGreetingsElement.close();
  };

  hideButtonElement.addEventListener('click', handleClick);
  showButtonElement.addEventListener('click', handleClick);
};

document.addEventListener('DOMContentLoaded', main);
