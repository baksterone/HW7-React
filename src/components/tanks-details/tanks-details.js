import React, { Component } from "react";

import TankopediaService from "../../services/tankopedia-service";
import "./tanks-details.css";


export default class TanksDetails extends Component {

  tankopediaService = new TankopediaService();

  state = {
    tanksInfo: {},
  }

  // HEAVY TANK

  // componentDidUpdate(prevProps){
  //   if(prevProps.selectedItem !== this.props.selectedItem){
  //     this.tankopediaService.getHeavy(this.props.selectedItem).then(data => {
  //       this.setState({
  //         tanksInfo: data
  //       })
  //     })
  //   }
  // }



  // render() {
  //   const {id, name, damage, breakingThrough, weight, strength, bodyArmor, towerArmor} = this.state.tanksInfo;

  //   return (
  //     <div className="tanks-details card">
  //       <img
  //         className="tanks-image col-md-6"
  //         src={`https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/heavy_tanks/${id}.jpg`}
  //         alt="character"
  //       />

  //       <div className="card-body col-md-6">
  //         <h4>{name}</h4>
  //         <ul className="list-group list-group-flush">
  //           <li className="list-group-item">
  //             <span className="term">Damage</span>
  //             <span>{damage}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Breaking Through</span>
  //             <span>{breakingThrough}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Weight</span>
  //             <span>{weight}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Strength</span>
  //             <span>{strength}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Body Armor</span>
  //             <span>{bodyArmor}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Tower Armor</span>
  //             <span>{towerArmor}</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  // MEDIUM TANK

  // componentDidUpdate(prevProps){
  //   if(prevProps.selectedItem !== this.props.selectedItem){
  //     this.tankopediaService.getMedium(this.props.selectedItem).then(data => {
  //       this.setState({
  //         tanksInfo: data
  //       })
  //     })
  //   }
  // }

  // render() {
  //   const {id, name, damage, breakingThrough, maximumSpeed, specificPower, towerTurningSpeed} = this.state.tanksInfo;

  //   return (
  //     <div className="tanks-details card">
  //       <img
  //         className="tanks-image col-md-6"
  //         src={`https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/medium_tanks/${id}.jpg`}
  //         alt="character"
  //       />

  //       <div className="card-body col-md-6">
  //         <h4>{name}</h4>
  //         <ul className="list-group list-group-flush">
  //           <li className="list-group-item">
  //             <span className="term">Damage</span>
  //             <span>{damage}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Breaking Through</span>
  //             <span>{breakingThrough}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Maximum Speed</span>
  //             <span>{maximumSpeed}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Specific Power</span>
  //             <span>{specificPower}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Tower Turning Speed</span>
  //             <span>{towerTurningSpeed}</span>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  // LIGHT TANK

  componentDidUpdate(prevProps){
    if(prevProps.selectedItem !== this.props.selectedItem){
      this.tankopediaService.getLight(this.props.selectedItem).then(data => {
        this.setState({
          tanksInfo: data
        })
      })
    }
  }

  render() {
    const {id, name, enginePower, maximumSpeed, specificPower, overview} = this.state.tanksInfo;

    return (
      <div className="tanks-details card">
        <img
          className="tanks-image col-md-6"
          src={`https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/medium_tanks/${id}.jpg`}
          alt="character"
        />

        <div className="card-body col-md-6">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Engine Power</span>
              <span>{enginePower}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Maximum Speed</span>
              <span>{maximumSpeed}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Specific Power</span>
              <span>{specificPower}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Overview</span>
              <span>{overview}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
