const randomWeather = "Cold";
const correctAnswer = "Wear Winter Boots";
const correctAnswer2 = "Wear Sneakers";
const correctAnswerGame3 = "correct3";
let playersScores = {};
let randomIndex;
let selectedAvatar = null;

/* Thêm các đoạn mã sau vào file JavaScript của bạn */
function togglePlayerInput() {
  var playerInputContainer = document.getElementById("player-input-container");
  if (playerInputContainer.style.display === "none" || playerInputContainer.style.display === "") {
      playerInputContainer.style.display = "block";
  } else {
      playerInputContainer.style.display = "none";
  }
}

function addPlayer() {
  const playerNameInput = document.getElementById('player-name-input');
  const playerName = playerNameInput.value.trim();

  if (playerName !== '') {
    // Thêm người chơi vào danh sách
    if (!playersScores[playerName]) {
      // Lưu trữ đường dẫn avatar được chọn
      const playerAvatarInput = document.getElementById('player-avatar-input');
      if (playerAvatarInput.files.length > 0) {
        const file = playerAvatarInput.files[0];
        const reader = new FileReader();

        reader.onload = function () {
          // Lưu đường dẫn avatar vào danh sách người chơi
          playersScores[playerName] = { score: 0, avatar: reader.result };
          updateScoreboard();
          updateLocalStorage();
        };

        reader.readAsDataURL(file);
      } else {
        // Nếu không có avatar được chọn, sử dụng avatar mặc định hoặc hiển thị một thông báo
        playersScores[playerName] = { score: 0, avatar: "./images/default-avatar.png" };
        updateScoreboard();
        updateLocalStorage();
      }

      playerNameInput.value = '';
      playerAvatarInput.value = ''; // Reset giá trị của input avatar
    } else {
      alert('Người chơi đã tồn tại!');
    }
  } else {
    alert('Vui lòng nhập tên người chơi!');
  }
}

// Thêm hàm cập nhật local storage
function updateLocalStorage() {
  localStorage.setItem("playersScores", JSON.stringify(playersScores));
}






document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("question").innerText = ``;

  // Lấy dữ liệu từ localStorage khi trang được tải lại
  const storedScores = localStorage.getItem("playersScores");
  if (storedScores) {
    playersScores = JSON.parse(storedScores);
    updateScoreboard();
  }

  // Hiển thị background trước khi chọn câu trả lời
  setRandomQuestion();

  const answerElements = document.querySelectorAll(".answer");
  answerElements.forEach(answerElement => {
    answerElement.addEventListener("click", function () {
      playButtonClickSound();
     
      const selectedAnswer = this.getAttribute("data-answer");

      swal({
        title: "Bạn chắc chắn chọn đáp án này?",
        icon: "warning",
        buttons: ["Không", "Có"],
      }).then((confirm) => {
        if (confirm) {
          let selectedCorrectAnswer;
          
          if (randomIndex === 0) {
            selectedCorrectAnswer = correctAnswer;
          } else {
            selectedCorrectAnswer = correctAnswer2;
          }

          if (selectedAnswer === selectedCorrectAnswer) {
            displayCorrectMessage(() => {
              getPlayerName();
            });
          } else {
            displayWrongMessage(() => {
              getPlayerName();
            });
          }
        }
      });
    });
  });

  // Gắn sự kiện click cho nút refresh
  document.getElementById("refresh-button").addEventListener("click", function () {
    // Xóa điểm và cập nhật bảng xếp hạng
    playersScores = {};
    localStorage.removeItem("playersScores");
    updateScoreboard();
    setRandomQuestion(); // Đảm bảo là câu hỏi mới sau khi nhấn nút refresh
  });
});

