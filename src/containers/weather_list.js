import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        )
    }
    render() {
        console.log(this.props);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
// function mapStateToProps({ weather }) {
//     return { weather };
// }

function mapStateToProps(state) {
    console.log('mapstatetoprops', state);
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);