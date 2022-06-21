use std::thread;

fn task() {
    println!("enter");
    std::thread::sleep(std::time::Duration::from_millis(500));
    for i in 0..1000 {
        println!("{}", i);
    }
    println!("leave");
}

fn main() {
    let t0 = thread::spawn(task);
    let t1 = thread::spawn(task);
    let t2 = thread::spawn(task);

    for t in vec![t0, t1, t2] {
        t.join().expect("join error");
    }
}
