# WatchAura - Next.js 15 App

A modern watch collection application built with Next.js 15 App Router, React 19, and Firebase Authentication.

## Features

- **Next.js 15 App Router**: Modern routing with the new app directory structure
- **Firebase Authentication**: Complete auth system with email/password and Google sign-in
- **React 19**: Latest React features with JSX components
- **Tailwind CSS + DaisyUI**: Beautiful, responsive styling
- **Protected Routes**: Client-side route protection for authenticated users
- **Email Verification**: Required email verification for new users
- **Profile Management**: User profile updates with photo and name editing

## Project Structure

```
app/
├── auth/
│   ├── login/page.jsx          # Login page
│   └── register/page.jsx       # Registration page
├── components/
│   ├── Loader.jsx              # Loading component
│   └── Navbar/
│       └── Navbar.jsx          # Navigation component
├── firebase/
│   └── firebase.config.jsx     # Firebase configuration
├── providers/
│   ├── AuthProvider.jsx        # Authentication context provider
│   └── PrivateRoute.jsx        # Protected route wrapper
├── add-watch/page.jsx          # Add watch page
├── collections/page.jsx        # Collections page
├── profile/page.jsx            # User profile page
├── globals.css                 # Global styles
├── layout.jsx                  # Root layout
├── not-found.jsx              # 404 error page
└── page.jsx                   # Home page
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project
   - Enable Authentication with Email/Password and Google providers
   - Update `app/firebase/firebase.config.jsx` with your Firebase config

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication Flow

1. **Registration**: Users register with email/password and receive verification email
2. **Email Verification**: Users must verify email before accessing protected routes
3. **Login**: Email/password or Google sign-in options
4. **Protected Routes**: Automatic redirection for unauthenticated users
5. **Profile Management**: Users can update display name and profile photo

## Key Components

### AuthProvider

Manages authentication state and provides auth methods throughout the app.

### PrivateRoute

Wrapper component that protects routes requiring authentication.

### Navbar

Responsive navigation with user authentication status and dropdown menu.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React version
- **Firebase**: Authentication and backend services
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **React Icons**: Icon library
- **React Toastify**: Toast notifications

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Migration from Vite/React Router

This project was successfully migrated from a Vite + React Router setup to Next.js 15 App Router:

- Converted React Router navigation to Next.js Link and useRouter
- Migrated authentication context to work with Next.js
- Updated file structure to follow App Router conventions
- Converted all components to use .jsx extensions
- Maintained Firebase authentication functionality
- Preserved all existing styling and UI components
