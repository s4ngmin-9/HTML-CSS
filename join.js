const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userId = event.target.id.value;
  let userPw1 = event.target.pw1.value;
  let userPw2 = event.target.pw2.value;
  let userName = event.target.name.value;
  let userPhone = event.target.phone.value;
  let userPosition = event.target.position.value;
  let userGender = event.target.gender.value;
  let userEmail = event.target.email.value;
  let userIntro = event.target.intro.value;

  if (userId.length < 6) {
    alert("아이디는 6자 이상 입력해주세요.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  document.body.innerHTML = "";
  document.write(`<p>가입이 완료되었습니다. ${userName}님 환영합니다!</p>`);
});
