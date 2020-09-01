export default class TankopediaService {

  _apiBase = 'https://cors-anywhere.herokuapp.com/http://gallerytvr.site/api/';
  //_apiBase = 'http://localhost:3000';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllHeavy = async () => {
    const res = await this.getResource(`/heavy/`);
    return res  //res.results
      .map(this._transformHeavy)
      .slice(0, 15);
  };

  getHeavy = async (id) => {
    const heavy = await this.getResource(`/heavy/${id}/`);
    return this._transformHeavy(heavy);
  };

  getAllMedium = async () => {
    const res = await this.getResource(`/medium/`);
    return res.map(this._transformMedium).slice(0, 15);
  };

  getMedium = async (id) => {
    const medium = await this.getResource(`/medium/${id}/`);
    return this._transformMedium(medium);
  };

  getAllLight = async () => {
    const res = await this.getResource(`/light/`);
    return res.map(this._transformLight).slice(0, 15);
  };

  getLight = async (id) => {
    const light = await this.getResource(`/light/${id}/`);
    return this._transformLight(light);
  };

  getAllPremium = async () => {
    const res = await this.getResource(`/premium/`);
    return res   //res.results
      .map(this._transformPremium)
      .slice(0, 5);
  };

  getPremium = async (id) => {
    const premium = await this.getResource(`/premium/${id}/`);
    return this._transformPremium(premium);
  };



  _transformPremium = (premium) => {
    return {
      id: premium.id,
      name: premium.name,
      overview: premium.overview,
      rapidity: premium.rapidity,
      strength: premium.strength,
    };
  };


  _transformHeavy = (heavy) => {
    return {
      id: heavy.id,
      name: heavy.name,
      damage: heavy.damage,
      breakingThrough: heavy.breaking_through,
      weight: heavy.weight,
      strength: heavy.strength,
      bodyArmor: heavy.body_armor,
      towerArmor: heavy.tower_armor,
    };
  };

  _transformMedium = (medium) => {
    return {
      id: medium.id,
      name: medium.name,
      damage: medium.damage,
      breakingThrough: medium.breaking_through,
      maximumSpeed: medium.maximum_speed,
      specificPower: medium.specific_power,
      towerTurningSpeed: medium.tower_turning_speed
    };
  };

  _transformLight = (light) => {
    return {
      id: light.id,
      name: light.name,
      enginePower: light.engine_power,
      maximumSpeed: light.maximum_speed,
      specificPower: light.specific_power,
      overview: light.overview
    };
  };
}