function setRandomQuestion() {
  // Lựa chọn ngẫu nhiên giữa 0 và 1
  randomIndex = Math.round(Math.random());
  console.log(randomIndex);
  let questionImagePath, selectedCorrectAnswer, characterImgPath, answerImages;

  if (randomIndex === 0) {
    // Nếu randomIndex là 0, chọn background và câu trả lời cho câu hỏi 1
    questionImagePath = './images/background-muadong-game1.jpg';
    selectedCorrectAnswer = correctAnswer;
    characterImgPath = './images/trochoi1.gif';
    answerImages = ['./images/giaymuadong.png', './images/depmuahe.png', './images/depmuathu.png'];
  } else {
    // Nếu randomIndex là 1, chọn background và câu trả lời cho câu hỏi 2
    questionImagePath = './images/background-muahe-game1.jpg';
    selectedCorrectAnswer = correctAnswer2;
    characterImgPath = './images/trochoi1-nong.gif';
    answerImages = ['./images/giaymuadong1.png', './images/giaymuadong2.png', './images/depmuahe1.png'];
  }

  // Đặt background cho câu hỏi
  const characterImage = document.getElementById('image-character-game1');
  characterImage.src = characterImgPath;

  const mainQuestion = document.querySelector('.main-question');
  mainQuestion.style.backgroundImage = `url(${questionImagePath})`;

  // Đặt câu trả lời cho câu hỏi
  document.getElementById('question').innerText = selectedCorrectAnswer;

  // Cập nhật các câu trả lời trong answers-container nếu cần thiết
  const answerElements = document.querySelectorAll(".answer");
  answerElements.forEach((answerElement, index) => {
    const imgElement = answerElement.querySelector("img");
    imgElement.src = answerImages[index];
  });

  // Cập nhật các giá trị trong câu hỏi khác nếu cần thiết
}









