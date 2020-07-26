import readline from 'readline';
import { descriptor as insert } from './insert.js';
import { descriptor as next } from './next.js';
import { descriptor as point } from './point.js';
import { descriptor as traverse } from './traverse.js';
import { descriptor as remove } from './remove.js';

export const Cursor = function Cursor () {

const cursor = this;

cursor .length = 0;
cursor .points = {};

};

Object .defineProperty ( Cursor .prototype, 'insert', insert );
Object .defineProperty ( Cursor .prototype, 'next', next );
Object .defineProperty ( Cursor .prototype, 'point', point );
Object .defineProperty ( Cursor .prototype, 'traverse', traverse );
Object .defineProperty ( Cursor .prototype, 'remove', remove );

const cursor = new Cursor ();
const cli = readline .createInterface ( {

input: process .stdin,
output: process .stdout,
prompt: '\n?cursor\n... '

} );
cli .on ( 'error', console .error );
cli .prompt ();
cli .on ( 'line', ( line ) => {

line = line .trim () .split ( ' ' );

switch ( line [ 0 ] ) {

case 'insert':
cursor
.insert ( line [ 1 ], line .splice ( 2 ) .join ( ' ' ) )

break;
case 'next':
cursor
.next ()

break;
case 'point':
cursor .point ( line [ 1 ] );

break;
case 'traverse':

for ( const point of cursor .traverse () )
console .log ( '#' + point .mark, point .content );

break;
case 'remove':
cursor .remove ( line [ 1 ] );

}

console .log ( '#' + cursor .pointer .mark );
console .log ( cursor .pointer .content );

cli .prompt ();

} );
