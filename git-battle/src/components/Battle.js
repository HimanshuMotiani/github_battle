import React from "react";
class Battle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userOne: "",
      userTwo: "",
      dataOne:"",
      dataTwo:"",
      battle: true,
      scoreOne: "",
      scoreTwo: "",
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
        [name]: value
    })
}
handleSubmit = (event,type) => {
    event.preventDefault();
    if (type === "typeOne") {
        this.fetchData(this.state.userOne, "dataOne");
      } else {
        this.fetchData(this.state.userTwo, "dataTwo");
      }
}
fetchData=(name,user)=>{
    fetch(`https://api.github.com/users/${name}`).then((res) => res.json())
    .then((data) => {
        this.setState({ [user]: data });
    }
    )
}
battle = () => {
    this.setState({
      battle: !this.state.battle,
      scoreOne:
        this.state.dataOne.followers * 20 + this.state.dataOne.public_repos,
      scoreTwo:
        this.state.dataTwo.followers * 20 + this.state.dataTwo.public_repos,
    });
};
reset = ()=>{
    this.setState({
        battle: !this.state.battle,
        userOne:"",
        userTwo:"",
        dataOne:"",
        dataTwo:""
    })
}
  render() {
    return (
      <>
      {this.state.battle? (
          <>
      <div className="text-center">
          <h3 className="text-4xl mt-16">Instructions</h3>
          <div className="flex mt-10 items-center justify-center">
            <div className="mx-10">
              <h4 className="text-2xl mb-2">Enter two Github users</h4>
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
            </div>
            <div className="mx-10">
              <h4 className="text-2xl mb-2">Battle</h4>
              <span className="icon color-icon">
                <i className="fa fa-plane"></i>
              </span>
            </div>
            <div className="mx-10">
              <h4 className="text-2xl mb-2">See the winner</h4>
              <span className="icon color-icon1">
                <i className="fa fa-trophy"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h4 className="text-3xl mb-2">Players</h4>
        </div>
        <div className="text-center">
          <form onSubmit={(event) => this.handleSubmit(event, "typeOne")} className="inline-block mx-10 my-5">
            <div className="mb-4 inline-block">
              <input
                type="text"
                name="userOne"
                onChange={this.handleInput}
                id="userOne"
                value={this.state.userOne}
                placeholder="github username"
              />
            </div>
            <button type="submit" >SUBMIT</button>
            <div className={this.state.dataOne? "one":"hidden"}>
                <img className="one-img" src={this.state.dataOne.avatar_url}/>
                <h6>{this.state.dataOne.login? this.state.dataOne.login:this.state.dataOne.message}</h6>
            </div>
            
          </form>
          <form onSubmit={(event) => this.handleSubmit(event, "typeTwo")} className=" inline-block mx-10 my-5">
            <div className="mb-4 inline-block">
              <input
                type="text"
                name="userTwo"
                onChange={this.handleInput}
                id="userTwo"
                value={this.state.userTwo}
                placeholder="github username"
              />
            </div>
            <button type="submit">SUBMIT</button>
            <div className={this.state.dataTwo? "two":"hidden"}>
                <img className="one-img" src={this.state.dataTwo.avatar_url}/>
                <h6>{this.state.dataTwo.login? this.state.dataTwo.login:this.state.dataTwo.message}</h6>
            </div>
          </form>
          <div className="text-center">
              <button className={(this.state.dataOne && this.state.dataTwo)? "battle-button":"hidden"} onClick={this.battle}>Battle</button>
          </div>
        </div>
 </>)
 :
 
 (
 <>
 <div className="flex justify-center items-stretch mt-5">
            <div className="each-profile flex-24 text-xl my-5 mr-2">
              <h1 className="text-center">{ this.state.scoreTwo < this.state.scoreOne
                    ? "Winner"
                    : this.state.scoreTwo > this.state.scoreOne
                    ? "Loser"
                    : this.state.scoreTwo === this.state.scoreOne
                    ? "Tie"
                    : ""}</h1>
              <div className="flex justify-center my-5">
                <img className="w-8/12" src={this.state.dataOne.avatar_url}/>
              </div>
              <h2 className="text-center my-4 active">{this.state.dataOne.login}</h2>
              <div>
                <span>
                  <i className="fa fa-user user-icon"></i>
                </span>
                <h4 className="font-semibold">{this.state.dataOne.name}</h4>
              </div>
              <div>
                <span>
                <i className="fa fa-star stars"></i>
                </span>
                <h4>{this.state.dataOne.followers} followers</h4>
              </div>
              <div>
                <span>
                <i className="fa fa-gear forks"></i>
                </span>
                <h4>{this.state.dataOne.following} following</h4>
              </div>    
              <div>
                <span>
                <i class="fa fa-pen issues"></i>
                </span>
                <h4>{this.state.dataOne.public_repos} repositories</h4>
              </div>
            </div>
        
            <div className="each-profile flex-24 text-xl my-5 mr-2">
              <h1 className="text-center">{ this.state.scoreTwo > this.state.scoreOne
                    ? "Winner"
                    : this.state.scoreTwo < this.state.scoreOne
                    ? "Loser"
                    : this.state.scoreTwo === this.state.scoreOne
                    ? "Tie"
                    : ""}</h1>
              <div className="flex justify-center my-5">
                <img className="w-8/12" src={this.state.dataTwo.avatar_url}/>
              </div>
              <h2 className="text-center my-4 active">{this.state.dataTwo.login}</h2>
              <div>
                <span>
                  <i className="fa fa-user user-icon"></i>
                </span>
                <h4 className="font-semibold">{this.state.dataTwo.name}</h4>
              </div>
              <div>
                <span>
                <i className="fa fa-star stars"></i>
                </span>
                <h4>{this.state.dataTwo.followers} followers</h4>
              </div>
              <div>
                <span>
                <i className="fa fa-gear forks"></i>
                </span>
                <h4>{this.state.dataTwo.following} following</h4>
              </div>    
              <div>
                <span>
                <i class="fa fa-pen issues"></i>
                </span>
                <h4>{this.state.dataTwo.public_repos} repositories</h4>
              </div>
            </div>
        
        </div> 
        <div className="text-center white">
        <button  onClick={this.reset}>Reset</button>
        </div> 
</>) }
        


      </>
    );
  }
}

export default Battle;
