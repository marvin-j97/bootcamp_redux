function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function task() {
  console.log("enter");
  await sleep(500);
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
  console.log("leave");
}

// change this
let serial = false;

async function main() {
  if (serial) {
    await task();
    await task();
    await task();
  } else {
    await Promise.all([task(), task(), task()]);
  }
}

main();
