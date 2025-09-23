import { useEffect, useState } from 'react';

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowMenu(!showMenu);
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [showMenu]);

  return showMenu ? (
    <div className="absolute top-1/3 left-1/3 card w-96 bg-gray-500 card-xs shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Menu</h2>
        <p>Hello RPG</p>
        <div className="justify-end card-actions">
          <button className="btn btn-neutral" onClick={handleCloseMenu}>
            OK
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
