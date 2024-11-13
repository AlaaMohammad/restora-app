import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Test Database Connection
sequelize.authenticate()
    .then((): void => {
        console.log('Connection to PostgreSQL database has been established successfully.');
    })
    .catch((error: Error): void => {
        console.error('Unable to connect to the PostgreSQL database:', error);
    });

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Sequelize with TypeScript and PostgreSQL!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
