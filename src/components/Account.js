import React, { Component } from 'react';

class Account extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      valueHowMany: '',
      valueTitle: '',
      listAll: [],
      formError: [
        {title: 0, number: 0}
      ]
    };
  };
  
  // functions ------------------------------------------------------------------------------------------
  won(event) {
    event.preventDefault();
    // calculate the result, count = count + valueHowMany
    let result = Number(this.state.count) + Number(this.state.valueHowMany)

    // get the date
    let fullDate = (new Date().getMonth() + 1)+'-'+(new Date().getDate())+'-'+(new Date().getFullYear())+' '+(new Date().getHours())+'h'+new Date().getMinutes();

    // execute only if the 'inputNumber' is a number (with regex) and if the 'valueTitle' is not empty
    // append to 'listAll' new values: (title | transaction | howMany | date) before old values
    let regex = /^[0-9\b]+$/;
    if(this.state.valueTitle !== '' && this.state.valueHowMany !== '' && regex.test(this.state.valueHowMany)) {
      this.setState({
        count: result,
        listAll: [
          {title: this.state.valueTitle, transaction: '+', howMany: this.state.valueHowMany, date: fullDate},
            ...this.state.listAll
        ],
        valueTitle: '',
        valueHowMany: ''
      });
    } else { console.log('⛔️ Form is not good'); };
  }

  spent(event) {
    event.preventDefault();
    // calculate the result, count = count - valueHowMany
    let result = Number(this.state.count) - Number(this.state.valueHowMany)

    // get the date
    let fullDate = (new Date().getMonth() + 1)+'-'+(new Date().getDate())+'-'+(new Date().getFullYear())+' '+(new Date().getHours())+'h'+new Date().getMinutes();

    // also, test if result of operation is >= 0 
    // append to listAll new values: (title | transaction | howMany | date) before old values
    let regex = /^[0-9\b]+$/;
    if(this.state.valueTitle !== '' && this.state.valueHowMany !== '' && regex.test(this.state.valueHowMany) && result >= 0) {
      this.setState({
        count: result,
        fullDate: fullDate,
        listAll: [
          {title: this.state.valueTitle, transaction: '-', howMany: this.state.valueHowMany, date: fullDate},
            ...this.state.listAll
        ],
        valueTitle: '',
        valueHowMany: ''
      })
    } else { console.log('⛔️ Form is not good'); };
  }

  renderOnDOM() {
    // iterate items -> item and render on DOM the elements of the list "listAll"
    return this.state.listAll.map((item, index) => {
      return(
        <div className="itemRecent" key={index}>
          <h5>{item.title} • {item.date}</h5>
          <h5>{item.transaction}{Number(item.howMany).toLocaleString()} {this.props.currency}</h5>
        </div>
      )
    });
  }

  // render ------------------------------------------------------------------------------------------
  render() {
    const placeholderHowMany = "How many... (without "+this.props.currency+")"
    return(
      <div>
        <div className="balance">
          <h2 className="nbBalance">{this.state.count.toLocaleString()} {this.props.currency}</h2>
        </div>

        <div className="action">
          <form>
              <input
                value={this.state.valueTitle}
                onChange={(e) => this.setState({ valueTitle: e.target.value })}
                placeholder='Title of transaction..'
              />
              <input
                value={this.state.valueHowMany}
                onChange={(e) => this.setState({ valueHowMany : e.target.value })}
                placeholder={placeholderHowMany}
              />
          <button className="button1" onClick={this.won.bind(this)}>Won</button>
          <button className="button2" onClick={this.spent.bind(this)}>Spent</button>
          </form>
        </div>

        <div>
          <div className="recent">
            <h2>Recents transactions</h2>
            {this.renderOnDOM()}
          </div>
        </div>
      </div>
    );
  }
}

export default Account;