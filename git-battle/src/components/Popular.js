import React from "react";
import Profile from './Profile'
class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeLang: "All",
      data:null
    };
  }

  selectLanguage = (lang) => {
    this.setState(()=>{
        return{
            activeLang: lang,
            data:null
        };
    },
    ()=>{
        this.componentDidMount()
    })  
  };
  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.activeLang}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }));
  }
  render() {
    let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    return (
      <>
        <div className="flex text-center my-5 mx-auto w-5/12">
          {languages.map((lang) => (
            <h4
              className={this.state.activeLang === lang? "mr-5 text-2xl cursor-pointer active":"mr-5 text-2xl cursor-pointer"}
              onClick={() => this.selectLanguage(lang)}
              >
              {lang}
            </h4>
          ))}
        </div>
        <div>
            <Profile activeLang={this.state.activeLang} data={this.state.data}/>
        </div>

      </>
    );
  }
}

export default Popular;
