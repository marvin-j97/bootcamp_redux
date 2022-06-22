use futures::{join};
use tokio::time::{sleep, Duration};

async fn task() {
    println!("enter");
    sleep(Duration::from_millis(500)).await;
    for i in 0..1000 {
        println!("{}", i);
    }
    println!("leave");
}

#[tokio::main]
// #[tokio::main(flavor = "current_thread")]
async fn main() {
    let t0 = tokio::task::spawn(async {
        task().await
    });
    let t1 = tokio::task::spawn(async {
        task().await
    });
    let t2 = tokio::task::spawn(async {
        task().await
    });

    join!(t0, t1, t2);
}
