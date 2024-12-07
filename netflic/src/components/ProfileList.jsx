import {profileData} from "./ProfileData.js"
import Profile from "./Profile.jsx"
const ProfileList = () => {
   
  return (
    <div>
      {profileData.map((profile)=>{

<Profile key={profile.id}  profile={profile}/>

      })}
    </div>
  )
}

export default ProfileList
