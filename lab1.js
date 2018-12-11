
// delete duplicates

const uniqueArray = ( array ) => {
  let counts   = {};
  let newArray = [];
  let counter  = 0;

  for( let i = 0; i < array.length ; i++ ) {
    let item = array[ i ];
    if( counts[ item ] !== 1 ) {
      counts[ item ]  = 1;
      newArray[ counter++ ] = item;
    }
  }
  return newArray;
};

//reverse an array


const uniqueArray = ( array ) => {
  let counts   = {};
  let newArray = [];
  let counter  = 0;

  for( let i = array.length - 1; i >= 0; i-- ) {
    let item = array[ i ];
    if( counts[ item ] !== 1 ) {
      counts[ item ]  = 1;
      newArray[ counter++ ] = item;
    }
  }
  return newArray;
};
