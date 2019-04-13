// We must add a function to check if multiple types of fields are empty.
// We could do this with validator but, validator only searches for emtpy
// string fields.


function isEmpty(value) {
  return(
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

module.exports = isEmpty;
