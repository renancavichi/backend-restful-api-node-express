// Server config 
export const SERVER = {
  PORT: process.env.PORT || 3100
}

// Database config
export const DB = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASS: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_DATABASE || "apinode"
}