function displayCorrectMessage(callback) {
  const playerName = prompt("Nhập tên:");

  if (playerName) {
    if (!playersScores[playerName]) {
        playersScores[playerName] = { score: 0, avatar: "./images/default-avatar.png" };
    }

    playersScores[playerName].score++; // Tăng điểm
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Chúc mừng ${playerName} đã đúng, ! Điểm của ${playerName} là: ${playersScores[playerName].score} điểm.`;

    // Hiển thị overlay với video và chữ
    displayOverlay('./images/chucmunggame1.gif', './images/amthanhchucmung.mp4', true, callback);

    // Lưu trữ dữ liệu vào localStorage
    localStorage.setItem("playersScores", JSON.stringify(playersScores));

    updateScoreboard();
  } else {
    // Nếu người chơi không nhập tên, gọi lại hàm để yêu cầu tên mới
    displayCorrectMessage(callback);
  }
}

function displayWrongMessage(callback) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = "Sai rồi =(( ! Bạn đã thua cuộc.";

  // Hiển thị overlay với video và chữ
  displayOverlay('./images/thuagame1.gif','./images/thuagame1.mp3', false, callback);
}

function displayOverlay(gifPath, audioPath, isCorrect, additionalText, callback) {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'flex';

  // Thêm hình GIF vào overlay
  const gif = document.createElement('img');
  gif.src = gifPath; // Đường dẫn đến hình GIF
  gif.width = 200; // Điều chỉnh kích thước của hình GIF theo nhu cầu
  gif.height = 200;

  overlay.appendChild(gif);

  // Thêm âm thanh vào overlay
  const audio = document.createElement('audio');
  audio.controls = true;
  audio.muted = false; // Tắt âm thanh
  audio.autoplay = true; // Tự động phát

  const audioSource = document.createElement('source');
  audioSource.src = audioPath; // Đường dẫn đến file âm thanh
  audioSource.type = 'audio/mp4'; // Đổi loại tùy thuộc vào định dạng âm thanh
  audio.style.display='none';
  audio.appendChild(audioSource);
  overlay.appendChild(audio);



  // Thêm nút đóng
  const closeButton = document.createElement('button');
  closeButton.innerText = 'OK';
  closeButton.addEventListener('click', function () {
    // Dừng âm thanh và ẩn gif trước khi ẩn overlay
    audio.pause();
    gif.style.display = 'none';

    // Ẩn overlay và loại bỏ nội dung của nó
    overlay.style.display = 'none';
    overlay.innerHTML = '';
    if (callback) {
      callback();
    }
  });
  overlay.appendChild(closeButton);
}




function getPlayerName() {
  // Do nothing here, as this function is called from the callback in displayCorrectMessage
}


function updateScoreboard() {
  // Sắp xếp bảng xếp hạng từ điểm cao đến thấp
  const sortedScores = Object.entries(playersScores).sort((a, b) => b[1].score - a[1].score);

  const scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = ""; // Xóa các mục trước

  sortedScores.forEach(([playerName, playerData]) => {
      const scoreEntry = document.createElement("div");
      scoreEntry.classList.add("score-entry"); // Thêm lớp cho CSS

      // Thêm hình ảnh avatar
      const avatar = document.createElement('img');
      avatar.src = playerData.avatar || "./images/default-avatar.png"; // Nếu không có avatar, sử dụng avatar mặc định
      avatar.width = 40; // Điều chỉnh kích thước của avatar theo nhu cầu
      avatar.height = 40;
      scoreEntry.appendChild(avatar);

      // Thêm tên người chơi và điểm
      const playerInfo = document.createElement("span");
      playerInfo.innerText = `${playerName}: ${playerData.score} điểm`;
      scoreEntry.appendChild(playerInfo);

      // Thêm nút cộng điểm
      const addScoreButton = document.createElement("button");
      addScoreButton.innerText = "+";
      addScoreButton.addEventListener("click", function () {
          addScore(playerName);
      });
      scoreEntry.appendChild(addScoreButton);

      scoreboard.appendChild(scoreEntry);
  });
}
function addScore(playerName) {
  swal({
      title: `Bạn muốn cộng điểm cho ${playerName}?`,
      buttons: {
          cancel: {
              text: "Không",
              value: false,
              visible: true,
          },
          confirm: {
              text: "Có",
              value: true,
              visible: true,
          },
      },
  })
  .then((isConfirmed) => {
      if (isConfirmed) {
          // Tăng điểm cho người chơi nếu người dùng chọn "Có"
          playersScores[playerName].score++;

          // Cập nhật bảng xếp hạng và danh sách người chơi
          updateScoreboard();
          updateLocalStorage();
      } else {
          swal("Đã hủy", "Bạn đã hủy cộng điểm", "error");
      }
  });
}









function addCrownIcon(scoreEntry, iconPath) {
  // Thêm biểu tượng vương miện
  const crownIcon = document.createElement("img");
  crownIcon.src = iconPath;
  crownIcon.alt = "Crown";
  crownIcon.classList.add("crown-icon"); // Thêm lớp cho CSS
  scoreEntry.appendChild(crownIcon);
}

function playButtonClickSound() {
  const sound = new Howl({
    src: ['./images/click.mp4'],
    format: ['mp4'],
    volume: 1.0, // Điều chỉnh âm lượng theo nhu cầu
  });

  sound.play();
}

let backgroundMusic;

document.addEventListener("DOMContentLoaded", function () {
  backgroundMusic = new Howl({
    // src: ['./images/nhacnen2.mp4'],
    format: ['mp4'],
    loop: true, // Lặp nhạc nền
    volume: 0.3, // Điều chỉnh âm lượng theo nhu cầu
    autoplay:true,
  });
});

// Lưu trữ đường dẫn ảnh cho cả trạng thái đúng và sai
const correctImagePath = "./images/trochoi1-dung.gif";
const incorrectImagePath = "./images/trochoi1-sai.gif";

function checkAnswer(selectedAnswer) {
  console.log("Check Answer called");
    // Lấy giá trị của thuộc tính data-answer
    const selectedAnswerValue = selectedAnswer.getAttribute("data-answer");

    // So sánh với câu trả lời đúng (đây là ví dụ, bạn cần điều chỉnh logic kiểm tra)
    const correctAnswer = "Wear Winter Boots";
    const isCorrect = selectedAnswerValue === correctAnswer;

    

    // Đổi ảnh tùy thuộc vào việc trả lời đúng hay sai
    const questionImage = document.getElementById("question-image");
    questionImage.src = isCorrect ? correctImagePath : incorrectImagePath;
}

function refreshScore() {
    // Logic để làm mới điểm số
    // ...
}


// game 2


const flipSound = new Audio('./images/click.mp4');
const matchSound = new Audio('./images/matchsound.mp4');
const winSound = new Audio('path/to/win-sound.mp3');


const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const shuffle = array => {
    const clonedArray = [...array]

    for (let i = clonedArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        const original = clonedArray[i]

        clonedArray[i] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const pickRandom = (array, items) => {
    const clonedArray = [...array]
    const randomPicks = []

    for (let i = 0; i < items; i++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length)
        
        randomPicks.push(clonedArray[randomIndex])
        clonedArray.splice(randomIndex, 1)
    }

    return randomPicks
}

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')  

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }

    const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍']
    const picks = pickRandom(emojis, (dimensions * dimensions) / 2) 
    const items = shuffle([...picks, ...picks])
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `
    
    const parser = new DOMParser().parseFromString(cards, 'text/html')

    selectors.board.replaceWith(parser.querySelector('.board'))
}

const startGame = () => {
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    state.loop = setInterval(() => {
        state.totalTime++

        // selectors.moves.innerText = `${state.totalFlips} moves`
        // selectors.timer.innerText = `Time: ${state.totalTime} sec`
    }, 1000)
}

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}

