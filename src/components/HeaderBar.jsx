/* eslint-disable react/jsx-no-comment-textnodes */
import "../styles/index.css";

function HeaderBar() {
  const headerMenu = [
    { id: "01", label: "home" },
    { id: "02", label: "expertise" },
    { id: "03", label: "projects" },
    { id: "04", label: "experience" },
    { id: "05", label: "contact" },
  ];

  return (
    <div className="font-mono text-4xl">
      <span className="font-bold absolute top-6 left-6">BryanLim._</span>
      <div className="flex flex-row justify-center mx-5 mt-2">
        <div className="flex flex-row justify-between max-w-full bg-transparent text-gray-50 text-xl">
          {headerMenu.map((menuItem) => (
            <div key={menuItem.id} className="flex flex-col relative">
              <span className="absolute top-3 right-6 text-sm text-gray-400 font-bold">
                {menuItem.id}
              </span>
              <span className="m-6">// {menuItem.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
