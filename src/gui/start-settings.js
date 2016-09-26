class StartSettings extends React.Component {
  handleMinusFive = () => this.props.onAlterNextPlankTime(-5);
  handleMinusOne = () => this.props.onAlterNextPlankTime(-1);
  handlePlusOne = () => this.props.onAlterNextPlankTime(+1);
  handlePlusFive = () => this.props.onAlterNextPlankTime(+5);

  handleStartButtonClick = () => this.props.onStart();

  render() {
    const { nextPlankTime } = this.props;

    return (
      <div className="start-settings">
        <Time time={nextPlankTime} />
        <div className="next-plank-time-controls">
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
          <div>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
              onClick={this.handlePlusFive}
            >
              +5
            </button>
          </div>
        </div>
        <button
          className="start-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
          onClick={this.handleStartButtonClick}
        >
          Start Planking
        </button>
      </div>
    );
  }
}
