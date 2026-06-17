# PaoMessage

Deployed: https://paomessage.onrender.com

A real-time messaging application built with React and Express.js, featuring live chat, user authentication, and image sharing capabilities.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure authentication with Clerk
- **User Online Status**: Real-time online/offline indicators
- **Image Sharing**: Upload and share images via ImageKit
- **Customizable Themes**: Multiple HeroUI theme presets
- **Wallpaper Support**: Personalize chat background with custom wallpapers
- **Responsive Design**: Beautiful UI with Tailwind CSS and HeroUI
- **Docker Support**: Easy deployment with Docker

## 🛠️ Tech Stack

### Backend

- **Framework**: Express.js 5.2
- **Database**: MongoDB (Mongoose ODM)
- **Real-time**: Socket.io 4.8
- **Authentication**: Clerk
- **File Upload**: Multer + ImageKit
- **Scheduling**: Cron jobs
- **Environment**: Node.js 22

### Frontend

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4 + HeroUI
- **State Management**: Zustand
- **Routing**: React Router 7
- **HTTP Client**: Axios
- **Real-time**: Socket.io-client
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Authentication**: Clerk React

## 📋 Prerequisites

- Node.js 22+
- npm or yarn
- MongoDB database
- Clerk account (for authentication)
- ImageKit account (for image uploads)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd paomessage
```

### 2. Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Clerk
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Create a `.env.local` file in the `frontend` directory (optional):

```env
VITE_API_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 3. Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will start on `http://localhost:3000`

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 🚀 Development

### Running Both Services

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

### Available Commands

**Backend:**

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm run build` - Build for production
- `npm run db:seed` - Seed database with initial users

**Frontend:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🐳 Docker Deployment

Build and run with Docker:

```bash
# Build the image
docker build \
  --build-arg VITE_CLERK_PUBLISHABLE_KEY=your_key \
  -t paomessage:latest .

# Run the container
docker run -p 3000:3000 \
  -e MONGO_URI=your_mongodb_uri \
  -e CLERK_SECRET_KEY=your_secret \
  -e IMAGEKIT_PUBLIC_KEY=your_key \
  -e IMAGEKIT_PRIVATE_KEY=your_key \
  -e IMAGEKIT_URL_ENDPOINT=your_endpoint \
  paomessage:latest
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
paomessage/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route handlers
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API routes
│   │   ├── middleware/        # Custom middleware
│   │   ├── lib/              # Utilities (Socket.io, DB, ImageKit, Cron)
│   │   ├── seeds/            # Database seeding
│   │   ├── webhooks/         # External service webhooks
│   │   └── index.js          # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utilities and API config
│   │   ├── store/            # Zustand state stores
│   │   ├── context/          # React context
│   │   ├── assets/           # Static assets
│   │   └── App.jsx           # Root component
│   ├── public/               # Public assets
│   └── package.json
│
├── Dockerfile
└── README.md
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /signup` - Register new user
- `POST /login` - Login user
- `POST /logout` - Logout user
- `GET /profile` - Get user profile

### Message Routes (`/api/messages`)

- `GET /` - Get all conversations
- `GET /:conversationId` - Get messages in conversation
- `POST /` - Send new message
- `POST /upload` - Upload image

## 🔒 Authentication

The application uses Clerk for secure authentication:

- Sign up with email
- Automatic user creation and profile setup
- Session management
- Clerk webhook integration

## 📱 Key Components

### Frontend

- **ChatPage**: Main messaging interface
- **AuthPage**: Authentication screens
- **ChatSidebar**: Conversation list with user indicators
- **MessageList**: Message display and rendering
- **ChatComposer**: Message input and sending
- **ThemeToggle**: Dark/Light mode switcher
- **WallpaperPicker**: Background customization

### Backend

- **Authentication Controller**: User registration and login
- **Message Controller**: Message sending and retrieval
- **Socket.io Handler**: Real-time events and online status
- **Cron Jobs**: Scheduled maintenance tasks

## 🔄 Real-time Features

Socket.io events handled:

- `connect` - User connects to chat
- `disconnect` - User disconnects
- `send-message` - New message sent
- `receive-message` - Message received
- `user-online` - User comes online
- `user-offline` - User goes offline
- `typing` - User typing indicator (if implemented)

## 🎨 Customization

### Themes

Available HeroUI theme presets in `frontend/src/data/herouiThemePresets.js`

### Wallpapers

Custom wallpapers can be added to `frontend/public/wallpapers/`

## 🐛 Troubleshooting

### Connection Issues

- Ensure both backend and frontend are running
- Check environment variables are correctly set
- Verify MongoDB connection string

### Socket.io Connection Failed

- Check CORS configuration matches your frontend URL
- Verify firewall isn't blocking connections
- Check browser console for specific error messages

### ImageKit Upload Issues

- Verify ImageKit credentials are correct
- Check file size doesn't exceed limits
- Ensure file format is supported

## 📝 Environment Configuration

| Variable              | Required | Description                         |
| --------------------- | -------- | ----------------------------------- |
| PORT                  | Yes      | Backend server port (default: 3000) |
| FRONTEND_URL          | Yes      | Frontend URL for CORS               |
| MONGO_URI             | Yes      | MongoDB connection string           |
| CLERK_SECRET_KEY      | Yes      | Clerk secret key                    |
| CLERK_PUBLISHABLE_KEY | Yes      | Clerk publishable key               |
| IMAGEKIT_PUBLIC_KEY   | Yes      | ImageKit public key                 |
| IMAGEKIT_PRIVATE_KEY  | Yes      | ImageKit private key                |
| IMAGEKIT_URL_ENDPOINT | Yes      | ImageKit URL endpoint               |

## 🚢 Deployment

### Production Build

**Backend:**

```bash
cd backend
npm run build
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
```

### Cloud Deployment Options

- **Vercel**: Frontend deployment (Vite SPA)
- **Render/Railway**: Backend deployment
- **MongoDB Atlas**: Cloud database
- **Docker Hub**: Container registry for Docker deployments

## 📄 License

ISC

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For issues and questions, please check:

- Existing issues on the repository
- Clerk documentation: https://clerk.com/docs
- ImageKit documentation: https://imagekit.io/docs
- Socket.io documentation: https://socket.io/docs
