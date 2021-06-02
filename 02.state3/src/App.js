import { Menu } from "@headlessui/react";

function Overlay() {
  return <div className="fixed bg-black bg-opacity-50 inset-0"></div>;
}

function App() {
  const links = [
    { id: 1, href: "http://example.com", text: "Menu1" },
    { id: 2, href: "http://example.com", text: "Menu2" },
    { id: 3, href: "http://example.com", text: "Menu3" },
    { id: 4, href: "http://example.com", text: "Menu4" },
  ];
  return (
    <div className="px-8 py-6">
      <Menu>
        {({ open }) => (
          <>
            {open && <Overlay />}
            <div className="relative z-10">
              <Menu.Button className="p-4 border border-black bg-white">
                Toggle Menu!
              </Menu.Button>
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
            </div>
          </>
        )}
      </Menu>
    </div>
  );
}

export default App;
