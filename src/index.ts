import app from './app';
import config from './config';
import { initDB } from './db';

const main = async () => {
  try {
    await initDB();
    console.log("Database initialized successfully.");
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server due to database initialization failure:", error);
    process.exit(1);
  }
};

main();
