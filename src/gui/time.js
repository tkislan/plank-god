class Time extends React.Component {
  render() {
    const { time } = this.props;

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) seconds = `0${seconds}`;

    return (
      <h1 className="time">{`${minutes}:${seconds}`}</h1>
    );
  }
}
