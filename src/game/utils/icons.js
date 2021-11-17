const reqSvgs = require.context ('../../assets/icons', true, /\.svg$/ );

export const icons = reqSvgs
  .keys ()
  .reduce ( ( images, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} );