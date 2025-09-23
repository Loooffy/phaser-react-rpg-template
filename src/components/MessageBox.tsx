import { useGameStore } from '../zustand/store';

export default function Menu() {
  const message = useGameStore((state) => state.message);
  const showMessageBox = useGameStore((state) => state.showMessageBox);

  const handleCloseMessageBox = () => {
    useGameStore.setState({ showMessageBox: false });
  };

  return showMessageBox ? (
    <div className="absolute top-1/3 left-1/3 card w-96 bg-gray-500 card-xs shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Message</h2>
        <p>{message}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-secondary" onClick={handleCloseMessageBox}>
            OK
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
