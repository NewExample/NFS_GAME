  const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

  start.addEventListener('click', startGame);
  document.addEventListener('keydown', startRun);
  document.addEventListener('keyup', stopRun);

  const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
  }

  const setting = {
    start: false,
    score: 0,
    speed: 3
  }

  function startGame(){
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car); // car будет дочерним элементом в div
    car.classList.add('car')
    requestAnimationFrame(playGame);
  }

  function playGame(){
    if (setting.start) {
      requestAnimationFrame(playGame);
    }
  }

  function startRun(event){
    event.preventDefault(); // Отменяет прокрутку страницы
    keys[event.key] = true;
  }

  function stopRun(event){
    event.preventDefault(); // Отменяет прокрутку страницы
    keys[event.key] = false;
  }