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
   JWT_SECRET=secret
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
