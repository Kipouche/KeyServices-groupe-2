import { useRouter } from 'next/router'

const Profile = () => {
    const router = useRouter()
    const { profileId } = router.query

    return (
      <section className="section">
        <h1 className="title">Profile</h1>
        <p>Ceci est la page du profile : {profileId} </p>
      </section>
    )
  }
  
  export default Profile;