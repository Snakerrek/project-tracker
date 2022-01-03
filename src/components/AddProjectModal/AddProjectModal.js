import { useState } from "react";

import AddProjectForm from "../AddProjectForm/AddProjectForm";
import { Wrapper } from "./AddProjectModal.styles";

const AddProjectModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Wrapper>
      <button onClick={toggleModal} className="btn-modal">
        +
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add project</h2>
            <AddProjectForm toggleModal={toggleModal} />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default AddProjectModal;
