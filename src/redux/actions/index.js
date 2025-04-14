import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";



// TR üzerindeki uçuşları almamızı sağlar 
export const getFlights = createAsyncThunk("flight/getFlights", async () => {

    const params = {
        bl_lat: "34.457212",
        bl_lng: "24.609666",
        tr_lat: "43.610013",
        tr_lng: "46.791334",
        speed: "2,9999999",}

    const res = await api.get("/flights/list-in-boundary", { params })
      // api'dan gelen verideki dizi içerisindeki dizileri nesnelere çevirdik
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2], //enlem
    lng: i[3], //boylam
    deg: i[4],
  }));

    return formatted
})

// İD üzerinden uçuşun detaylarını almamızı sağlayan 

export const getDetail = createAsyncThunk("detail/getDetails", async (flightId) => {
    const params = {
        flight: flightId
    }
// api isteği
const res = await api.get("/flights/detail", {params})

return res.data
}) 