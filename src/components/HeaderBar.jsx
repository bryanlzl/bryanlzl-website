/* eslint-disable react/jsx-no-comment-textnodes */
import "../styles/index.css";

function HeaderBar() {
  const headerMenu = [
    { id: 0, label: "home" },
    { id: 1, label: "expertise" },
    { id: 2, label: "projects" },
    { id: 3, label: "experience" },
    { id: 4, label: "contact" },
  ];

  return (
    <div className="font-mono">
      <span className="flex flex-row font-bold absolute top-9 left-9 text-top-left-name">
        <p className="text-blue-300">BryanLim</p>
        <p className="text-white">.</p>
        <p className="text-green-500">_</p>
      </span>
      <div className="flex flex-row justify-center mx-5 mt-6">
        <div className="flex flex-row justify-between max-w-full bg-transparent text-gray-50">
          {headerMenu.map((menuItem, index) => (
            <div
              key={menuItem.id}
              className="flex flex-col relative text-menu-item"
            >
              <span className="absolute top-4 right-6 text-gray-400 font-bold text-menu-item-id">
                {`0${index + 1}`}
              </span>
              <span className="m-6 text-menu-item font-bold">
                // {menuItem.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
