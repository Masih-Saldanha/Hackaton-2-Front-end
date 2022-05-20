import { createRoot } from 'react-dom/client';

import App from "./../src/routeComponents/App.js";

const container = document.querySelector('.root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);