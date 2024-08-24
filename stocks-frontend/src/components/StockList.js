import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStockModal from "./NewStockModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class StockList extends Component {
  render() {
    const stocks = this.props.stocks;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!stocks || stocks.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Add a stock</b>
              </td>
            </tr>
          ) : (
            stocks.map(stock => (
              <tr key={stock.pk}>
                <td>{stock.name}</td>
                <td>{stock.percent}</td>
                <td align="center">
                  <NewStockModal
                    create={false}
                    stock={stock}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={stock.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default StockList;