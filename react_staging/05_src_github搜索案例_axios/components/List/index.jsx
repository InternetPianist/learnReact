import React, { Component } from "react";
import "./index.css"
export default class List extends Component {
  render() {
  const {isFirst,isLoading,err,users} = this.props
    return (
      <div className="row">
         {
           isFirst? <h2>Welcome, enter keywords, click search</h2>:
           isLoading? <h2>Loading......</h2>:
           err? <h2 style={{color: 'red'}}>{err}</h2>:
           users.map(userObj => {
             return (
              <div key={userObj.id} className="card">
              <a href={userObj.html_url} rel="noreferrer" target="_blank">
                <img
                  alt="head_portrait"
                  src={userObj.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
             )
           })
         }
      </div>
    );
  }
}
