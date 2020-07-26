export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function move ( x, y ) {

const cursor = this;

cursor .point ( x );
const { mark, content } = cursor .pointer;
cursor .remove ( x );
cursor .point ( y );

return cursor .insert ( mark, content );

};
