import { useState } from 'react';

const ProfileCard = ({ profile, displayChangePicture }) => {
  const [source, setSource] = useState(
    profile.avatar ? `https://keyservices.s3.eu-west-3.amazonaws.com/avatar/${profile.id}.jpg` : '/avatar.png'
  );

  const handlePictureChange = async (data) => {
    const res = await fetch(`/api/profile/${profile.id}/avatar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data
      })
    });

    if (res.status === 200) {
      setSource(data);
    }
  };

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      handlePictureChange(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  // handlePictureChange()
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={source} alt="profile" style={{ objectFit: 'cover' }} />
        </figure>
      </div>
      { displayChangePicture ? 
          <div className="field mx-3 my-3">
            <div className="file is-small is-primary">
              <label className="file-label">
                <input
                  onChange={changeAvatar}
                  className="file-input"
                  type="file"
                  name="avatar"
                />
                <span className="file-cta">
                  <span className="file-label">Changer votre avatar</span>
                </span>
              </label>
            </div>
          </div> : [] }
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5">{`${profile.firstname} ${profile.lastname}`}</p>
            <p className=" is-6">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p>
              Date de naissance:
              {profile.dateofbirth}
            </p>
            <p>
              Téléphone:
              {profile.phonenumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
