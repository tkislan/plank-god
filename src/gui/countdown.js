class Countdown extends React.Component {
  render() {
    const { time } = this.props;

    return (
      <h1 className="countdown">{time}</h1>
    );
  }
}

