import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Vendor CSS
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../public/assets/vendor/boxicons/css/boxicons.min.css'
import '../public/assets/vendor/remixicon/remixicon.css'

// Custom CSS
import '../public/assets/css/base.css'
import '../public/assets/css/header.css'
import '../public/assets/css/hero.css'
import '../public/assets/css/components.css'
import '../public/assets/css/sections.css'
import '../public/assets/css/footer.css'

import './index.css'
import './slider.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
