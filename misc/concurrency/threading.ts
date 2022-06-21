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

async function main() {
  await Promise.all([task(), task(), task()]);
}

main();
