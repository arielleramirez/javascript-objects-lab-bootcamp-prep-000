var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes = {prop: 1, prop2: 2};
  return recipes
}