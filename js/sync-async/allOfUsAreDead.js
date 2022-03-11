const 청산_달리기_속도 = 1000;
const 수혁_달리기_속도 = 2000;
const 온조_달리기_속도 = 3000;
const 남라_달리기_속도 = 4000;

// async await를 사용해서 가독성을 높인 코드

const 도망 = (이름, 달리기_속도) => {
  return new Promise((성공, 실패) => {
    setTimeout(() => {
      console.log(이름 + " 도망 완료");
      성공();
    }, 달리기_속도);
  });
};

async function 도망계획() {
  await 도망("남라", 남라_달리기_속도);
  await 도망("온조", 온조_달리기_속도);
  await 도망("수혁", 수혁_달리기_속도);
  await 도망("청산", 청산_달리기_속도);
  console.log("모두 대피 완료");
}

도망계획();
