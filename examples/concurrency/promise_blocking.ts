function fn() {
  new Promise<void>((resolve) => {
    console.log("new promise!");
    resolve();
  }).then(() => {
    console.log("created promise");
    process.exit(0);
  });
}

fn();

// change this
const block = true;

while (block) {
  console.log("hello");
}
