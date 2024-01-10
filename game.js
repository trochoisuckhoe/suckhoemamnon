///LOADING PAGE////

function showContainer2() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game1').style.display = 'none';
              document.getElementById('container2').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer3() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game2').style.display = 'none';
              document.getElementById('container3').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer4() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game3').style.display = 'none';
              document.getElementById('container4').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer5() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game4').style.display = 'none';
              document.getElementById('container5').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer6() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game5').style.display = 'none';
              document.getElementById('container6').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer7() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game6').style.display = 'none';
              document.getElementById('container7').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer8() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game7').style.display = 'none';
              document.getElementById('container8').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}

function showContainer9() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game8').style.display = 'none';
              document.getElementById('container9').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}


function showContainer10() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game9').style.display = 'none';
              document.getElementById('container10').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}
function showContainer11() {
  // Hiển thị màn hình load
  document.getElementById('loading-screen').style.display = 'flex';

  // Reset giá trị của thanh tiến trình
  document.getElementById('progress-bar').style.width = '0%';

  // Giả lập thời gian chờ và update thanh tiến trình
  let progress = 0;
  const interval = setInterval(function () {
      progress += 10; // Tăng giá trị tiến trình
      document.getElementById('progress-bar').style.width = progress + '%';
      document.getElementById('progress-text').innerHTML = progress + '%';

      if (progress >= 100) {
          // Khi tiến trình đạt 100%, chờ một khoảng thời gian (ví dụ, 500ms) trước khi chuyển trang
          clearInterval(interval);
          setTimeout(function () {
              document.getElementById('loading-screen').style.display = 'none';
              document.querySelector('.container-game10').style.display = 'none';
              document.getElementById('container11').style.display = 'block';
              document.body.style.overflow = 'hidden';
          }, 500);
      }
  }, 200); // Thời gian cập nhật thanh tiến trình (200ms trong ví dụ này)
}
///LOADING PAGE/////

function reloadPage() {
  // Reload the current page
  location.reload(true);
}


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

function showTopPlayers() {
  // Get the top 3 players
  const top3Players = Object.entries(playersScores)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, 3);

  // Create a modal container
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  // Create a modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Add a close button to the modal
  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("close-button");
  closeButton.onclick = function () {
    modalContainer.style.display = "none";
  };

  modalContent.appendChild(closeButton);

  // Add the top 3 players to the modal content
  top3Players.forEach(([playerName, playerData]) => {
    const playerInfo = document.createElement("div");

    // Add the player's avatar
    const avatar = document.createElement("img");
    avatar.src = playerData.avatar || "./images/default-avatar.png";
    avatar.width = 40;
    avatar.height = 40;
    playerInfo.appendChild(avatar);

    // Add the player's name and score
    const playerDetails = document.createElement("span");
    playerDetails.innerText = `${playerName}: ${playerData.score} điểm`;
    playerInfo.appendChild(playerDetails);

    modalContent.appendChild(playerInfo);
  });

  // Append the modal content to the modal container
  modalContainer.appendChild(modalContent);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);

  // Display the modal
  modalContainer.style.display = "block";
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
    volume: 0.0, // Điều chỉnh âm lượng theo nhu cầu
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

function showInstructions() {
  document.querySelector('.instructions-container').style.display = 'block';
  document.body.classList.add('instruction-open');
}

function hideInstructions() {
  document.querySelector('.instructions-container').style.display = 'none';
  document.body.classList.remove('instruction-open');
}


function showInstructions2() {
  document.querySelector('.instructions-container2').style.display = 'block';
  document.body.classList.add('instruction-open2');
}

function hideInstructions2() {
  document.querySelector('.instructions-container2').style.display = 'none';
  document.body.classList.remove('instruction-open2');
}

function showInstructions3() {
  document.querySelector('.instructions-container3').style.display = 'block';
  document.body.classList.add('instruction-open3');
}

function hideInstructions3() {
  document.querySelector('.instructions-container3').style.display = 'none';
  document.body.classList.remove('instruction-open3');
}


function showInstructions4() {
  document.querySelector('.instructions-container4').style.display = 'block';
  document.body.classList.add('instruction-open4');
}

function hideInstructions4() {
  document.querySelector('.instructions-container4').style.display = 'none';
  document.body.classList.remove('instruction-open4');
}

function showInstructions5() {
  document.querySelector('.instructions-container5').style.display = 'block';
  document.body.classList.add('instruction-open5');
}

function hideInstructions5() {
  document.querySelector('.instructions-container5').style.display = 'none';
  document.body.classList.remove('instruction-open5');
}

