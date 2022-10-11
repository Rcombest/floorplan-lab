import Bedroom from "./Bedroom"
import FullBath from "./FullBath"
import HalfBath from "./HalfBath"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

function FloorPlan(props) {
  return (
    <>
    <Bedroom bedNum={1}/>
    <Kitchen />
    <FullBath />
    <Bedroom bedNum={2}/>
    <LivingRoom />
    <HalfBath />
    <Bedroom bedNum={3}/>

    </>
  )
}

export default FloorPlan