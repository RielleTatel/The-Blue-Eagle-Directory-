import OrgModal from "../components/ui/OrgModal";
import { useState } from "react";

const Testing = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="w-full h-screen">
        <button onClick={() => setModalOpen(true)} className="bg-amber-400"> Open Modal </button>
            <OrgModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Test Modal</h2>
                <p>This is inside the modal.</p>
            </OrgModal>
    </div>
    </>
  );
};

export default Testing;
