import React from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../../redux/slices/detailSlice'
import nullCheck from '../../utils/nullCheck'

const Head = ({info}) => {
   const dispatch = useDispatch()
  return (
    <div className='head'>
      <div>
<h3 title='Çağrı İşareti'>{nullCheck(info?.identification?.callsign)} </h3>
<span title='Uçuş Numaraıs'>{nullCheck(info?.identification?.number?.default)} </span>
<span title='Uçak IATA/ICAO tip kodu'>{nullCheck(info?.aircraft?.model?.code)} </span>
      </div>
      <button onClick={() =>dispatch(close()) }>X</button>
    </div>
  )
}

export default Head
