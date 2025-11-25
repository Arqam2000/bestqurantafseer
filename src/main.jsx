import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TafseerUlQuran from './pages/TafseerUlQuran.jsx'
import { AboutTheAuthor } from './pages/AboutTheAuthor.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/tafseer-ul-quran",
    element: <TafseerUlQuran />
  },
  {
    path: "/about",
    element: <AboutTheAuthor />
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
