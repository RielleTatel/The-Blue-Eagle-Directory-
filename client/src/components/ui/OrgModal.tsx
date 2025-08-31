import { useEffect, useRef } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import include from "../../hookQueries/OrgInsertion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrgModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { formData, handleChange, handleSubmit } = include(); 

  useEffect(() => {
    const dialog = modalRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const isInDialog = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
    
    if (!isInDialog) {
      onClose();
    }
  };

  return (
    <dialog 
      ref={modalRef} 
      onClose={onClose}
      onClick={handleBackdropClick}
      className="backdrop:bg-opacity-50 bg-transparent p-0 max-w-2xl w-full rounded-xl shadow-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div 
        className="bg-white rounded-xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-gray-900">
            Add New Organization
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" 
              onSubmit={handleSubmit}
        >
          {/* Organization Name */}
          <div>
            <label htmlFor="orgName" className="block text-sm font-semibold text-gray-700 mb-2">
              Organization Name *
            </label>
            <input
              id="orgName"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-body"
              placeholder="Enter organization name"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
              Description 
            </label>
            <input
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical font-body"
              placeholder="Describe the organization's mission, activities, and goals..."
            />
          </div>

          {/* Facebook Link */}
          <div>
            <label htmlFor="facebookLink" className="block text-sm font-semibold text-gray-700 mb-2">
              Facebook Link
            </label>
            <input
              id="facebookLink"
              type="url"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-body"
              placeholder="https://www.facebook.com/yourorganization"
            />
          </div>

          {/* Word Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Word Tags
            </label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-body"
                  placeholder="Tag 1"
                />
                <button
                  type="button"
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Remove tag 1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-body"
              >
                <Plus className="w-4 h-4" />
                Add another tag
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors font-body"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg font-body"
            >
              Create Organization
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default OrgModal;
