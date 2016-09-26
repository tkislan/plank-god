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
      // setTimeout(this.props.languagesLoaded, 1000);
      this.props.languagesLoaded();
    });
  }

  handleStart = () => {
    this.props.startPlank();

    this.countdownTimerId = setInterval(this.handleCountdownTick, 1000);
    soundPlayer.addSound(this.lang.sayCountdown(5));
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
      const { nextPlankTime } = this.props;
      return (
        <div className="plank-god mdl-card mdl-shadow--2dp">
          <StartSettings nextPlankTime={nextPlankTime} onAlterNextPlankTime={this.props.alterNextPlankTime} onStart={this.handleStart} />
        </div>
      );
    } else {
      const { countdown, plankTime } = this.props;

      if (countdown > 0) {
        return (
          <div className="plank-god mdl-card mdl-shadow--2dp">
            <h1 className="time">{countdown}</h1>
          </div>
        );
      } else {
        return (
          <div className="plank-god mdl-card mdl-shadow--2dp">
            <Time time={plankTime} />
          </div>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    nextPlankTime: state.nextPlankTime,
    running: state.running,
    countdown: state.countdown,
    plankTime: state.plankTime,
  };
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(actions, dispatch);
}

const PlankGod = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PlankGodComponent);
