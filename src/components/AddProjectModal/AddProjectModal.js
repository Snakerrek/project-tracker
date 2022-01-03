import { useState } from "react";
import { Wrapper } from "./AddProjectModal.styles";

const AddProjectModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    console.log("submit");
    toggleModal();
    event.preventDefault();
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
            <form onSubmit={handleSubmit}>
              <input
                id="title"
                type="text"
                placeholder="Name of the project"
                size="41"
              />
              <input
                id="title"
                type="text"
                placeholder="Source for background picture"
                size="41"
              />
              <textarea
                id="description"
                placeholder="Describe your project"
                rows="5"
                cols="40"
              ></textarea>
              <input type="submit" value="Add project" />
            </form>
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
