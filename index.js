var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  var updatedObj = Object.assign({}, object, {[key]: value})
  return updatedObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes = {prop: 1, prop2: 2};
  return recipes
}