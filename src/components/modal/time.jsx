import React from 'react'
import nullCheck from '../../utils/nullCheck'
import t from '../../utils/formatDate'
const Time = ({data}) => {
  return (
    <div className='time'>
      <div>
        <span>Planlanan</span>
        <span>{nullCheck(t(data.scheduled?.departure))} </span>
      </div>
      <div>
        <span>Planlanan</span>
        <span>{nullCheck(t(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Gerçek</span>
        <span>{nullCheck(t(data.real?.departure))}</span>
      </div>
      <div>
        <span>Tahmini</span>
        <span>{nullCheck(t(data.estimated?.arrival))}</span>
      </div>

    </div>
  )
}

export default Time
