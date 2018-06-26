var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  var updatedObj = Object.assign({}, object, {[key]: value})
  return updatedObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj[key];
}


function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');
  return obj[key];
}
