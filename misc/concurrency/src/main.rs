use std::thread::{sleep, spawn};
use std::time::Duration;

fn task() {
    println!("enter");
    sleep(Duration::from_millis(500));
    for i in 0..1000 {
        println!("{}", i);
    }
    println!("leave");
}

fn main() {
    let t0 = spawn(task);
    let t1 = spawn(task);
    let t2 = spawn(task);

    for t in vec![t0, t1, t2] {
        t.join().expect("join error");
    }
}
