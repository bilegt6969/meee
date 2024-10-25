import { getKbArticlesByCode } from "@/lib/kb";

import React from 'react'

async function Index(){
    const{article} =await getKbArticlesByCode("Service")
  return (
    <div className="bg-black w-full h-20" onClick={()=>{console.log(article)}}>
        hello

    </div>
  )
}

export default Index