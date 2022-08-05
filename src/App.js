import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>React Router 6 Tutorial</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/test" element={<h2>This is test</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
