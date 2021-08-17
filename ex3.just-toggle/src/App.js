import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-8 py-6">
      <button
        className="p-4 border border-black"
        onClick={() => setOpen(!open)}
      >Toggle</button>
      {open && <div className="border border-black p-8 text-9xl">👌</div>} 
    </div>
  );
}

export default App;
