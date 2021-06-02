import { Transition } from "@headlessui/react";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-8 py-6">
      <button
        className="p-4 border border-black"
        onClick={() => setOpen(!open)}
      >Toggle</button>
      <Transition
        show={open}
        enter="transition-all ease-in-out duration-500"
        enterFrom="transform -translate-x-12 opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform -translate-x-12 opacity-0"
        className="border border-black p-8 text-9xl"
      >
        👌
      </Transition>
    </div>
  );
}

export default App;
