// 1 Малюк та Карлсон
const allRef = document.querySelector(".everybody");
const malyukRef = document.querySelector(".malyuk");
const frekenRef = document.querySelector(".freken");
const malyukFrekenRef = document.querySelector(".malyuk-freken")
function cookies(option, months) {
  const allThree = 65;
  const malyuk = Math.floor(allThree / 6);
  const freken = malyuk + 4;
  const malyukFreken = malyuk + freken;

  let perMonth;

  switch (option) {
    case "all":
      perMonth = allThree;
      break;
    case "malyuk":
      perMonth = malyuk;
      break;
    case "freken":
      perMonth = freken;
      break;
    case "malyukFreken":
      perMonth = malyukFreken;
      break;
    default:
      throw new Error("Невірний вибір!");
  }

  const total = perMonth * months;
  return total;
}
allRef.textContent = `Усі троє на 3 місяці: ${cookies("all", 3)}`;
malyukRef.textContent = `Малюк сам на 5 місяців: ${cookies("malyuk", 5)}`;
frekenRef.textContent = `Фрекен Бок на 2 місяці: ${cookies("freken", 2)}`;
malyukFrekenRef.textContent = `Малюк + Фрекен Бок на 4 місяці: ${cookies("malyukFreken", 4)}`;


//2 Зимова казка
const answer1Ref = document.querySelector(".answer1");
const answer2Ref = document.querySelector(".answer2");
const answer3Ref = document.querySelector(".answer3");

function maxParts(S) {
  if (S < 4 || S > 1000000000) {
    throw new Error("Довжина стрічки повинна бути в межах 4 ≤ S ≤ 1e9");
  }
  return Math.floor(S / 2);
}

answer1Ref.textContent = maxParts(10);  
answer2Ref.textContent = maxParts(25);  
answer3Ref.textContent = maxParts(100);  

//3 Підкорювач вершин
// const fs = require("fs");

// // Зчитування з файлу
// const input = fs.readFileSync("Input3.txt", "utf8").trim().split(/\s+/);
// let idx = 0;

// const N = Number(input[idx++]);
// const heights = [];
// for (let i = 0; i < N; i++) {
//   heights.push(Number(input[idx++]));
// }

// // Матриця суміжності
// const matrix = [];
// for (let i = 0; i < N; i++) {
//   const row = [];
//   for (let j = 0; j < N; j++) {
//     row.push(Number(input[idx++]));
//   }
//   matrix.push(row);
// }

// // Знаходимо вершину з максимальною висотою
// let maxHeight = -Infinity;
// let maxIndex = -1;
// for (let i = 0; i < N; i++) {
//   if (heights[i] > maxHeight) {
//     maxHeight = heights[i];
//     maxIndex = i;
//   }
// }

// // BFS для перевірки досяжності
// const visited = Array(N).fill(false);
// const queue = [0]; // старт з вершини №1 (індекс 0)
// visited[0] = true;

// while (queue.length > 0) {
//   const v = queue.shift();
//   for (let u = 0; u < N; u++) {
//     if (matrix[v][u] === 1 && !visited[u]) {
//       visited[u] = true;
//       queue.push(u);
//     }
//   }
// }

// const reachable = visited[maxIndex];

// // Запис у файл
// let output = `${maxHeight} ${maxIndex + 1}\n`;
// output += reachable ? "Вершина доступна" : "Вершина недосяжна";

// fs.writeFileSync("Output3.txt", output);


//4 члени послідовності
const sequenceRef = document.querySelector(".sequence");

function productSequence(n, f) {
  if (n >= 100 || Math.abs(f) >= 10) {
    throw new Error("Умова: n < 100, |f| < 10");
  }

  let product = 1;
  for (let i = 1; i <= n; i++) {
    const term = (f + 1) + (i * (i + 1)) / 2;
    product *= term;
  }
  return product;
}

sequenceRef.textContent = productSequence(
  Number(prompt("Введи число n")),
  Number(prompt("Введи число f"))
)


//5 Свято дітлахів
const posRef = document.querySelector(".position");
const listRef = document.querySelector(".list")
const n = 8;
const height = [165, 163, 160, 160, 157, 157, 154];
const newHeight = 157;

let pos = 0;
while (pos < n && height[pos] >= newHeight) {
  pos++;
}

height.splice(pos, 0, newHeight);

posRef.textContent = "Місце дітлаха: " + pos + 1; 
listRef.textContent = "Список ростів: " + height.join(", ");

//6 Лампочки
const distRef = document.querySelector(".dist")
const numRef = document.querySelector(".number");
function minDistance(coords) {
  const sorted = [...coords].sort((a, b) => a - b);

  let minDist = Infinity;
  let leftIndex = -1;
  let rightIndex = -1;

  for (let i = 0; i < sorted.length - 1; i++) {
    const dist = sorted[i + 1] - sorted[i];
    if (dist < minDist) {
      minDist = dist;
      leftIndex = coords.indexOf(sorted[i]) + 1;
      rightIndex = coords.indexOf(sorted[i + 1]) + 1;
    }
  }

  return {
    minDist,
    pair: [leftIndex, rightIndex]
  };
}


const coords = [10, 3, 6, 2, 5];
const result = minDistance(coords);

distRef.textContent = "Мінімальна відстань: " + result.minDist;  
numRef.textContent = "Номери лампочок: " + result.pair.join(", "); 
