import React from 'react'

const TeamCard = ({data , index}) => {
  const {img , name , profession ,socialMedia} = data;
  
  return (
 
  <div className="team_item" key={index}>
    <div className="team_memder_image">
      <img src={ img || "/images/team/professional_img_1-min.jpg"} alt="Talking Minds - Psychotherapist Site Template" />
    </div>
    <div className="team_memder_info text-center">
      <h3 className="team_memder_designation">{profession}</h3>
      <h4 className="team_memder_name">{name}</h4>
      <ul className="social_links unordered_list justify-content-center">
        {socialMedia && socialMedia.map((item ,index)=>(
          <li><a href={item.link} key={index}><i className={item.icon} /></a></li>

        ))}
        {/* <li><a href="#!"><i className="fa-brands fa-instagram" /></a></li>
        <li><a href="#!"><i className="fa-brands fa-twitter" /></a></li>
        <li><a href="#!"><i className="fa-brands fa-whatsapp" /></a></li> */}
      </ul>
    </div>
  </div>


  )
}

export default TeamCard