function showInstructions6() {
  document.querySelector('.instructions-container6').style.display = 'block';
  document.body.classList.add('instruction-open6');
}

function hideInstructions6() {
  document.querySelector('.instructions-container6').style.display = 'none';
  document.body.classList.remove('instruction-open6');
}

function showInstructions7() {
  document.querySelector('.instructions-container7').style.display = 'block';
  document.body.classList.add('instruction-open7');
}

function hideInstructions7() {
  document.querySelector('.instructions-container7').style.display = 'none';
  document.body.classList.remove('instruction-open7');
}
function showInstructions8() {
  document.querySelector('.instructions-container8').style.display = 'block';
  document.body.classList.add('instruction-open8');
}

function hideInstructions8() {
  document.querySelector('.instructions-container8').style.display = 'none';
  document.body.classList.remove('instruction-open8');
}

function showInstructions9() {
  document.querySelector('.instructions-container9').style.display = 'block';
  document.body.classList.add('instruction-open9');
}

function hideInstructions9() {
  document.querySelector('.instructions-container9').style.display = 'none';
  document.body.classList.remove('instruction-open9');
}
function showInstructions10() {
  document.querySelector('.instructions-container10').style.display = 'block';
  document.body.classList.add('instruction-open10');
}

function hideInstructions10() {
  document.querySelector('.instructions-container10').style.display = 'none';
  document.body.classList.remove('instruction-open10');
}


function showInstructions11() {
  document.querySelector('.instructions-container11').style.display = 'block';
  document.body.classList.add('instruction-open11');
}

function hideInstructions11() {
  document.querySelector('.instructions-container11').style.display = 'none';
  document.body.classList.remove('instruction-open11');
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
};

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
};

const shuffle = array => {
    const clonedArray = [...array];

    for (let i = clonedArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const original = clonedArray[i];

        clonedArray[i] = clonedArray[randomIndex];
        clonedArray[randomIndex] = original;
    }

    return clonedArray;
};

const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];

    for (let i = 0; i < items; i++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length);

        randomPicks.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }

    return randomPicks;
};

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension');

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.");
    }

    const emojis = [
        './images/answer1-game2.jpg',
        './images/answer2-game2.jpg',
        './images/answer3-game2.jpg',
        './images/answer4-game2.jpg',
        './images/answer5-game2.jpg',
        './images/answer6-game2.jpg',
        './images/answer7-game2.jpg',
        './images/answer8-game2.jpg',
        './images/answer9-game2.jpg',
        './images/answer10-game2.jpg'
    ];

    const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
    const items = shuffle([...picks, ...picks]);
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card" data-img="${item}">
                    <div class="card-front"></div>
                    <div class="card-back">
                        <img src="${item}" alt="Emoji">
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const parser = new DOMParser().parseFromString(cards, 'text/html');

    selectors.board.replaceWith(parser.querySelector('.board'));
};

const startGame = () => {
    state.gameStarted = true;
    selectors.start.classList.add('disabled');

    state.loop = setInterval(() => {
        state.totalTime++;
    }, 1000);
};

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    });

    state.flippedCards = 0;
     // Kiểm tra xem tất cả các thẻ đã được khớp hay chưa
     if (document.querySelectorAll('.card:not(.matched)').length === 0) {
      showCongratulations();
  }
};

  function showCongratulations(callback) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Sai rồi =(( ! Bạn đã thua cuộc.";
  
    // Hiển thị overlay với video và chữ
    displayOverlay('./images/chucmunggame1.gif','./images/amthanhchucmung.mp4', false, callback);
    
  }


const flipCard = card => {
    state.flippedCards++;
    state.totalFlips++;

    if (!state.gameStarted) {
        startGame();
    }

    const flipSoundClone = flipSound.cloneNode();
    flipSoundClone.currentTime = 0;
    flipSoundClone.play();

    if (state.flippedCards <= 2) {
        card.classList.add('flipped');
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        if (flippedCards[0].dataset.img === flippedCards[1].dataset.img) {
            setTimeout(() => {
                const matchSoundClone = matchSound.cloneNode();
                matchSoundClone.currentTime = 0;
                matchSoundClone.play();
            }, 200);

            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards();
        }, 1000);
    }
};

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        const eventParent = eventTarget.parentElement;

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent);
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame();
        }
    });
};

generateGame();
attachEventListeners();

