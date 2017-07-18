const _ = require('lodash');

var productArray = [];

function add(product, ranking, photo){
	productArray.push({'product':product, 'ranking':ranking, 'photo':photo, 'id':productArray.length});
}

function list(){
	return _.cloneDeep(productArray);
}

function find(properties){
	return _.cloneDeep(_.filter(productArray, properties));
}

function sortProducts(a,b){
  if (a.ranking< b.ranking)
    return -1;
  if (a.ranking > b.ranking)
    return 1;
  return 0;
}

function highestRanked(){
	if(productArray.length != 0){
		var sorted = _.cloneDeep(productArray.sort(sortProducts));
		var sortedArr = [sorted[sorted.length-1]];
		return sortedArr;
	}
}

module.exports = {
	add:add,
	list:list,
	find:find,
	highest:highestRanked
}