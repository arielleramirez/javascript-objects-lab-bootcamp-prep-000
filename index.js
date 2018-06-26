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
 var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
}


j
