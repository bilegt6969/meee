import React from 'react'
import Image from 'next/image'
function Photocard({HomeElement}) {
  return (
    <div>
        <Image src={"https://khas-dayan.api.erxes.io/api/read-file?key="+HomeElement?.image?.url} loading="lazy" alt={HomeElement?.image?.alt || 'Photocard Image'} fill />
    </div>
  )
}

export default Photocard