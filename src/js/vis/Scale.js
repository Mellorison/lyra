vde.Vis.Scale = (function() {
  var scale = function(name, group, spec) {
    this.name  = (name || 'scale_' + vg.keys(group.scales).length);

    this.group = group;
    this.group.scales[this.name] = this;

    this._spec = spec || {};

    return this;
  };

  var prototype = scale.prototype;

  prototype.spec = function() {
    this._spec.name = this.name;
    return this._spec;
  };

  prototype.def = function() {
    var groupDef = this.group.def();
    for(var i = 0; i < groupDef.scales.length; i++)
        if(groupDef.scales[i].name == this.name)
            return groupDef.scales[i];

    return null;
  };

})();