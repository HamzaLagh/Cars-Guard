# projet-vehicule
## Installation

1. Création du dossier de projet

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```
   MONGO_URI=mongodb://localhost:27017/projet-vehicule
   JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImhhbXphIGxhZ2huaW1pIiwiaWF0IjoxNTE2MjM5MDIyfQ.6QNmyBTfX5wNKZhw8ITaQqAbdd5TU6Gk5SCQzrc0gcM
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register**
- **POST /api/auth/login**
- **POST /api/auth/logout**

### WebSocket Events

- **position**: Receives real-time vehicle position data
- **alert**: Receives alerts when a vehicle is immobile for too long
