export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function traverse () {

const cursor = this;
const first = cursor .pointer;

return ( function* generate () {

yield cursor .pointer;

cursor .next ();

if ( cursor .pointer === first )
return;

yield* generate ();

} ) ();

};
