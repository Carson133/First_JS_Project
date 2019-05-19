var count = 0;
var a = 0;
var b = 1;
var c = 0;
var d = 1;
var e = 0;
var f = 1;
var g = 0;
var h = 1;
var i = 0;
onEvent("start_button", "click", function() {
  setScreen("menu");
});
onEvent("secret1", "click", function() {
  count = count + 1;
});
onEvent("button1", "click", function() {
  setScreen("easy_screen");
});
onEvent("button2", "click", function() {
  setScreen("medium_screen");
});
onEvent("quit_button4", "click", function() {
  setScreen("menu");
});
onEvent("quit_button3", "click", function() {
  setScreen("menu");
});
onEvent("quit_button2", "click", function() {
  setScreen("menu");
});
onEvent("quit_button1", "click", function() {
  setScreen("menu");
});
onEvent("button4", "click", function() {
  setScreen("expert_screen");
});
onEvent("button3", "click", function() {
  setScreen("hard_screen");
});
function changeBlock(main_block, main_var, var1, bi_block, var2, tri_block, var3, quadri_block, var4, quinque_block) {
  showElement(main_block);
  main_var = main_var + 1;
  if (var1 === 1) {
    hideElement(bi_block);
    var1 = var1 - 1;
  } else{
    showElement(bi_block);
    var1 = var1 + 1;
  }
  if (var2 === 1) {
    hideElement(tri_block);
    var2 = var2 - 1;
  } else{
    showElement(tri_block);
    var2 = var2 + 1;
  }
  if (var3 === 1) {
    hideElement(quadri_block);
    var3 = var3 - 1;
  } else{
    showElement(quadri_block);
    var3 = var3 + 1;
  }
  if (var4 === 1) {
    hideElement(quinque_block);
    var4 = var4 - 1;
  } else{
    showElement(quinque_block);
    var4 = var4 + 1;
  }
}
function changeBlock2(main_block, main_var, var1, bi_block, var2, tri_block, var3, quadri_block, var4, quinque_block) {
  hideElement(main_block);
  main_var = main_var - 1;
  if (var1 === 0) {
    hideElement(bi_block);
    var1 = var1 - 1;
  } else{
    showElement(bi_block);
    var1 = var1 + 1;
  }
  if (var2 === 0) {
    hideElement(tri_block);
    var2 = var2 - 1;
  } else{
    showElement(tri_block);
    var2 = var2 + 1;
  }
  if (var3 === 0) {
    hideElement(quadri_block);
    var3 = var3 - 1;
  } else{
    showElement(quadri_block);
    var3 = var3 + 1;
  }
  if (var4 === 0) {
    hideElement(quinque_block);
    var4 = var4 - 1;
  } else{
    showElement(quinque_block);
    var4 = var4 + 1;
  }
}

onEvent("1a", "click", function(){
  changeBlock("1b", a, b, "2b", d, "4b", 0, "fakebutton", 0, "fakebutton");
});
onEvent("1b", "click", function(){
  changeBlock2("1b", a, b, "2b", d, "4b", 0, "fakebutton", 0, "fakebutton");
});

