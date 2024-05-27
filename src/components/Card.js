import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { img, name, description, price, sale } = this.props;
    return (
      <div className="card">
        <div className="card__body">
          <img src={img} alt="fruit" />
          <h2 className="card__title">{name}</h2>
          <p className="card__description">{description}</p>
          <h1 className="card__price">$ {price}</h1>
          <button className="card__btn">VIEW PRODUCT</button>
          <span className="card__price-off">-{sale}%</span>
        </div>
      </div>
    );
  }
}
