import React from 'react'
import Image from 'next/image'
function Photocard({HomeElement}) {
  return (
    <div>
        <Image src={"https://khas-dayan.api.erxes.io/api/read-file?key="+HomeElement?.image?.url} alt={HomeElement?.image?.alt} fill />
    </div>
  )
}

export default Photocard