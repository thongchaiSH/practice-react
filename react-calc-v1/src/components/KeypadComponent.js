const KeypadComponent = (props) => {
  const onClick = (event) => {
    // console.log("Key : ", event.target.value);
    props.onClick(event.target.value);
  };

  const KeyComponent = (props) => {
    const customClass = "button " + (props.addClass ? props.addClass : "");
    return (
      <input
        type="button"
        className={customClass}
        value={props.keyValue}
        onClick={onClick}
      />
    );
  };

  return (
    <div>
      <KeyComponent keyValue="AC" addClass="clearButton" />
      <KeyComponent keyValue="+/-" />
      <KeyComponent keyValue="%" />
      <KeyComponent keyValue="÷" addClass="mathButton" />

      <br />
      <KeyComponent keyValue="7" />
      <KeyComponent keyValue="8" />
      <KeyComponent keyValue="9" />
      <KeyComponent keyValue="x" addClass="mathButton" />

      <br />
      <KeyComponent keyValue="4" />
      <KeyComponent keyValue="5" />
      <KeyComponent keyValue="6" />
      <KeyComponent keyValue="-" addClass="mathButton" />

      <br />
      <KeyComponent keyValue="1" />
      <KeyComponent keyValue="2" />
      <KeyComponent keyValue="3" />
      <KeyComponent keyValue="+" addClass="mathButton" />

      <br />
      <KeyComponent keyValue="0" addClass="bt-zero" />
      <KeyComponent keyValue="." />
      <KeyComponent keyValue="=" addClass="mathButton" />
    </div>
  );
};

export default KeypadComponent;
