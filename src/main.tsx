import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles to override default shadcn theme
const style = document.createElement('style');
style.textContent = `
  :root {
    --font-montserrat: 'Montserrat', sans-serif;
    --font-poppins: 'Poppins', sans-serif;
  }
  
  body {
    font-family: var(--font-poppins);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-montserrat);
  }
  
  .hero-gradient {
    background: linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.75));
  }
  
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
  
  .slide-in {
    opacity: 0;
    transform: translateY(30px);
    animation: slideIn 0.5s ease forwards;
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
