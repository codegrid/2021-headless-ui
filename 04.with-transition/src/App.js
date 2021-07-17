import { Transition, Menu } from "@headlessui/react";

function Overlay({ open }) {
  return (
    <Transition
      show={open}
      enter="transition-all duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed bg-black bg-opacity-50 inset-0"
    ></Transition>
  );
}

function App() {
  const links = [
    { id: 1, href: "https://example.com", text: "Menu1" },
    { id: 2, href: "https://example.com", text: "Menu2" },
    { id: 3, href: "https://example.com", text: "Menu3" },
    { id: 4, href: "https://example.com", text: "Menu4" },
  ];
  return (
    <div className="px-8 py-6">
      <Menu>
        {({ open }) => (
          <>
            <Overlay open={open} />
            <div className="relative z-10">
              <Menu.Button className="p-4 border border-black bg-white">
                Toggle Menu!
              </Menu.Button>
              <Transition
                show={open}
                enter="transition-all ease-in-out duration-500"
                enterFrom="transform -translate-x-12 opacity-0"
                enterTo="transform translate-x-0 opacity-100"
                leave="transition-all ease-in-out duration-500"
                leaveFrom="transform translate-x-0 opacity-100"
                leaveTo="transform -translate-x-12 opacity-0"
              >
                <Menu.Items>
                  {links.map((link) => (
                    <Menu.Item key={link.id}>
                      {({ active }) => (
                        <a
                          href={link.href}
                          className={`
                            block border border-black p-4
                            ${active ? "bg-blue-300" : "bg-white"}
                          `}
                        >
                          {link.text}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </div>
          </>
        )}
      </Menu>
    </div>
  );
}

export default App;
