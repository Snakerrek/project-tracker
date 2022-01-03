import styled from "styled-components";

export const Wrapper = styled.div`
  .btn-modal {
    border: none;
    font-size: 64px;
    color: white;
    background: transparent;
    padding: 0 20px;
  }

  .btn-modal:hover {
    border: solid 2px white;
    border-radius: 5px;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    padding: 14px 28px;
    border-radius: 20px;
    max-width: 600px;
    min-width: 300px;
    color: var(--darkGrey);
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;

    border: none;
    font-size: 32px;
    color: black;
    background: transparent;
    padding: 5px;
  }

  .close-modal:hover {
    border: solid 2px black;
    border-radius: 5px;
  }
`;
