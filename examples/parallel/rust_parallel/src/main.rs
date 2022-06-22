use std::thread::{sleep, spawn};
use std::time::Duration;

fn task(s: &str) {
    loop {
        println!("{}", s);
    }
}

fn main() {
    let t0 = spawn(|| task("hello 0"));
    let t1 = spawn(|| task("hello 1"));
    let t2 = spawn(|| task("hello 2"));

    for t in vec![t0, t1, t2] {
        t.join().expect("join error");
    }
}
