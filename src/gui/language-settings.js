class LanguageSettings extends React.Component {
  handleSetLanguage = (e) => this.props.onSetLanguage(e.target.value);

  render() {
    const { lang } = this.props;

    return (
      <div className="language-settings">
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-en">
          <input id="option-en" type="radio" className="mdl-radio__button" value="en" checked={lang === 'en'} onChange={this.handleSetLanguage} />
          <span className="mdl-radio__label">EN</span>
        </label>
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-de">
          <input id="option-de" type="radio" className="mdl-radio__button" value="de" checked={lang === 'de'} onChange={this.handleSetLanguage} />
          <span className="mdl-radio__label">DE</span>
        </label>
      </div>
    );
  }
}
