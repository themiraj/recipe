import React from "react";
import {
        BrowserRouter as Router,
        Switch,
        Route,
    Link
  } from "react-router-dom";
function Home() {
    return (
      <div>
       <div className="container">
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Order Id</div>
                    <div className="col col-2">Order Name</div>
                    <div className="col col-3">Oil</div>
                    <div className="col col-4">Flavor</div>
                    <div className="col col-5">Price</div>
                    <div className="col col-6">Timing</div>
                    <div className="col col-7">Amout</div>
                    <div className="col col-7">Action</div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">1</div>
                    <div className="col col-2" data-label="Customer Name">Burger</div>
                    <div className="col col-3" data-label="Amount">$350</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                    <div className="col col-5" data-label="Payment Status">Pending</div>
                    <div className="col col-6" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">
                        <Link to="/update"><span className="action-btn edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></Link>
                        <span className="action-btn delete-btn"><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">1</div>
                    <div className="col col-2" data-label="Customer Name">Burger</div>
                    <div className="col col-3" data-label="Amount">$350</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                    <div className="col col-5" data-label="Payment Status">Pending</div>
                    <div className="col col-6" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">
                        <Link to="/update"><span className="action-btn edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></Link>
                        <span className="action-btn delete-btn"><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">1</div>
                    <div className="col col-2" data-label="Customer Name">Burger</div>
                    <div className="col col-3" data-label="Amount">$350</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                    <div className="col col-5" data-label="Payment Status">Pending</div>
                    <div className="col col-6" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">
                        <Link to="/update"><span className="action-btn edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></Link>
                        <span className="action-btn delete-btn"><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </div>
                </li>
                <li className="table-row">
                    <div className="col col-1" data-label="Job Id">1</div>
                    <div className="col col-2" data-label="Customer Name">Burger</div>
                    <div className="col col-3" data-label="Amount">$350</div>
                    <div className="col col-4" data-label="Payment Status">Pending</div>
                    <div className="col col-5" data-label="Payment Status">Pending</div>
                    <div className="col col-6" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">Pending</div>
                    <div className="col col-7" data-label="Payment Status">
                        <Link to="/update"><span className="action-btn edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span></Link>
                        <span className="action-btn delete-btn"><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </div>
                </li>
               
            </ul>
            </div>
      </div>
    );
}
export default Home;