import React from "react"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentProtectedIndex = ({ apartments, currentUser }) => {
  const myApartments = apartments?.filter(
    (apartment) => apartment.user_id === currentUser.id
  )

  return (
    <div className="apart-body-index">
      <h1>My Listings</h1>
      <div className="flex-apart-index">
        {myApartments?.map((apartment, index) => {
          return (
            <Card key={index} className="apart-card-index">
              <CardImg
                top
                width="100%"
                src={apartment.image}
                alt=""
                className="apartment-picture"
              />
              <CardBody>
                <div className="apart-text-index">
                  <CardTitle>{apartment.price} Per Month</CardTitle>
                  <CardSubtitle>
                    {apartment.street}, {apartment.city}, {apartment.state}
                  </CardSubtitle>
                  <CardSubtitle>
                    {apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath
                  </CardSubtitle>
                </div>
                <NavLink
                  to={`/apartmentshow/${apartment.id}`}
                  className="nav-link"
                >
                  <div role="button">
                    <Button className="apart-button-index">More Details</Button>
                  </div>
                </NavLink>
                <Button className="apartment-button">Edit Listing</Button>
                <Button className="apartment-button">Delete Listing</Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
export default ApartmentProtectedIndex
