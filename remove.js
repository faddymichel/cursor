export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function remove ( mark ) {

const cursor = this;

cursor .point ( mark );
const point = cursor .pointer;

point .previous .next = point .next;
point .next .previous = point .previous;

cursor .pointer = point .previous;

delete cursor .points [ mark ];
cursor .length--;

if ( cursor .length === 0 )
delete cursor .pointer;

return cursor;

};
