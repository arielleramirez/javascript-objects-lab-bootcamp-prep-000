var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes = {prop: 1, prop2: 2};
  return recipes
}