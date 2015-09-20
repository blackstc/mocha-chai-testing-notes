var Car = function (color, drive_type, fuel_economy) {
  this.wheels = 4;
  this.color = color || null;
  this.drive_type = drive_type || 'front wheel drive';
  this.fuel_economy = fuel_economy || 20;
  this.fuel = 0;
  this.total_mileage = 0;
  this.max_fuel = 15;
};

Car.prototype.drive = function (miles) {
  if (!this.fuel) {
    return 'No fuel in car!';
  }
  var miles_left_on_car = this.fuel * this.fuel_economy;
  if (miles_left_on_car < miles) {
    return 'Not enough fuel in car!';
  }
  this.total_mileage = this.total_mileage + miles;
  this.fuel = this.fuel - (miles / this.fuel_economy);
};

Car.prototype.fill = function (gallons) {
  if (this.fuel + gallons > this.max_fuel) {
    return 'Can\'t fill ' + gallons + ' in a car that can hold only ' + this.max_fuel + ' when it already has ' + this.fuel + '.';
  }
  if (typeof gallons === 'undefined') {
    this.fuel = this.max_fuel;
  } else {
    this.fuel = this.fuel + gallons;
  }
};
