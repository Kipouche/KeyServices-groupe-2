import Link from 'next/link';

const PropertyCard = ({
  id,
  title,
  address,
  city,
  district,
  validated,
  price
}) => (
  <div className="card card-homepage">
    <div className="card-image">
      <figure className="card-homepage-image transition image is-square">
        <Link href={`/dashboard/property/${id}`}>
          <a>
            {validated ? (
              <img
                style={{ objectFit: 'cover' }}
                src={`https://keyservices.s3.eu-west-3.amazonaws.com/pictures/${id}_0.jpg`}
                alt="property"
              />
            ) : (
              <img
                style={{ objectFit: 'cover' }}
                src="/property/1_1.jpg"
                alt="property"
              />
            )}
          </a>
        </Link>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-24x24">
            <img src="/logo-square.png" alt="property" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-5">{title || 'To be done'}</p>
          <p className="subtitle is-6">
            Lien vers la 
            <Link href={`/dashboard/property/${id}`}>
              <a>description</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="content">{`${address}, ${city}, 750${district}`}</div>
    </div>
  </div>
);

export default PropertyCard;
