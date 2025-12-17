import { useEffect } from "react";
import YouTube from "react-youtube";
import "./TrailerModal.css";

function TrailerModal({ videoId, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!videoId) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <YouTube
          videoId={videoId}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: { autoplay: 1 },
          }}
        />
      </div>
    </div>
  );
}

export default TrailerModal;
