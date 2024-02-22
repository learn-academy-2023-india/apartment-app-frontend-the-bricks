import React from "react"
import { useParams, NavLink } from "react-router-dom"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"


const ApartmentShow = ({ apartments}) => {
  const { id } = useParams()
  const currentApartment = apartments.find((apartment) => apartment.id === +id)

  if (!apartments) {
    return <>Apartment not found!</>
  }

  return (
    <>
      <div className="apart-body-index">
        {currentApartment && (
          <Card className="flex-apart-index">
            {/* Where picture goes */}
            <CardImg top width="100%" src={currentApartment?.image} alt="" />
            {/* Changes text font */}
            <CardBody className="apart-text-index">
              {/* Shows apartment info */}
              <div className="grid-row">
                <div className="apart-text-index">
                  <CardTitle>
                    <b>{currentApartment?.price} Per Month</b>
                  </CardTitle>
                  <CardSubtitle>
                    {currentApartment?.street}, {currentApartment?.city},{" "}
                    {currentApartment?.state}
                  </CardSubtitle>
                  <CardSubtitle>
                    {currentApartment.bedrooms} Bedroom,{" "}
                    {currentApartment?.bathrooms} Bath
                  </CardSubtitle>
                  <CardSubtitle>Pets: {currentApartment?.pets}</CardSubtitle>
                  <CardSubtitle>
                    Details: {currentApartment?.details}
                  </CardSubtitle>
                </div>
              </div>
              {/* Button takes back to listings */}
              <NavLink to={`/apartmentindex`} className="nav-link">
                <Button className="apart-button-index">Back to Listings</Button>
              </NavLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}

export default ApartmentShow