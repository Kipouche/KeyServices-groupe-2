import { useState } from 'react';

const FilterSearch = ({ handleSubmit }) => {
  const [area, setArea] = useState(0);
  const [district, setDistrict] = useState(0);
  const [bed, setBed] = useState(0);
  const [room, setRoom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit({
      area: area || '',
      district: district || '',
      bed: bed || '',
      room: room || '',
      bathroom: bathroom || '',
      priceMax: priceMax || '',
      priceMin: priceMin || ''
    });
  };

  return (
    <div className="column is-2 notification ">
      <form onSubmit={handleSubmitForm}>
        <div className="field">
          <div className="control">
            <label className="label">
              Arrondissement: {district || ''}
              <input
                style={{ width: '100%' }}
                type="range"
                name="district"
                value={district}
                onChange={(e) => setDistrict(parseInt(e.target.value, 10))}
                min="0"
                max="20"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Surface minimum: {area}
              <input
                style={{ width: '100%' }}
                type="range"
                name="area"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value, 10))}
                min="0"
                max="300"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Lit minimum: {bed}
              <input
                style={{ width: '100%' }}
                type="range"
                name="bed"
                value={bed}
                onChange={(e) => setBed(parseInt(e.target.value, 10))}
                min="0"
                max="10"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Chambre minimum: {room}
              <input
                style={{ width: '100%' }}
                type="range"
                name="room"
                value={room}
                onChange={(e) => setRoom(parseInt(e.target.value, 10))}
                min="0"
                max="15"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Salle de bain minimum: {bathroom}
              <input
                style={{ width: '100%' }}
                type="range"
                name="bathroom"
                value={bathroom}
                onChange={(e) => setBathroom(parseInt(e.target.value, 10))}
                min="0"
                max="15"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Prix minimum: {priceMin}
              <input
                style={{ width: '100%' }}
                type="range"
                name="priceMin"
                value={priceMin}
                onChange={(e) => setPriceMin(parseInt(e.target.value, 10))}
                min="0"
                max="15"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Prix maximum: {priceMax}
              <input
                style={{ width: '100%' }}
                type="range"
                name="priceMax"
                value={priceMax}
                onChange={(e) => setPriceMax(parseInt(e.target.value, 10))}
                min="0"
                max="15"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="buttons">
              <button
                className="button is-primary  has-text-white  is-fullwidth"
                type="submit"
              >
                Filtrer
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterSearch;
