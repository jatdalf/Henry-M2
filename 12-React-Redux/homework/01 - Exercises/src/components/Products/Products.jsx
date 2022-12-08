import { connect } from "react-redux";
import React from "react";
import { getStoreName } from "../../redux/actions/actions";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from "../Card/Card";

export function Products({ list, storeName, getStoreName }) {
  React.useEffect(() => {
    getStoreName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">{storeName}</h1>

        <div className="productsList">
          {list.map((prod) => (
            <Card
              name={prod.name}
              price={prod.price}
              id={prod.id}
              key={prod.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list,
    storeName: state.storeName,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getStoreName: function () {
      dispatch(getStoreName());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
