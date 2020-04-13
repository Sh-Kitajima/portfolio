import React, { Component } from 'react';
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <input type="text" value={this.state.value} onChange={this.handleChange} id={this.props.Id} name={this.props.Name} />
    );
  }
}

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <textarea type="text" value={this.state.value} onChange={this.handleChange} id={this.props.Id} name={this.props.Name}/>
    );
  }
}

const formId = {
  name : "contactName",
  email : "contactEmail",
  subject : "contactSubject",
  message : "contactMessage",
}

export default class ContactUs extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="contact">

        <div class="row section-head">

          <div class="two columns header-col">

            <h1><span>Get In Touch.</span></h1>

          </div>

          <div class="ten columns">

            <p class="lead">
              Feel free to contact me below
            </p>

          </div>

        </div>

        <div class="row">

          <div class="eight columns">

            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>

                <div>
                  <label for={formId.name}>Name <span class="required">*</span></label>
                  <Input type="text" size="35" Id={formId.name} Name={formId.name} />
                </div>

                <div>
                  <label for={formId.email}>Email <span class="required">*</span></label>
                  <Input type="text" size="35" Id={formId.email} Name={formId.email} />
                </div>

                <div>
                  <label for={formId.subject}>Subject</label>
                  <Input type="text" size="35" Id={formId.subject} Name={formId.subject} />
                </div>

                <div>
                  <label for={formId.message}>Message <span class="required">*</span></label>
                  <TextArea cols="50" rows="15" Id={formId.message} Name={formId.message} />
                </div>

                <div>
                  <button class="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>

              </fieldset>
            </form>

            <div id="message-warning">Send Error</div>
            <div id="message-success">
              <i class="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>

          </div>


          <aside class="four columns footer-widgets">

            <div class="widget widget_contact">

              <h4>Address</h4>
              <p class="address">
                {portfolioData.name}<br />
                {portfolioData.address}<br />
                <span>{portfolioData.mailaddress}</span>
              </p>

            </div>

          </aside>

        </div>

      </section>
    );
  }
}