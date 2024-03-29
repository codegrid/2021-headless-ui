import { useState } from "react";
import { Transition } from "@headlessui/react";

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
        className="border border-black p-8 text-9xl"
        enter="transition-all ease-in-out duration-500"
        enterFrom="transform -translate-x-12 opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform -translate-x-12 opacity-0"
      >
        👌
      </Transition>
    </div>
  );
}

export default App;
