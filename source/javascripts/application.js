//= require jquery
//= require lodash
//= require easeljs
//= require slick.js/slick/slick

function ROSSConfLogo(value, width) {
  this.alphabet  = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  this.init = function(value, width) {
    this.value = value.toUpperCase();
    this.replaceUmlauts();

    this.width  = width;
    this.canvas = $('<canvas id="rossconf-logo" width="' + this.width + '" height="' + Math.floor(this.width/1.19) + '" />');

    $('header h1 a').prepend(this.canvas);

    this.stage = new createjs.Stage("rossconf-logo");

    $(this.container).css('background', '#FFFFFF')
    this.generateGrid();

  }

  this.replaceUmlauts = function () {
    this.value.replace(/Ää/g, "ae")
              .replace(/Öö/g, "oe")
              .replace(/Üü/g, "ue")
              .replace(/ß/g,  "sz");
  };

  this.calcOpacity = function (char) {
    var match = this.value.match(new RegExp(char, "g"));
    return 1/((match == null ? [] : match).length);
  };

  this.generateGrid = function () {
    var self = this;

    // 5 rows, 6 columns
    var grid   = [5, 6];
    var width  = self.stage.canvas.clientWidth;
    var height = self.stage.canvas.clientHeight;

    var boxWidth  = ((width-2)/grid[1])-2;
    var boxHeight = ((height-2)/grid[0])-2;

    var background = new createjs.Shape();

    background.graphics.beginFill("#FFFFFF").drawRect(0, 0, width, height);
    self.stage.addChild(background);

    function _calculateBoxPosition (index) {
      var row = Math.ceil(index/grid[1]);
      var col = index > grid[1] ? index-((row-1)*grid[1]) : index;
      var x   = (col-1)*boxWidth+(col > 1 && col <= grid[1] ? 2*col : 0);
      var y   = (row-1)*boxHeight+(row > 1 && row <= grid[0] ? 2*row : 0);

      if(x <= 1)
        x = 2;
      if(y <= 1)
        y = 2;

      return [x, y];
    };

    var count  = 1;
    var grid_elements = this.alphabet.concat(['filler', 'words', 'punctuation', 'filler']);

    var word_colors        = ["#EDF9F6", "#DAF3EE", "#C7EDE5", "#B4E7DD", "#A0E1D3"];
    var punctuation_colors = ["#FFECEB", "#FFDAD6", "#FFC7C0", "#FFB4AB", "#FFA096"];

    _.forEach(grid_elements, function (char) {
      var color              = "#D2D3D4";
      var shape              = new createjs.Shape();
      var posistion          = _calculateBoxPosition(count);

      if (self.value.indexOf(char) !== -1)
        color = "#FFA096";

      if (char == 'filler')
        color = "#FFFFFF";

      if (char == 'words') {
        color = word_colors[_.words(self.value).length-1];
      }

      if (char == 'punctuation') {
        var match = self.value.match(/[\S\s]+?[.!?](?:\s+|$)/g);
        if (match != null)
          color = punctuation_colors[match.length-1];
      }

      shape.graphics.beginFill(color).drawRect(posistion[0], posistion[1], boxWidth, boxHeight);
      shape.alpha = self.calcOpacity(char);

      self.stage.addChild(shape);

      self.stage.update();
      count++;
    });

  };

  this.init(value, width);
}

$(document).on('ready', function(){
  if($('header h1').length) {
    new ROSSConfLogo($('header h1').text().trim(), 100);
  }

  $('.testimonials').slick({
    arrows:   false,
    dots:     true,
    autoplay: true,
    autoplaySpeed: 1000*10
  });
});
