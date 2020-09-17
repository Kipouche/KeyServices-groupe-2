import { useState } from 'react';

const Modal = ({ id, remove }) => {
  const [active, setActive] = useState(true);
  const [image, setImage] = useState(
    `https://keyservices.s3.eu-west-3.amazonaws.com/pictures/${id}_0.jpg`
  );
  const [index, setIndex] = useState(0);

  const loadImage = async (i) => {
    if (index + i === -1 || index + i === 0) {
      setIndex(0);
      return setImage(
        `https://keyservices.s3.eu-west-3.amazonaws.com/pictures/${id}_0.jpg`
      );
    }
    const res = await fetch(
      `https://keyservices.s3.eu-west-3.amazonaws.com/pictures/${id}_${
        index + i
      }.jpg`
    );

    if (res.status !== 200) {
      return null;
    }
    setImage(
      `https://keyservices.s3.eu-west-3.amazonaws.com/pictures/${id}_${
        index + i
      }.jpg`
    );
    return setIndex(index + i);
  };

  return (
    <>
      <div className={`modal ${active ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={image} alt="" />
          </p>
        </div>
        <div className="buttons my-2">
          <button
            type="button"
            className="button is-primary"
            onClick={() => loadImage(-1)}
          >
            Précédent
          </button>
          <button
            onClick={() => loadImage(1)}
            type="button"
            className="button is-primary"
          >
            Suivant
          </button>
        </div>

        <button className="modal-close is-large" onClick={() =>remove(false)} aria-label="close"></button>
      </div>
    </>
  );
};

export default Modal;
