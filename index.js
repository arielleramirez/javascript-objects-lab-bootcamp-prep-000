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
  var obj ={foo:'bar'}
 var newObj = Object.assign({}, object)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
object // { foo: 'bar' }

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
}


j
