class PlankGodComponent extends React.Component {
  componentDidMount() {
    this.countdownTimerId = null;
    this.plankTimerId = null;

    this.langEn = new LanguageEn();
    // this.langDe = new LanguageDe();
    this.lang = this.langEn;

    const loadingStartTime = new Date().getTime();
    this.langEn.load().then(() => {
      console.log(`All sounds loaded in ${new Date().getTime() - loadingStartTime} ms`);
      setTimeout(this.props.languagesLoaded, 1000);
      // this.props.languagesLoaded();
    });
  }

  handleStartButtonClick = () => {
    this.props.startPlank();

    this.countdownTimerId = setInterval(this.handleCountdownTick, 1000);
    soundPlayer.addSound(this.lang.sayCountdown(10));
  };

  handleCountdownTick = () => {
    if (this.props.countdown !== 0) {
      soundPlayer.addSound(this.lang.sayCountdown(this.props.countdown - 1));
      this.props.decreaseCountdownTimer();
    } else {
      clearInterval(this.countdownTimerId);

      this.plankTimerId = setInterval(this.handlePlankTick, 1000);
      this.handlePlankTick();
    }
  };

  handlePlankTick = () => {
    if (this.props.plankTime !== 0) {
      soundPlayer.addSound(this.lang.sayTime(this.props.plankTime - 1));
      this.props.decreasePlankTimer();
    } else {
      clearInterval(this.plankTimerId);

      console.log('Plank finished');
      this.props.finishPlank();
    }
  };

  render() {
    const { loading, running } = this.props;

    // console.log('PlankGodComponent render:', this.props);

    if (loading === true) {
      return (
        <div className="plank-god mdl-card mdl-shadow--2dp">
          <div className="loading-spinner mdl-spinner mdl-js-spinner is-active"></div>
        </div>
      );
    }

    if (running !== true) {
      return (
        <div className="plank-god mdl-card mdl-shadow--2dp">
          <button
            className="start-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
            onClick={this.handleStartButtonClick}
          >
            Start Planking
          </button>
        </div>
      );
    } else {
      const { countdown, plankTime } = this.props;

      if (countdown > 0) {
        return (
          <div className="plank-god mdl-card mdl-shadow--2dp">
            <Countdown time={countdown} />
          </div>
        );
      } else {
        return (
          <div className="plank-god mdl-card mdl-shadow--2dp">
            <Counter plankTime={plankTime} alterPlankTimer={this.props.alterPlankTimer} />
          </div>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    running: state.running,
    countdown: state.countdown,
    plankTime: state.plankTime,
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(actions, dispatch);
}

const PlankGod = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PlankGodComponent);
