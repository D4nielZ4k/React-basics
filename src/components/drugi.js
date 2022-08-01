import React from "react";

class Drugi extends React.Component {
  state = {
    imie: "Daniel",
  };

  klik(evt) {
    console.log("kliknolem", evt);
  }

  zmina(evt) {
    console.log("imput zmiana", evt.target.value);
  }
  render() {
    return (
      <div>
        <h2>A imie to: {this.state.imie} </h2>;
        <h2 onClick={this.klik}>A nazwisko to: {this.props.nazwisko} </h2>;
        <input type="text" onChange={this.zmina} />;
      </div>
    );
  }
}

export default Drugi;
