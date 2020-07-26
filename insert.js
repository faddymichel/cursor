export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function insert ( mark, content ) {

if ( ! [ 'symbol', 'string', 'number' ] .includes ( typeof mark ) )
throw new TypeError ( "Unexpected 'mark' type." );

const cursor = this;

if ( cursor .points [ mark ] )
throw new ReferenceError ( "Unexpected 'mark' value. point with this mark already exists." );

const { pointer } = cursor;
const point = cursor .points [ mark ] = { mark, content };	

if ( cursor .length > 0 ) {

point .previous = pointer;
point .next = pointer .next;

pointer .next .previous = point;
pointer .next = point;

}

else
point .next = point .previous = point;

cursor .pointer = point;
cursor .length++;

return cursor;

};
