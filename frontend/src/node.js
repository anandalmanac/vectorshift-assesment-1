import React, { useEffect, useState } from 'react'
import { Handle, Position } from 'reactflow'

export const  Node = ({ id, heading ,description,data }) => {

    const handles=[{
position:Position.Left,
name:'system',
style:{top: `${100/3}%`},
type:'target'

    },
{
position:Position.Left,
name:'prompt',
style:{top: `${100/2}%`},
type:'target'

    },
{
    type:'source',
position:Position.Right,
name:'response',
    }]


useEffect(()=>{
   
    console.log('data',data,id);
})

  return (
   <div style={{width: 200, height: 80, border: '1px solid black'}}>
    {handles.map((handle,index) => {
        
        return <Handle
        key={index}
        type={handle.type}
        position={handle.position}
        id={`${id}-${handle.name}`}
        style={handle.style}
      />
    })}


     
      
      <div>
        <span>{heading}</span>
        sff
      </div>
      <div>
        <span>{description}</span>
      </div>
      
    </div>
  )
}


