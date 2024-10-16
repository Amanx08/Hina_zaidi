import React from 'react'

const CounterCard = ({data}) => {
  
  return (
  <div className="work_process_item">
    <div className="serial_number">{data.num}</div>
    <h3 className="item_title">{data.title}</h3>
    <p className="mb-0">
     {data.description}
    </p>
  </div>

  )
}

export default CounterCard