function toggleScoreboard() {
  var scoreboardContainer = document.getElementById('scoreboard-container');
  var toggleButton = document.getElementById('toggle-scoreboard-button');

  if (scoreboardContainer.style.display === 'none' || scoreboardContainer.style.display === '') {
      scoreboardContainer.style.display = 'block';
      toggleButton.style.display = 'none'; // Hide the toggle button when the scoreboard is displayed
      setTimeout(() => {
          scoreboardContainer.style.transform = 'translateX(0)';
      }, 0);
  } else {
      scoreboardContainer.style.transform = 'translateX(100%)';
      setTimeout(() => {
          scoreboardContainer.style.display = 'none';
          toggleButton.style.display = 'block'; // Show the toggle button when the scoreboard is hidden
      }, 500);
  }
}

// Add the close button with Font Awesome icon to the top-left corner of the scoreboard-container
var closeButton = document.createElement('div');
closeButton.className = 'close-button';
closeButton.innerHTML = '<i class="fas fa-times"></i>';
closeButton.onclick = function () {
    toggleScoreboard();
};

// Style the close button
closeButton.style.position = 'absolute';
closeButton.style.top = '0';
closeButton.style.left = '0';
closeButton.style.padding = '15px 20px';
closeButton.style.cursor = 'pointer';
closeButton.style.borderRadius='10px 0px 10px 0px';
closeButton.style.color = 'white'; // Set icon color to white
closeButton.style.backgroundColor = 'red'; // Set background color to red

