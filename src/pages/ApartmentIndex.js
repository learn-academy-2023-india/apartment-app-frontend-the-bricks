import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const ApartmentIndex = ({ apartments }) => {
  return (
    <>
      <div className="apart-body-index">
        <h1>Recent Listings</h1>
        <div className="flex-apart-index">
          {apartments?.map((apartment, index) => {
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
                    <CardTitle>
                      <b>${apartment.price}/month</b>
                    </CardTitle>
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
                    <Button className="apart-button-index">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ApartmentIndex
