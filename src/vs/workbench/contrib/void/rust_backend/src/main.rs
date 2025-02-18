use actix_web::{web, App, HttpServer, Responder};

async fn process_file() -> impl Responder {
    // Logic to process files goes here
    "File processed!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Successfully started Rust backend!");
    HttpServer::new(|| {
        App::new()
            .route("/process", web::get().to(process_file))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
