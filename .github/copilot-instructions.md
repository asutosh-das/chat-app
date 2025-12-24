# Chat App - AI Coding Guidelines

## Architecture Overview
This is a React-based chat application using Vite for build tooling, Firebase for backend services (authentication, real-time database), React Router for navigation, and React Toastify for notifications.

- **Routing**: Simple SPA with routes defined in `src/App.jsx`:
  - `/` → Login page (`src/pages/Login/Login.jsx`)
  - `/chat` → Chat interface (`src/pages/Chat/Chat.jsx`)
  - `/profile` → Profile update (`src/pages/ProfileUpdate/ProfileUpdate.jsx`)

- **Asset Management**: All images/icons imported and exported from `src/assets/assets.js` for centralized access.

- **Styling**: Page-specific CSS files (e.g., `Login.css`) with global reset in `src/index.css`.

## Key Patterns
- **Component Structure**: Place reusable components in `src/components/`. Pages in `src/pages/` with paired CSS files.
- **Firebase Integration**: Configure Firebase in `src/config/` (e.g., `firebase.js` for initialization).
- **State Management**: Use React Context in `src/context/` for app-wide state (e.g., user auth, chat data).
- **Utilities**: Helper functions in `src/lib/`.
- **Notifications**: Use `react-toastify` for user feedback (import `ToastContainer` in `App.jsx` and call `toast.success/error`).

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview**: `npm run preview` after build

## ESLint Rules
- `no-unused-vars`: Errors on unused vars except those starting with uppercase (e.g., imported components).

## Firebase Setup
Initialize Firebase app in config, use Firestore for chat messages, Auth for user management. Enable real-time listeners for live chat updates.

## Example Patterns
- Import assets: `import assets from '../../assets/assets.js'; <img src={assets.logo_big} />`
- Add routes: Update `src/App.jsx` Routes component.
- Toast notifications: `import { toast } from 'react-toastify'; toast.success('Message sent!');`</content>
<parameter name="filePath">d:\GitHub\chat-app\.github\copilot-instructions.md