/*onEvent("1a", "click", function() {
    showElement("1b");
    a = a + 1;
  if (b === 1) {
    hideElement("2b");
    b = b - 1;
  } else{
    showElement("2b");
    b = b + 1;
  }
  if (d === 1) {
    hideElement("4b");
    d = d - 1;
  } else{
    showElement("4b");
    d = d + 1;
  }
});*/
null;
/*onEvent("1b", "click", function() {
  hideElement("1b");
  a = a - 1;
  if (b === 0) {
    showElement("2b");
    b = b + 1;
  } else{
    hideElement("2b");
    b = b - 1;
  }
  if (d === 0) {
    showElement("4b");
    d = d + 1;
  } else{
    hideElement("4b");
    d = d - 1;
  }
});*/
onEvent("2a", "click", function() {
  showElement("2b");
  b = b + 1;
  if (a === 1) {
    hideElement("1b");
    a = a - 1;
  } else {
    showElement("1b");
    a = a + 1;
  }
  if (c === 1) {
    hideElement("3b");
    c = c - 1;
  } else{
    showElement("3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
});
onEvent("2b", "click", function() {
  hideElement("2b");
  b = b - 1;
  if (a === 1) {
    hideElement("1b");
    a = a - 1;
  } else {
    showElement("1b");
    a = a + 1;
  }
  if (c === 1) {
    hideElement("3b");
    c = c - 1;
  } else{
    showElement("3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
});
onEvent("3a", "click", function() {
  showElement("3b");
  c = c + 1;
  if (b === 1) {
    hideElement("2b");
    b = b - 1;
  } else{
    showElement("2b");
    b = b + 1;
  }
  if (f === 1) {
    hideElement("6b");
    f = f - 1;
  } else{
    showElement("6b");
    f = f + 1;
  }
});
onEvent("3b", "click", function() {
  hideElement("3b");
  c = c - 1;
  if (b === 1) {
    hideElement("2b");
    b = b - 1;
  } else{
    showElement("2b");
    b = b + 1;
  }
  if (f === 1) {
    hideElement("6b");
    f = f - 1;
  } else{
    showElement("6b");
    f = f + 1;
  }
});
onEvent("4a", "click", function() {
  showElement("4b");
  d = d + 1;
  if (a === 1) {
    hideElement("1b");
    a = a - 1;
  } else{
    showElement("1b");
    a = a + 1;
  }
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("7b");
    g = g - 1;
  } else{
    showElement("7b");
    g = g + 1;
  }
});
onEvent("4b", "click", function() {
  hideElement("4b");
  d = d - 1;
  if (a === 1) {
    hideElement("1b");
    a = a - 1;
  } else{
    showElement("1b");
    a = a + 1;
  }
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("7b");
    g = g - 1;
  } else{
    showElement("7b");
    g = g + 1;
  }
});
onEvent("5a", "click", function() {
  showElement("5b");
  e = e + 1;
  if (b === 1) {
    hideElement("2b");
    b = b - 1;
  } else{
    showElement("2b");
    b = b + 1;
  }
  if (d === 1) {
    hideElement("4b");
    d = d - 1;
  } else{
    showElement("4b");
    d = d + 1;
  }
  if (f === 1) {
    hideElement("6b");
    f = f - 1;
  } else{
    showElement("6b");
    f = f + 1;
  }
  if (h === 1) {
    hideElement("8b");
    h = h - 1;
  } else{
    showElement("8b");
    h = h + 1;
  }
});
onEvent("5b", "click", function() {
  hideElement("5b");
  e = e - 1;
  if (b === 1) {
    hideElement("2b");
    b = b - 1;
  } else{
    showElement("2b");
    b = b + 1;
  }
  if (d === 1) {
    hideElement("4b");
    d = d - 1;
  } else{
    showElement("4b");
    d = d + 1;
  }
  if (f === 1) {
    hideElement("6b");
    f = f - 1;
  } else{
    showElement("6b");
    f = f + 1;
  }
    if (h === 1) {
    hideElement("8b");
    h = h - 1;
  } else{
    showElement("8b");
    h = h + 1;
  }
});
onEvent("6a", "click", function() {
  showElement("6b");
  f = f + 1;
  if (c === 1) {
    hideElement("3b");
    c = c - 1;
  } else{
    showElement("3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
  if (i === 1) {
    hideElement("9b");
    i = i - 1;
  } else{
    showElement("9b");
    i = i + 1;
  }
});
onEvent("6b", "click", function() {
  hideElement("6b");
  f = f - 1;
  if (c === 1) {
    hideElement("3b");
    c = c - 1;
  } else{
    showElement("3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
  if (i === 1) {
    hideElement("9b");
    i = i - 1;
  } else{
    showElement("9b");
    i = i + 1;
  }
});
onEvent("7a", "click", function() {
  showElement("7b");
  g = g + 1;
  if (d === 1) {
    hideElement("4b");
    d = d - 1;
  } else{
    showElement("4b");
    d = d + 1;
  }
  if (h === 1) {
    hideElement("8b");
    h = h - 1;
  } else{
    showElement("8b");
    h = h + 1;
  }
});
onEvent("7b", "click", function() {
  hideElement("7b");
  g = g - 1;
  if (d === 1) {
    hideElement("4b");
    d = d - 1;
  } else{
    showElement("4b");
    d = d + 1;
  }
  if (h === 1) {
    hideElement("8b");
    h = h - 1;
  } else{
    showElement("8b");
    h = h + 1;
  }
});
onEvent("8a", "click", function() {
  showElement("8b");
  h = h + 1;
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("7b");
    g = g - 1;
  } else{
    showElement("7b");
    g = g + 1;
  }
  if (i === 1) {
    hideElement("9b");
    i = i - 1;
  } else{
    showElement("9b");
    i = i + 1;
  }
});
onEvent("8b", "click", function() {
  hideElement("8b");
  h = h - 1;
  if (e === 1) {
    hideElement("5b");
    e = e - 1;
  } else{
    showElement("5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("7b");
    g = g - 1;
  } else{
    showElement("7b");
    g = g + 1;
  }
  if (i === 1) {
    hideElement("9b");
    i = i - 1;
  } else{
    showElement("9b");
    i = i + 1;
  }
});
onEvent("9a", "click", function() {
  showElement("9b");
  i = i + 1;
  if (f === 1) {
    hideElement("6b");
    f = f - 1;
  } else{
    showElement("6b");
    f = f + 1;
  }
  if (h === 1) {
    hideElement("8b");
    h = h - 1;
  } else{
    showElement("8b");
    h = h + 1;
  }
});
onEvent("9b", "click", function() {
  hideElement("9b");
  i = i - 1;
  if (f === 1) {
    hideElement("6b");
    f = f - 1;
  } else{
    showElement("6b");
    f = f + 1;
  }
  if (h === 1) {
    hideElement("8b");
    h = h - 1;
  } else{
    showElement("8b");
    h = h + 1;
  }
});
onEvent("answer_check", "click", function() {
  if(a === 0 && b ===0 && c === 0 && d === 0 && e ===0 && f === 0 && g === 0 && h ===0 && i === 0) {
    showElement("button1");
    console.log("correct");
  }
});



//easy game code ---------------------------------------------------------------



onEvent("button1","click",function(){
  a = randomNumber(0 , 1);
  b = randomNumber(0 , 1);
  c = randomNumber(0 , 1);
  d = randomNumber(0 , 1);
  e = randomNumber(0 , 1);
  f = randomNumber(0 , 1);
  g = randomNumber(0 , 1);
  h = randomNumber(0 , 1);
  i = randomNumber(0 , 1);
  if(a === 0){
    hideElement("e_1b");
  } else{
    showElement("e_1b");
  }
  if(b === 0){
    hideElement("e_2b");
  } else{
    showElement("e_2b");
  }
  if(c === 0){
    hideElement("e_3b");
  } else{
    showElement("e_3b");
  }
  if(d === 0){
    hideElement("e_4b");
  } else{
    showElement("e_4b");
  }
  if(e === 0){
    hideElement("e_5b");
  } else{
    showElement("e_5b");
  }
  if(f === 0){
    hideElement("e_6b");
  } else{
    showElement("e_6b");
  }
  if(g === 0){
    hideElement("e_7b");
  } else{
    showElement("e_7b");
  }
  if(h === 0){
    hideElement("e_8b");
  } else{
    showElement("e_8b");
  }
  if(i === 0){
    hideElement("e_9b");
  } else{
    showElement("e_9b");
  }
});
onEvent("e_1a", "click", function() {
    showElement("e_1b");
    a = a + 1;
  if (b === 1) {
    hideElement("e_2b");
    b = b - 1;
  } else{
    showElement("e_2b");
    b = b + 1;
  }
  if (d === 1) {
    hideElement("e_4b");
    d = d - 1;
  } else{
    showElement("e_4b");
    d = d + 1;
  }
});
onEvent("e_1b", "click", function() {
  hideElement("e_1b");
  a = a - 1;
  if (b === 0) {
    showElement("e_2b");
    b = b + 1;
  } else{
    hideElement("e_2b");
    b = b - 1;
  }
  if (d === 0) {
    showElement("e_4b");
    d = d + 1;
  } else{
    hideElement("e_4b");
    d = d - 1;
  }
});
onEvent("e_2a", "click", function() {
  showElement("e_2b");
  b = b + 1;
  if (a === 1) {
    hideElement("e_1b");
    a = a - 1;
  } else {
    showElement("e_1b");
    a = a + 1;
  }
  if (c === 1) {
    hideElement("e_3b");
    c = c - 1;
  } else{
    showElement("e_3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
});
onEvent("e_2b", "click", function() {
  hideElement("e_2b");
  b = b - 1;
  if (a === 1) {
    hideElement("e_1b");
    a = a - 1;
  } else {
    showElement("e_1b");
    a = a + 1;
  }
  if (c === 1) {
    hideElement("e_3b");
    c = c - 1;
  } else{
    showElement("e_3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
});
onEvent("e_3a", "click", function() {
  showElement("e_3b");
  c = c + 1;
  if (b === 1) {
    hideElement("e_2b");
    b = b - 1;
  } else{
    showElement("e_2b");
    b = b + 1;
  }
  if (f === 1) {
    hideElement("e_6b");
    f = f - 1;
  } else{
    showElement("e_6b");
    f = f + 1;
  }
});
onEvent("e_3b", "click", function() {
  hideElement("e_3b");
  c = c - 1;
  if (b === 1) {
    hideElement("e_2b");
    b = b - 1;
  } else{
    showElement("e_2b");
    b = b + 1;
  }
  if (f === 1) {
    hideElement("e_6b");
    f = f - 1;
  } else{
    showElement("e_6b");
    f = f + 1;
  }
});
onEvent("e_4a", "click", function() {
  showElement("e_4b");
  d = d + 1;
  if (a === 1) {
    hideElement("e_1b");
    a = a - 1;
  } else{
    showElement("e_1b");
    a = a + 1;
  }
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("e_7b");
    g = g - 1;
  } else{
    showElement("e_7b");
    g = g + 1;
  }
});
onEvent("e_4b", "click", function() {
  hideElement("e_4b");
  d = d - 1;
  if (a === 1) {
    hideElement("e_1b");
    a = a - 1;
  } else{
    showElement("e_1b");
    a = a + 1;
  }
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("e_7b");
    g = g - 1;
  } else{
    showElement("e_7b");
    g = g + 1;
  }
});
onEvent("e_5a", "click", function() {
  showElement("e_5b");
  e = e + 1;
  if (b === 1) {
    hideElement("e_2b");
    b = b - 1;
  } else{
    showElement("e_2b");
    b = b + 1;
  }
  if (d === 1) {
    hideElement("e_4b");
    d = d - 1;
  } else{
    showElement("e_4b");
    d = d + 1;
  }
  if (f === 1) {
    hideElement("e_6b");
    f = f - 1;
  } else{
    showElement("e_6b");
    f = f + 1;
  }
  if (h === 1) {
    hideElement("e_8b");
    h = h - 1;
  } else{
    showElement("e_8b");
    h = h + 1;
  }
});
onEvent("e_5b", "click", function() {
  hideElement("e_5b");
  e = e - 1;
  if (b === 1) {
    hideElement("e_2b");
    b = b - 1;
  } else{
    showElement("e_2b");
    b = b + 1;
  }
  if (d === 1) {
    hideElement("e_4b");
    d = d - 1;
  } else{
    showElement("e_4b");
    d = d + 1;
  }
  if (f === 1) {
    hideElement("e_6b");
    f = f - 1;
  } else{
    showElement("e_6b");
    f = f + 1;
  }
    if (h === 1) {
    hideElement("e_8b");
    h = h - 1;
  } else{
    showElement("e_8b");
    h = h + 1;
  }
});
onEvent("e_6a", "click", function() {
  showElement("e_6b");
  f = f + 1;
  if (c === 1) {
    hideElement("e_3b");
    c = c - 1;
  } else{
    showElement("e_3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
  if (i === 1) {
    hideElement("e_9b");
    i = i - 1;
  } else{
    showElement("e_9b");
    i = i + 1;
  }
});
onEvent("e_6b", "click", function() {
  hideElement("e_6b");
  f = f - 1;
  if (c === 1) {
    hideElement("e_3b");
    c = c - 1;
  } else{
    showElement("e_3b");
    c = c + 1;
  }
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
  if (i === 1) {
    hideElement("e_9b");
    i = i - 1;
  } else{
    showElement("e_9b");
    i = i + 1;
  }
});
onEvent("e_7a", "click", function() {
  showElement("e_7b");
  g = g + 1;
  if (d === 1) {
    hideElement("e_4b");
    d = d - 1;
  } else{
    showElement("e_4b");
    d = d + 1;
  }
  if (h === 1) {
    hideElement("e_8b");
    h = h - 1;
  } else{
    showElement("e_8b");
    h = h + 1;
  }
});
onEvent("e_7b", "click", function() {
  hideElement("e_7b");
  g = g - 1;
  if (d === 1) {
    hideElement("e_4b");
    d = d - 1;
  } else{
    showElement("e_4b");
    d = d + 1;
  }
  if (h === 1) {
    hideElement("e_8b");
    h = h - 1;
  } else{
    showElement("e_8b");
    h = h + 1;
  }
});
onEvent("e_8a", "click", function() {
  showElement("e_8b");
  h = h + 1;
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("e_7b");
    g = g - 1;
  } else{
    showElement("e_7b");
    g = g + 1;
  }
  if (i === 1) {
    hideElement("e_9b");
    i = i - 1;
  } else{
    showElement("e_9b");
    i = i + 1;
  }
});
onEvent("e_8b", "click", function() {
  hideElement("e_8b");
  h = h - 1;
  if (e === 1) {
    hideElement("e_5b");
    e = e - 1;
  } else{
    showElement("e_5b");
    e = e + 1;
  }
  if (g === 1) {
    hideElement("e_7b");
    g = g - 1;
  } else{
    showElement("e_7b");
    g = g + 1;
  }
  if (i === 1) {
    hideElement("e_9b");
    i = i - 1;
  } else{
    showElement("e_9b");
    i = i + 1;
  }
});
onEvent("e_9a", "click", function() {
  showElement("e_9b");
  i = i + 1;
  if (f === 1) {
    hideElement("e_6b");
    f = f - 1;
  } else{
    showElement("e_6b");
    f = f + 1;
  }
  if (h === 1) {
    hideElement("e_8b");
    h = h - 1;
  } else{
    showElement("e_8b");
    h = h + 1;
  }
});
onEvent("e_9b", "click", function() {
  hideElement("e_9b");
  i = i - 1;
  if (f === 1) {
    hideElement("e_6b");
    f = f - 1;
  } else{
    showElement("e_6b");
    f = f + 1;
  }
  if (h === 1) {
    hideElement("e_8b");
    h = h - 1;
  } else{
    showElement("e_8b");
    h = h + 1;
  }
});
onEvent("e_answer_check", "click", function() {
  if(a === 0 && b ===0 && c === 0 && d === 0 && e ===0 && f === 0 && g === 0 && h ===0 && i === 0) {
    showElement("e_congrats");
    showElement("button50");
    showElement("button2");
    console.log("correct");
  } else{
    write("WRONG!");
  }
});
onEvent("button50", "click", function() {
  setScreen("menu");
  hideElement("e_congrats");
  
});
