function* loop() {
  let i = 0;
  for (;;) {
    yield i++;
  }
}

const gen = loop();

while (true) {
  console.log(gen.next());
  console.log("Doing something else");
}
