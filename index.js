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
   var newObj = Object.assign({}, object)
   newObj
   
  delete newObj.key
  
  newObj
  
  object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete.recipe
}
