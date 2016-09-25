class Counter extends React.Component {
  handleMinusOne = () => this.props.alterPlankTimer(-1);
  handlePlusOne = () => this.props.alterPlankTimer(+1);
  handleMinusFive = () => this.props.alterPlankTimer(-5);
  handlePlusFive = () => this.props.alterPlankTimer(+5);

  render() {
    const { plankTime } = this.props;

    return (
      <div className="counter">
        <div className="counter-controls">
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              onClick={this.handleMinusOne}
            >
              -1
            </button>
          </div>
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              onClick={this.handlePlusOne}
            >
              +1
            </button>
          </div>
        </div>
        <div className="counter-number-container">
          <h1 className="counter-number">{plankTime}</h1>
        </div>
        <div className="counter-controls">
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              onClick={this.handleMinusFive}
            >
              -5
            </button>
          </div>
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              onClick={this.handlePlusFive}
            >
              +5
            </button>
          </div>
        </div>
      </div>
    );
  }
}

