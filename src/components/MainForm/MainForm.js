import React from "react";
import {weatherFetchData} from "../../store/actions/wether";
import {connect} from "react-redux";

import Weather from "../Weather";

class  MainForm extends React.Component{

    componentDidMount() {
        this.props.fetchData(`Tel%20Aviv`);
    }

    render() {
        return(
            <div>
                {/*<div className="">*/}
                {/*    {this.props.weather.Date}*/}
                {/*</div>*/}
                {
                  this.props.weather.map((weatherItem, index) => (
                      <Weather
                          key={index}
                          date={weatherItem.EpochDate}
                          temp={weatherItem.Temperature}
                          status={weatherItem.Day.IconPhrase}
                          // day={weatherItem.Date.toString()}
                      />
                  ))
                }
            </div>
        )

    }
}
// export default MainForm;
const mapStateToProps = state => {
  return{
    weather: state.weather || {}
  };
};

const  mapDispatchToProps = {
    fetchData: (name) => weatherFetchData(name)
};


export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