const flipCard = card => {
    state.flippedCards++;
    state.totalFlips++;

    if (!state.gameStarted) {
        startGame();
    }

    // Tạo một bản sao của âm thanh để chơi từ đầu
    const flipSoundClone = flipSound.cloneNode();
    flipSoundClone.currentTime = 0; // Đặt thời điểm bắt đầu về 0
    flipSoundClone.play(); // Chơi âm thanh khi lật thẻ

    if (state.flippedCards <= 2) {
        card.classList.add('flipped');
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            setTimeout(() => {
                // Tạo một bản sao của âm thanh để chơi từ đầu
                const matchSoundClone = matchSound.cloneNode();
                matchSoundClone.currentTime = 0; // Đặt thời điểm bắt đầu về 0
                matchSoundClone.play(); // Chơi âm thanh khi có cặp thẻ khớp
            }, 200); // Chờ 0.2 giây trước khi chơi âm thanh

            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards();
        }, 1000);
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

generateGame()
attachEventListeners()

function toggleScoreboard() {
  var scoreboardContainer = document.getElementById('scoreboard-container');

  // Kiểm tra trạng thái hiện tại của scoreboard-container
  if (scoreboardContainer.style.display === 'none' || scoreboardContainer.style.display === '') {
      // Nếu đang ẩn, hiển thị
      scoreboardContainer.style.display = 'block';
      setTimeout(() => {
          scoreboardContainer.style.transform = 'translateX(0)'; // Trượt về vị trí ban đầu
      }, 0);
  } else {
      // Nếu đang hiển thị, ẩn đi
      scoreboardContainer.style.transform = 'translateX(100%)'; // Trượt ra khỏi màn hình sang phải
      setTimeout(() => {
          scoreboardContainer.style.display = 'none';
      }, 500); // Sau khi hiệu ứng kết thúc, ẩn phần tử
  }
}


// GAME 3///////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('confirm-button').addEventListener('click', function() {
  checkAnswersGame3();
});

