import { useUiStore } from '../store/uiState';

export default function Menu() {
  const { showMenu, uiFsm } = useUiStore();

  const handleCloseMenu = () => {
    uiFsm?.backward();
  };

  return (
    showMenu && (
      <div className="absolute top-0 right-0 card w-1/4 h-1/1 bg-gray-500 shadow-sm rounded-none">
        <div className="card-body">
          <div className="justify-end card-actions">
            <button className="btn btn-soft" onClick={handleCloseMenu}>
              X
            </button>
          </div>
          <h2 className="card-title">Menu</h2>
          <p>Hello RPG</p>
        </div>
      </div>
    )
  );
}
