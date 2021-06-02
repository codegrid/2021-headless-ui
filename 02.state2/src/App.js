import { Menu } from "@headlessui/react";

function App() {
  return (
    <div className="px-8 py-6">
      <Menu>
        {({ open }) => (
          <>
            {open && (
              <div className="fixed bg-black bg-opacity-50 inset-0"></div>
            )}
            <div className="relative z-10">
              <Menu.Button className="p-4 border border-black bg-white">
                Toggle Menu!
              </Menu.Button>
              <Menu.Items>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`
                        block border border-black p-4
                        ${active ? "bg-blue-300" : "bg-white"}
                      `}
                      href="http://example.com"
                    >
                      Menu1
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`
                        block border border-black p-4
                        ${active ? "bg-blue-300" : "bg-white"}
                      `}
                      href="http://example.com"
                    >
                      Menu2
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`
                        block border border-black p-4
                        ${active ? "bg-blue-300" : "bg-white"}
                      `}
                      href="http://example.com"
                    >
                      Menu3
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`
                        block border border-black p-4
                        ${active ? "bg-blue-300" : "bg-white"}
                      `}
                      href="http://example.com"
                    >
                      Menu4
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </div>
          </>
        )}
      </Menu>
    </div>
  );
}

export default App;