function checkAnswersGame3() {
  var selectedAnswers = document.querySelectorAll('.answer3.selected');

  if (selectedAnswers.length === 2) {
      // Check if both selected answers are correct
      var allCorrect = Array.from(selectedAnswers).every(function (answer) {
          return answer.getAttribute('data-correct') === 'true';
      });

      if (allCorrect) {
          displayCorrectMessageGame3();
      } else {
          displayWrongMessageGame3();
      }
  } else {
      // No answer selected or only one answer selected
      displayWrongMessageGame3()
  }
}

// Add click event listeners to answers
var answerElementsGame3 = document.querySelectorAll('.answer3');
answerElementsGame3.forEach(function (answer) {
  answer.addEventListener('click', function () {
    playButtonClickSound();
      // Toggle the 'selected' class
      answer.classList.toggle('selected');
  });
});







function displayCorrectMessageGame3(callback) {
  const playerName = prompt("Nhập tên:");

  if (playerName) {
    if (!playersScores[playerName]) {
      playersScores[playerName] = { score: 0 };
    }

    playersScores[playerName].score++;
    alert(`Chúc mừng ${playerName} đã đúng! Điểm của ${playerName} là: ${playersScores[playerName].score}`);

    // Lưu trữ dữ liệu vào localStorage
    updateLocalStorage();

    updateScoreboard(); // Update scoreboard for all games

    if (callback) {
      callback();
    }
  } else {
    alert("Bạn đã không nhập tên!");
  }
}


function getPlayerNameGame3() {
  // Handle getting player name after the game in the third game
  // You can add additional logic here if needed.
}

function displayWrongMessageGame3(callback) {
  // Hiển thị overlay với video và chữ
  displayOverlay('./images/thuagame1.gif', './images/thuagame1.mp3', false, () => {
    alert("Sai rồi! Bạn đã thua cuộc.");
    if (callback) {
      callback();
    }
  });
}
function readText() {
  const textContent = document.getElementById('text-content').innerText;
  
  // Kiểm tra xem trình duyệt có hỗ trợ Web Speech API không
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textContent);
    
    // Đặt ngôn ngữ thành tiếng Việt
    utterance.lang = 'vi-VN';

    speechSynthesis.speak(utterance);
  } else {
    alert('Trình duyệt của bạn không hỗ trợ Text-to-Speech.');
  }
}


//  END GAME 3/////////////////////////////////////////////////////////////////////////////////////////////////////

// START GAME4///////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('confirm-button-game4').addEventListener('click', function() {
  checkAnswersGame4();
});

function checkAnswersGame4() {
  var selectedAnswers = document.querySelectorAll('.answer3.selected');

  if (selectedAnswers.length === 2) {
      // Check if both selected answers are correct
      var allCorrect = Array.from(selectedAnswers).every(function (answer) {
          return answer.getAttribute('data-correct-4') === 'true';
      });

      if (allCorrect) {
          displayCorrectMessageGame3();
      } else {
          displayWrongMessageGame3();
      }
  } else {
      // No answer selected or only one answer selected
      displayWrongMessageGame3()
  }
}

// Add click event listeners to answers
var answerElementsGame4 = document.querySelectorAll('.answer3');
answerElementsGame4.forEach(function (answer) {
  answer.addEventListener('click', function () {
      // Toggle the 'selected' class
      answer.classList.toggle('selectedGame4');
  });
});



function displayCorrectMessageGame3(callback) {
  const playerName = prompt("Nhập tên:");

  if (playerName) {
    if (!playersScores[playerName]) {
      playersScores[playerName] = { score: 0 };
    }

    playersScores[playerName].score++;
    alert(`Chúc mừng ${playerName} đã đúng! Điểm của ${playerName} là: ${playersScores[playerName].score}`);

    // Lưu trữ dữ liệu vào localStorage
    updateLocalStorage();

    updateScoreboard(); // Update scoreboard for all games

    if (callback) {
      callback();
    }
  } else {
    alert("Bạn đã không nhập tên!");
  }
}

