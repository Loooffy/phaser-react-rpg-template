import { useUiStore } from '../store/uiState';

export default function MessageBox() {
  const { showMessageBox, uiFsm } = useUiStore();

  const handleCloseMessageBox = () => {
    // uiActor?.send({ type: UiEvent.CloseMenu, scene: null });
    uiFsm?.backward();
  };

  return (
    showMessageBox && (
      <div className="absolute top-1/3 left-1/3 card w-96 bg-gray-500 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Message</h2>
          <p>Message</p>
          <div className="justify-end card-actions">
            <button
              className="btn btn-secondary"
              onClick={handleCloseMessageBox}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )
  );
}