document.getElementById('scoreboard-container').appendChild(closeButton);





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
          displayCorrectMessage();
      } else {
          displayWrongMessage();
      }
  } else {
      // No answer selected or only one answer selected
      displayWrongMessage()
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
          displayCorrectMessage();
      } else {
          displayWrongMessage();
      }
  } else {
      // No answer selected or only one answer selected
      displayWrongMessage()
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
  "step1", "step2", "step3", "step4", "step5", "step6"
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
        `<img src= "./images/${currentElement.id}.jpg">`
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
        `<img src="./images/${draggedElementData}.jpg">`
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
  const countryOrder = ["step1", "step2", "step3", "step4", "step5", "step6"];

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
    const flagName = `step${flagIndex}`;
    flagDiv.innerHTML = `<img src="./images/${flagName}.jpg" id="${flagName}">`;
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

// START GAME7/////////////////////////////////////////////////////////////////////////////////////////////////////
function checkAnswerGame7(selectedOption) {
  playButtonClickSound();
  const correctAnswer = 'D'; // Set the correct answer here
  
  // Sử dụng SweetAlert để hỏi người chơi xác nhận
  swal({
    title: 'Xác nhận',
    text: 'Bạn chắc chắn muốn chọn câu trả lời này?',
    icon: 'warning',
    buttons: ['Hủy', 'Đồng ý'],
    dangerMode: true,
  }).then((willConfirm) => {
    if (willConfirm) {
      // Người chơi đã xác nhận, kiểm tra câu trả lời
      if (selectedOption === correctAnswer) {
        // Hiển thị SweetAlert với thông báo đúng
        displayCorrectMessage();

      } else {
        // Hiển thị SweetAlert với thông báo sai
        displayWrongMessage();
      }
    } else {
      // Người chơi đã hủy bỏ xác nhận, không làm gì cả
      // Bạn có thể thêm các hành động khác nếu cần
    }
  });
}

function readTextGame7() {
  const textContent = document.getElementById('text-content-game7').innerText;
  
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


//END GAME7///////////////////////////////////////////////////////////////////////////////////////////////////////

//START GAME8///////////////////////////////////////////////////////////////////////////////////////////////////////
function checkAnswerGame9(selectedOption) {
  playButtonClickSound();
  const correctAnswer = 'D'; // Set the correct answer here
  
  // Sử dụng SweetAlert để hỏi người chơi xác nhận
  swal({
    title: 'Xác nhận',
    text: 'Bạn chắc chắn muốn chọn câu trả lời này?',
    icon: 'warning',
    buttons: ['Hủy', 'Đồng ý'],
    dangerMode: true,
  }).then((willConfirm) => {
    if (willConfirm) {
      // Người chơi đã xác nhận, kiểm tra câu trả lời
      if (selectedOption === correctAnswer) {
        // Hiển thị SweetAlert với thông báo đúng
        displayCorrectMessage();

      } else {
        // Hiển thị SweetAlert với thông báo sai
        displayWrongMessage();
      }
    } else {
      // Người chơi đã hủy bỏ xác nhận, không làm gì cả
      // Bạn có thể thêm các hành động khác nếu cần
    }
  });
}

function readTextGame8() {
  const textContent = document.getElementById('text-content-game8').innerText;
  
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
function readTextGame9() {
  const textContent = document.getElementById('text-content-game9').innerText;
  
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
function readTextGame10() {
  const textContent = document.getElementById('text-content-game10').innerText;
  
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
function readTextGame11() {
  const textContent = document.getElementById('text-content-game11').innerText;
  
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
//END GAME8///////////////////////////////////////////////////////////////////////////////////////////////////////


// START GAME9/////////////////////////////////////////////////////////////////////////////////////////////////
let selectedOutfit = null;
        let selectedWeather = null;
        let connectedPairs = [];

        function handleItemClick(outfit) {
          if (selectedWeather === null && !isItemConnected(outfit)) {
              selectedOutfit = outfit;
              outfit.style.borderColor = '#3498db';
              setTimeout(() => {
                  outfit.classList.toggle('clicked');
                  playButtonClickSound();
              }, 30);
          } else if (selectedWeather !== null && !isItemConnected(outfit)) {
              connectItems(outfit, selectedWeather);
              outfit.style.borderColor = '#3498db';
              setTimeout(() => {
                  outfit.classList.toggle('clicked');
                  selectedOutfit.classList.remove('clicked');
                  playButtonClickSound();
              }, 30);
          }
      }
      
      function handleWeatherClick(weather) {
          if (selectedOutfit === null && !isItemConnected(weather)) {
              selectedWeather = weather;
              weather.style.borderColor = '#3498db';
              setTimeout(() => {
                  weather.classList.toggle('clicked');
                  playButtonClickSound();
              }, 30);
          } else if (selectedOutfit !== null && !isItemConnected(weather)) {
              connectItems(selectedOutfit, weather);
              weather.style.borderColor = '#3498db';
              setTimeout(() => {
                  weather.classList.toggle('clicked');
                  selectedWeather.classList.remove('clicked');
                  playButtonClickSound();
              }, 30);
          }
      }

        function connectItems(outfit, weather) {
            const wrapper = document.querySelector('.wrapper');

            const line = document.createElement('div');
            line.className = 'line';
            wrapper.appendChild(line);

            const p1 = { x: outfit.offsetLeft + outfit.clientWidth, y: outfit.offsetTop + outfit.clientHeight / 2 };
            const p2 = { x: weather.offsetLeft, y: weather.offsetTop + weather.clientHeight / 2 };

            const a = p1.x - p2.x;
            const b = p1.y - p2.y;
            const length = Math.sqrt(a * a + b * b);

            const angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

            line.style.left = p1.x + 'px';
            line.style.top = p1.y + 'px';
            line.style.transform = "rotate(" + angleDeg + "deg)";

            // Set initial values for transition
            line.style.width = '0';
            line.style.opacity = '0';

            let start;
            function animate(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;

                // Set final values for transition based on the animation progress
                line.style.width = progress + 'px'; // Adjust the divisor to control the speed
                line.style.opacity = progress / length;

                if (progress < length) {
                    // Continue the animation until the length is reached
                    requestAnimationFrame(animate);
                } else {
                    line.style.width = length + 'px';
                    line.style.opacity = '1';
                }
            }

            // Trigger the animation
            requestAnimationFrame(animate);

            line.style.display = 'block';

            connectedPairs.push({ outfit, weather });

            selectedOutfit = null;
            selectedWeather = null;
        }

        function isItemConnected(item) {
            for (const pair of connectedPairs) {
                if (pair.outfit === item || pair.weather === item) {
                    return true;
                }
            }
            return false;
        }

        function checkAnswerGame9() {
            if (connectedPairs.length === 4) {
                let correctPairs = 0;

                for (let i = 0; i < connectedPairs.length; i++) {
                    const outfitAnswer = connectedPairs[i].outfit.getAttribute('data-answer');
                    const weatherAnswer = connectedPairs[i].weather.getAttribute('data-answer');

                    // Kiểm tra xem cặp đáp án có đúng không
                    if (outfitAnswer === weatherAnswer) {
                        correctPairs++;
                    }
                }

                if (correctPairs === 4) {
                    displayCorrectMessage();
                    
                } else {
                    displayWrongMessage();
                    resetGame9();
                }
            } else {
                alert("Bạn cần nối đúng cả 4 cặp trước khi kiểm tra đáp án.");
            }
        }
        function shuffleArrayGame9(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function resetGame9() {
  // Reset the visual state of connected items
  for (const pair of connectedPairs) {
      pair.outfit.style.borderColor = 'transparent';
      pair.weather.style.borderColor = 'transparent';
      pair.outfit.classList.remove('clicked');
      pair.weather.classList.remove('clicked');
  }

  // Clear the lines
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => line.remove());

  // Clear the connected pairs array
  connectedPairs = [];

  // Shuffle the items again
  shuffleItemsGame9();
}


function shuffleItemsGame9() {
    const outfits = document.querySelectorAll('.container-outfit-item .outfit-item');
    const weathers = document.querySelectorAll('.container-weather-item .weather-item');
    const containerOutfit = document.querySelector('.container-outfit-item');
    const containerWeather = document.querySelector('.container-weather-item');

    const allItems = Array.from(outfits).concat(Array.from(weathers));

    // Shuffle the array of all items
    shuffleArrayGame9(allItems);

    // Clear the containers
    containerOutfit.innerHTML = '';
    containerWeather.innerHTML = '';

    // Append shuffled items back to the containers
    allItems.forEach(item => {
        if (item.classList.contains('outfit-item')) {
            containerOutfit.appendChild(item);
        } else {
            containerWeather.appendChild(item);
        }
    });
}

// Call shuffleItems function when the page loads
window.addEventListener('load', shuffleItemsGame9);

// END GAME9/////////////////////////////////////////////////////////////////////////////////////////////////


// START GAME10/////////////////////////////////////////////////////////////////////////////////////////////////
let selectedAnswers = [];

function selectAnswer(clickedImage) {
  playButtonClickSound();
    // Function to handle the selection of an answer
    // You can visually highlight the selected answer if needed
    // For simplicity, this example stores all selected answers in an array

    // Toggle the selected state of the clicked image
    clickedImage.classList.toggle('selected');
    
    // If the clicked image is selected, add its data-answer to the array
    if (clickedImage.classList.contains('selected')) {
        selectedAnswers.push(clickedImage.dataset.answer);
        
    } else {
        // If the clicked image is deselected, remove its data-answer from the array
        const index = selectedAnswers.indexOf(clickedImage.dataset.answer);
        if (index !== -1) {
            selectedAnswers.splice(index, 1);
        }
    }
}

function checkAnswerGame10() {
    // Function to check the selected answers against the correct answer(s)
    // For demonstration, let's assume the correct answer is "goodforteeth"
    const correctAnswers = ["goodforteeth"];

    // Check if all selected answers are correct
    const isCorrect = selectedAnswers.every(answer => correctAnswers.includes(answer));

    if (isCorrect) {
        displayCorrectMessage();
    } else {
        displayWrongMessage();
    }
}


// END GAME10/////////////////////////////////////////////////////////////////////////////////////////////////

// START GAME11/////////////////////////////////////////////////////

function shuffleArray11(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const draggableRow11 = document.getElementById('draggable-row11');
const droppableRow11 = document.getElementById('droppable-row11');


// Create an array with draggable elements
const draggableElements11 = Array.from(draggableRow11.children);

// Shuffle the array
shuffleArray11(draggableElements11);

// Append shuffled elements back to the row
draggableElements11.forEach(element => {
  draggableRow11.appendChild(element);
});

// Rest of your existing code...
const droppables11 = document.querySelectorAll('.droppable11');
const draggables11 = document.querySelectorAll('[draggable11="true"]');

draggables11.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

let correctDrops11 = 0;
let totalDrops11 = 0;

let filleddroppables11 = [];

droppables11.forEach(droppable => {
  droppable.addEventListener('dragover', e => {
    e.preventDefault();
  });

  droppable.addEventListener('drop', e => {
    e.preventDefault();

    // Kiểm tra xem droppable đã được điền chưa
    if (!filleddroppables11.includes(droppable)) {
      const draggable = document.querySelector('.dragging');
      totalDrops11++;

      droppable.innerHTML = '';
      droppable.appendChild(draggable);

      
      droppable.querySelector('img').style.display = 'block';
      // Thêm droppable vào danh sách đã điền
      filleddroppables11.push(droppable);

      // Increment the counter for correct drops
      correctDrops11++;

      // Hiển thị thông điệp khi đúng
      matchSound.play();

      // Kiểm tra xem đã hoàn thành chưa
     
    }
  });
});


const confirmButton11 = document.getElementById('confirmButton11Game11');
confirmButton11.addEventListener('click', () => {
  checkResults11();
});

// Function để kiểm tra kết quả
function checkResults11() {
  let allCorrect = true;

  droppables11.forEach(droppable => {
    const draggable = droppable.querySelector('.image-container-drag img');
    const dropValue = droppable.dataset.drop;
    const dragValue = draggable.parentElement.dataset.drag;

    if (dropValue !== dragValue) {
      allCorrect = false;
    }
  });

  if (allCorrect) {
    // Nếu đúng hết, hiển thị thông điệp chúc mừng
    showCongratulations();
  } else {
    // Nếu có ít nhất một cặp không khớp, hiển thị thông điệp sai và làm mới trang
    displayWrongMessage();
    
  }
}

// END GAME11/////////////////////////////////////////////////////