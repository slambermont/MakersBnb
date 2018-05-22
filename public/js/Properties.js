function Properties() {

  Properties.prototype.connection = function() {
    //Establishes connection with database
  }

  Properties.prototype.listProperties = function() {
    //Retreives information from database: properties table with SELECT*FROM
    //iterates over information creating new Property object for each property
  }

  Properties.prototype.addProperty = function(title, price, description, contact) {
    //Adds information to database: properties table in a new row
  }
}
