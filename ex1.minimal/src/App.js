import { Menu } from '@headlessui/react';

function App() {
  return (
    <div className="px-8 py-6">
      <Menu>
        <Menu.Button>
          Toggle Menu!
        </Menu.Button>
        <Menu.Items>
          <Menu.Item><a href="http://example.com">Menu1</a></Menu.Item>
          <Menu.Item><a href="http://example.com">Menu2</a></Menu.Item>
          <Menu.Item><a href="http://example.com">Menu3</a></Menu.Item>
          <Menu.Item><a href="http://example.com">Menu4</a></Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default App;
