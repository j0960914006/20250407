let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    });
  }
  createMenu();
}

function draw() {
  background(255);

  // 根據滑鼠位置計算大小變化
  let sizeOffset = map(mouseX, 0, width, 20, 80);

  for (let circle of circles) {
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// 在右上角產生橫向選單
function createMenu() {
  let menu = createElement('ul');
  menu.style('position', 'absolute');
  menu.style('top', '10px');
  menu.style('right', '10px');
  menu.style('list-style', 'none');
  menu.style('padding', '0');
  menu.style('margin', '0');
  menu.style('display', 'flex'); // 設定選單為橫向排列

  let items = ['首頁', '自我介紹', '作品集', '測驗卷', '教學影片'];
  for (let item of items) {
    let li = createElement('li', item);
    li.style('margin', '0 50px ');
    li.style('background', '#f0f0f0');
    li.style('padding', '5px 10px');
    li.style('border-radius', '5px');
    li.style('cursor', 'pointer');
    li.style('font-size', '20px'); // 設定文字大小為 20px

  // 如果是 "作品集"，新增子選單
  if (item === '作品集') {
    let subMenu = createElement('ul');
    subMenu.style('position', 'absolute');
    subMenu.style('top', '40px'); // 子選單距離主選單的垂直距離
    subMenu.style('left', '0');
    subMenu.style('list-style', 'none');
    subMenu.style('padding', '0');
    subMenu.style('margin', '0');
    subMenu.style('background', '#ffffff');
    subMenu.style('border', '1px solid #ccc');
    subMenu.style('border-radius', '5px');
    subMenu.style('display', 'none'); // 預設隱藏子選單

    let subItems = ['第一周', '第二周', '第三周'];
    for (let subItem of subItems) {
      let subLi = createElement('li', subItem);
      subLi.style('padding', '5px 10px');
      subLi.style('cursor', 'pointer');
      subLi.style('border-bottom', '1px solid #ccc');
      subLi.style('font-size', '18px');
      subLi.mouseOver(() => subLi.style('background', '#bde0fe'));
      subLi.mouseOut(() => subLi.style('background', '#ffffff'));
      subMenu.child(subLi);
    }

    // 滑鼠移入時顯示子選單
    li.mouseOver(() => {
      subMenu.style('display', 'block');
    });

    // 滑鼠移出時隱藏子選單
    li.mouseOut(() => {
      subMenu.style('display', 'none');
    });

    li.child(subMenu);
  }

    // 滑鼠移入時改變背景顏色、字體顏色和邊框顏色
    li.mouseOver(() => {
      li.style('background', '#bde0fe');
      li.style('color', '#52796f');
      li.style('border', '2px solid orange'); // 邊框變成橘色
    });

    // 滑鼠移出時恢復原本樣式
    li.mouseOut(() => {
      li.style('background', '#f0f0f0');
      li.style('color', '#000');
      li.style('border', '2px solid transparent'); // 邊框恢復透明
    });

    
    menu.child(li);
  }
}
