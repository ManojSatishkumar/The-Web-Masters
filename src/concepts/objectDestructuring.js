/*************************************************
 JavaScript - ES6

 Object Destructuring
 - A Mechanism to extract the contents of an object

*************************************************/
import iPhone from "../objects/iPhone";

// Using Dot notation
console.log(iPhone.model);
console.log(iPhone.features.touchID);

// Using Bracket notation
console.log(iPhone["ios version"]);
console.log(iPhone["features"]["headphone jack"]);

// Using Object destructuring

// Extract 1 property
let { color } = iPhone;
console.log(color);

/********************

// Invalid declaration
let color;
{color} = iPhone;

// Valid declaration
let color;
({ color } = iPhone);

*********************/

// Extract many properties
let { color, brand } = iPhone;
console.log(color, brand);

// Giving different name (alias)
let { color: iColor, brand: iBrand } = iPhone;
console.log(iColor, iBrand);

// Computed object property names
let c = "color";
let { [c]: iPhoneColor } = iPhone;
console.log(iPhoneColor);

// Giving default values
let { color = "Black", brand = "Samsung" } = iPhone;
console.log(color, brand);

// Giving default values to alias names
let { color: iColor = "Black", brand: iBrand = "Samsung" } = iPhone;
console.log(iColor, iBrand);

// Extracting nested objects
let { features: iPhoneFeatures } = iPhone;
let { faceID, touchID } = iPhoneFeatures;
console.log(faceID, touchID);

// Extract in a single statement
let {
  features: { faceID, touchID }
} = iPhone;
console.log(faceID, touchID);

// Rest in Object Destructuring
let { color, brand, ...rest } = iPhone;
console.log(rest);

/* Usage */
// In function arguments
function reviewPhone({ color, model, brand: company, owner = "Manoj" }) {
  console.log("The phone color is " + color);
  console.log("The phone model is " + model);
  console.log("The phone company is " + company);
  console.log("The phone owner is " + owner);
}

reviewPhone(iPhone);

// Thank you for watching the tutorial
// For more tutorials, please subscribe to my Youtube channel
