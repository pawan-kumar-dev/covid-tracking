import Axios from 'axios'

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await Axios.get('https://covid19.mathdro.id/api')
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }
  } catch (err) {
    console.log(err)
  }
}
