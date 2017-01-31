function Plane() {
  this._isLanded = false;
};

Plane.prototype.land = function (airport) {
  if (this._isLanded) {throw('Cannot land plane: plane already landed');}
  this._isLanded = true;
  this._airport = airport;
};
