import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) {
      return (
        <h1 className="text-center text-4xl my-20 font-bold">
          Loading Repo...
        </h1>
      );
    }
    return (
      <>
        <div className="flex flex-wrap items-center  justify-start items-stretch mt-5">
          {this.props.data.map((item, index) => (
            <div className="each-profile flex-24 text-xl my-5 mr-2">
              <h1 className="text-center">#{index + 1}</h1>
              <div className="flex justify-center my-5">
                <img className="w-8/12" src={item.owner.avatar_url}/>
              </div>
              <h2 className="text-center my-4 active">{item.name}</h2>
              <div>
                <span>
                  <i className="fa fa-user user-icon"></i>
                </span>
                <h4 className="font-semibold">{item.name}</h4>
              </div>
              <div>
                <span>
                <i className="fa fa-star stars"></i>
                </span>
                <h4>{item.watchers_count} stars</h4>
              </div>
              <div>
                <span>
                <i className="fa fa-gear forks"></i>
                </span>
                <h4>{item.forks_count} forks</h4>
              </div>    
              <div>
                <span>
                <i class="fa fa-pen issues"></i>
                </span>
                <h4>{item.open_issues_count} open issues</h4>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Profile;
