import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of Pictures I Took.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                portfolioData.portfolio && portfolioData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={`#${item.name}`}>
                          <img src={`${item.imageUrl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              {/* <p>{item.description}</p> */}
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {
            portfolioData.portfolio && portfolioData.portfolio.map((item) => {
              return (
                <div id={`${item.name}`} class="popup-modal mfp-hide">

                  <img class="scale-with-grid" src={`${item.imageUrl}`} alt="" />

                  <div class="description-box">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <span class="categories"><i class="fa fa-tag"></i>{item.tag}</span>
                  </div>

                  <div class="link-box">
                    <a class="popup-modal-dismiss">Close</a>
                  </div>

                </div>
              )
            })
          }
        </div>
      </section>
    );
  }
}