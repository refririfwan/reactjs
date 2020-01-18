import React from 'react'
const Halo = () => {
    // return (
    //     <diV>
    //         <h1>
    //             Halo Guys !
    //         </h1>
    //     </diV>
    // )
    return React.createElement('div', {id:'halo', className:'hai'}, React.createElement('h1', null, 'Halo Guys !'))
}

export default Halo