function displayWrongMessageGame3(callback) {
  alert("Sai rồi! Bạn đã thua cuộc.");

  if (callback) {
    callback();
  }
}

function getPlayerNameGame3() {
  // Handle getting player name after the game in the third game
  // You can add additional logic here if needed.
}
function displayCorrectMessageGame3(callback) {
  const playerName = prompt("Nhập tên:");

  if (playerName) {
    if (!playersScores[playerName]) {
      playersScores[playerName] = { score: 0 };
    }

    playersScores[playerName].score++;

    // Hiển thị overlay với video và chữ
    displayOverlay('./images/chucmunggame1.gif', './images/amthanhchucmung.mp4', true, () => {
      alert(`Chúc mừng ${playerName} đã đúng! Điểm của ${playerName} là: ${playersScores[playerName].score}`);
      if (callback) {
        callback();
      }
    });

    // Lưu trữ dữ liệu vào localStorage
    updateLocalStorage();
    updateScoreboard(); // Cập nhật bảng xếp hạng cho tất cả các trò chơi
  } else {
    alert("Bạn đã không nhập tên!");
  }
}
function displayWrongMessageGame3(callback) {
  // Hiển thị overlay với video và chữ
  displayOverlay('./images/thuagame1.gif', './images/thuagame1.mp3', false, () => {
    alert("Sai rồi! Bạn đã thua cuộc.");
    if (callback) {
      callback();
    }
  });
}
function readTextGame4() {
  const textContent = document.getElementById('text-content-game4').innerText;
  
  // Kiểm tra xem trình duyệt có hỗ trợ Web Speech API không
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textContent);
    
    // Đặt ngôn ngữ thành tiếng Việt
    utterance.lang = 'vi-VN';

    speechSynthesis.speak(utterance);
  } else {
    alert('Trình duyệt của bạn không hỗ trợ Text-to-Speech.');
  }
}




// END GAME4///////////////////////////////////////////////////////////////////////////////////////////////////////



// START GAME5///////////////////////////////////////////////////////////////////////////////////////////////////////
     //Initial References
let draggableObjects;
let dropPoints;
const startButton = document.getElementById("start");
const resultGame5= document.getElementById("resultGame5");
const controls = document.querySelector(".controls-container");
const dragContainer = document.querySelector(".draggable-objects");
const dropContainer = document.querySelector(".drop-points");
const containerGame5 = document.querySelector(".container");
const data = [
  "buoc1",
  "buoc2",
  "buoc3",
  "buoc4",
  "buoc5",
  "buoc6",
  
];

let deviceType = "";
let initialX = 0,
  initialY = 0;
let currentElement = "";
let moveElement = false;

//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create Touch Event (It would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

let count = 0;

//Random value from Array
const randomValueGenerator = () => {
  return data[Math.floor(Math.random() * data.length)];
};

//Win Game Display
const stopGame = () => {
  controls.classList.remove("hide");
  startButton.classList.remove("hide");
};

//Drag & Drop Functions
function dragStart(e) {
  
  if (isTouchDevice()) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
    //Start movement for touch
    moveElement = true;
    currentElement = e.target;
  } else {
    //For non touch devices set data to be transfered
    e.dataTransfer.setData("text", e.target.id);
  }
}

//Events fired on the drop target
function dragOver(e) {
  e.preventDefault();
}

//For touchscreen movement
const touchMove = (e) => {
  
  if (moveElement) {
    e.preventDefault();
    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;
    let currentSelectedElement = document.getElementById(e.target.id);
    currentSelectedElement.parentElement.style.top =
      currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
    currentSelectedElement.parentElement.style.left =
      currentSelectedElement.parentElement.offsetLeft -
      (initialX - newX) +
      "px";
    initialX = newX;
    initialY - newY;
  }
};

