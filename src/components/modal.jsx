import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null; // Modal won't render if not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className={`bg-white p-6 rounded-lg  max-w-4xl shadow-lg z-50 ${className}`}>
        {/* Modal Header */}
        <div className="flex justify-between items-center font-poppins mb-1">
          <button onClick={onClose} className="text-gray-600 text-xl">&times;</button>
        </div>

        {/* Modal Content */}
        <div className="max-h-96 overflow-y-auto">{children}</div> {/* Batas tinggi dan overflow */}
      </div>
    </div>
  );
};

// Menambahkan validasi PropTypes
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // Modal akan ditampilkan jika true
  onClose: PropTypes.func.isRequired, // Fungsi untuk menutup modal
  children: PropTypes.node,           // Konten yang akan ditampilkan di dalam modal           // Judul modal
  className: PropTypes.string,        // Menambahkan prop className
};

// Menambahkan defaultProps untuk properti opsional
Modal.defaultProps = {
  children: null,         // Default nilai untuk konten modal jika tidak ada konten
  className: '',          // Default nilai untuk className
};

export default Modal;