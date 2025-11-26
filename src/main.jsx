import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TafseerUlQuran from './pages/TafseerUlQuran.jsx'
import { AboutTheAuthor } from './pages/AboutTheAuthor.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Layout from './Layout.jsx'
import MajmooaHidayat from './pages/MajmooaHidayat.jsx'
import AlHayaAlAkhlaq from './pages/AlHayaAlAkhlaq.jsx'
import { DataProvider } from './useFilteredData.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "/tafseer-ul-quran",
        element: <TafseerUlQuran />
      },
      {
        path: "/majmooa-hidayat",
        element: <MajmooaHidayat />
      },
      {
        path: "/alhayaalakhlaq",
        element: <AlHayaAlAkhlaq />
      },
      {
        path: "/about",
        element: <AboutTheAuthor />
      },
      {
        path: "/contact",
        element: <ContactUs />
      }
    ]
  },

]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </DataProvider>
  </StrictMode>,
)
