// app/display-property/page.js
import connectToDatabase from '../lib/mongodb'
import PropertiesPage from '../properties/page'
import DisplayPropertyLists from '../components/DisplayPropertyLists'

const PropertyDisplyPage = () => {
  return (
    <>
        <DisplayPropertyLists />
    
    </>
  )
}

export default PropertyDisplyPage