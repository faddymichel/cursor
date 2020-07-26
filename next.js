export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function next ( reverse = false ) {

const cursor = this;

if ( reverse === false )
cursor .pointer = cursor .pointer .next;

else if ( reverse === true )
cursor .pointer = cursor .pointer .previous;

return cursor;

};
