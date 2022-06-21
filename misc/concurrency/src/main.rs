use std::thread::{sleep, spawn, JoinHandle};
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
    let threads: Vec<JoinHandle<_>> = (0..3).map(|_| spawn(task)).collect();

    for t in threads {
        t.join().expect("join error");
    }
}
