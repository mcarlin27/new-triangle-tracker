// business logic
function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.addSides = function() {
  return this.side1 + this.side2 + this.side3;
};

Triangle.prototype.whichTriangle = function() {
  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
      return "That's not a triangle!"
    } else if ((side1 === side2) && (side2 === side3)) {
      return "That's an equilateral triangle."
    } else if ((side1 !== side2) && (side1 !== side3) && (side3 !== side2)) {
      return "That's a scalene triangle."
    } else if ((side1 === side2 && side1 !== side3 && side1 + side2 >= side3) || (side2 === side3 && side2 !== side1 && side2 + side3 >= side1) || (side3 === side1 && side3 !== side2 && side3 + side1 >= side2)) {
      return "That's an isosceles triangle."
    };
}

// user interface logic
$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    var triangle = new Triangle(side1, side2, side3);

    $("#results").show();
      $("#result").append("<p>" + triangle.whichTriangle() + "</p>");
    });
});
