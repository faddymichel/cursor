export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function point ( mark ) {

const cursor = this;

if ( ! [ 'symbol', 'string', 'number' ] .includes ( typeof mark ) )
throw new TypeError ( "Unexpected 'mark' type." );

if ( cursor .points [ mark ] )
cursor .pointer = cursor .points [ mark ];

return cursor;

};