const drop = (e) => {
  e.preventDefault();
  //For touch screen
  if (isTouchDevice()) {
    moveElement = false;
    //Select country name div using the custom attribute
    const currentDrop = document.querySelector(`div[data-id='${e.target.id}']`);
    //Get boundaries of div
    const currentDropBound = currentDrop.getBoundingClientRect();
    //if the position of flag falls inside the bounds of the countru name
    if (
      initialX >= currentDropBound.left &&
      initialX <= currentDropBound.right &&
      initialY >= currentDropBound.top &&
      initialY <= currentDropBound.bottom
    ) {
      currentDrop.classList.add("dropped");
      //hide actual image
      currentElement.classList.add("hide");
      currentDrop.innerHTML = ``;
      //Insert new img element
      currentDrop.insertAdjacentHTML(
        "afterbegin",
        `<img src= "./images/${currentElement.id}.png">`
      );
      count += 1;
      matchSound.play();
    }
  } else {
    //Access data
    const draggedElementData = e.dataTransfer.getData("text");
    //Get custom attribute value
    const droppableElementData = e.target.getAttribute("data-id");
    if (draggedElementData === droppableElementData) {
      const draggedElement = document.getElementById(draggedElementData);
      //dropped class
      e.target.classList.add("dropped");
      //hide current img
      draggedElement.classList.add("hide");
      //draggable set to false
      draggedElement.setAttribute("draggable", "false");
      e.target.innerHTML = ``;
      //insert new img
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<img src="./images/${draggedElementData}.png">`
      );
      count += 1;
      matchSound.play();
    }
  }
  //Win
  if (count == 6) {
    setTimeout(function() {
        displayCorrectMessage();
    }, 1000); // 1000 milliseconds = 1 second
}
};

const creator = () => {
  
  let randomData = [];
  //for string random values in array
  for (let i = 1; i <= 6; i++) {
    let randomValue = randomValueGenerator();
    if (!randomData.includes(randomValue)) {
      randomData.push(randomValue);
    } else {
      //If value already exists then decrement i by 1
      i -= 1;
    }
  }

  // Use a fixed order for country names
  const countryOrder = ["buoc1", "buoc2", "buoc3", "buoc4", "buoc5", "buoc6"];

  // Create an array to store the shuffled order of flags
  const shuffledFlags = Array.from({ length: countryOrder.length }, (_, index) => index);
  // Shuffle the flags array randomly
  shuffledFlags.sort(() => 0.5 - Math.random());

  for (let i of shuffledFlags) {
    const flagDiv = document.createElement("div");
    flagDiv.classList.add("draggable-image");
    flagDiv.setAttribute("draggable", true);
    if (isTouchDevice()) {
      flagDiv.style.position = "absolute";
    }
    const flagIndex = i + 1; // Adjust index to start from 1
    const flagName = `buoc${flagIndex}`;
    flagDiv.innerHTML = `<img src="./images/${flagName}.png" id="${flagName}">`;
    dragContainer.appendChild(flagDiv);
  }

  for (let i of countryOrder) {
    const countryDiv = document.createElement("div");
    const countryIndex = countryOrder.indexOf(i) + 1; // Adjust index to start from 1
    countryDiv.innerHTML = `
        <div class='countries' data-id='${i}'>
            
        </div>
        <h3>Bước ${countryIndex}</h3>
    `;
    dropContainer.appendChild(countryDiv);
  }
};



//Start Game
const initGame = async () => {
  console.log("Game initializing...");
  currentElement = "";
  controls.classList.add("hide");
  // startButton.classList.add("hide"); // Bạn có thể bỏ lệnh này nếu không muốn ẩn nút "Start Game"
  await creator();
  count = 0;
  dropPoints = document.querySelectorAll(".countries");
  draggableObjects = document.querySelectorAll(".draggable-image");

  // Thêm sự kiện lắng nghe cho các phần tử kéo và thả và các phần tử drop
  draggableObjects.forEach((element) => {
    
    element.addEventListener("dragstart", dragStart);
    // for touch screen
    element.addEventListener("touchstart", dragStart);
    element.addEventListener("touchend", drop);
    element.addEventListener("touchmove", touchMove);
  });
  dropPoints.forEach((element) => {
    element.addEventListener("dragover", dragOver);
    element.addEventListener("drop", drop);
  });
};

function checkAnswerGame5(selectedOption) {
  playButtonClickSound();
  const correctAnswer = 'D'; // Set the correct answer here
  const questionContainer = document.getElementById('question-game5');

  if (selectedOption === correctAnswer) {
    swal({
      title: 'Chính xác!',
      text: 'Bạn có thể bắt đầu trò chơi.',
      icon: 'success',
    }).then((result) => {
      if (result) {
        // Ẩn đi phần câu hỏi và lựa chọn
        questionContainer.style.display = 'none';
        containerGame5.style.display = 'block';
        // Gọi hàm initGame() hoặc thực hiện các xử lý khác khi câu trả lời đúng
        initGame();
      }
    });
  } else {
    displayWrongMessage(); // You may want to replace this with a swal for consistency
  }
}
function readTextGame5() {
  const textContent = document.getElementById('text-content-game5').innerText;
  
  // Kiểm tra xem trình duyệt có hỗ trợ Web Speech API không
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textContent);
    
    // Đặt ngôn ngữ thành tiếng Việt
    utterance.lang = 'vi-VN';

    speechSynthesis.speak(utterance);
  } else {
    alert('Trình duyệt của bạn không hỗ trợ Text-to-Speech.');
  }
}
function readTextGame6() {
  const textContent = document.getElementById('text-content-game6').innerText;
  
  // Kiểm tra xem trình duyệt có hỗ trợ Web Speech API không
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textContent);
    
    // Đặt ngôn ngữ thành tiếng Việt
    utterance.lang = 'vi-VN';

    speechSynthesis.speak(utterance);
  } else {
    alert('Trình duyệt của bạn không hỗ trợ Text-to-Speech.');
  }
}


// Gọi hàm khởi tạo trò chơi ngay khi trang web được tải


// END GAME5///////////////////////////////////////////////////////////////////////////////////////////////////////



// START GAME6///////////////////////////////////////////////////////////////////////////////////////////////////////

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const draggableRow = document.getElementById('draggable-row');
const droppableRow = document.getElementById('droppable-row');
const message = document.getElementById('message');

// Create an array with draggable elements
const draggableElements = Array.from(draggableRow.children);

// Shuffle the array
shuffleArray(draggableElements);

// Append shuffled elements back to the row
draggableElements.forEach(element => {
  draggableRow.appendChild(element);
});

// Rest of your existing code...
const droppables = document.querySelectorAll('.droppable');
const draggables = document.querySelectorAll('[draggable="true"]');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

let correctDrops = 0;
let totalDrops = 0;

droppables.forEach(droppable => {
  droppable.addEventListener('dragover', e => {
    e.preventDefault();
  });

  droppable.addEventListener('drop', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    totalDrops++;

    if (droppable.dataset.drop === draggable.dataset.drag) {
      droppable.innerHTML = '';
      droppable.appendChild(draggable);

      // Bỏ thuộc tính filter khi kéo vào đúng vùng mờ
      droppable.querySelector('img').style.filter = 'none';

      // Increment the counter for correct drops
      correctDrops++;

      // Hiển thị thông điệp khi đúng
      matchSound.play();

      // Kiểm tra xem đã hoàn thành chưa
      if (correctDrops === droppables.length) {
        // Display the congratulatory message
        setTimeout(() => {
          displayCorrectMessage();
        }, 1000);
        
      }
    } else {
      // Hiển thị thông điệp khi sai
      message.textContent = 'Sai rồi! Hãy thử lại.';
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  });
});


// END GAME6///////////////////////////////////////////////////////////////////////////////////////////////////////