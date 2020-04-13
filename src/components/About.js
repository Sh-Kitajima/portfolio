import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let portfolioData = this.props.portfolioData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        portfolioData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{portfolioData.name}</span>
                           <br></br>
                           <span>
                              {portfolioData.address}
                           </span>
                           <br></br>
                           {/* <span>{portfolioData.website}</span> */}
                           <span>{portfolioData.mailaddress}</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}