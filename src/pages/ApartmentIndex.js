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
                      <Button className="apart-button-index">
                        More Details
                      </Button>
                    </div>
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
// const CatIndex = ({ cats }) => {
//   return (
//     <>
//       <div className="meet-and-greet">
//         <h3>Meet Your Fellow Felines</h3>
//       </div>
//       <div className="cat-index-section">
//         {cats?.map((cat) => {
//           return (
//             <div key={cat.id} className="cat-profile-container">
//               <img
//                 src={cat.image}
//                 alt="profile of all our cats friends"
//                 className="cat-profile-pic"
//               />
//               <RouterNavLink to={`/catshow/${cat.id}`} className="cat-name-link">
//                 <p>{cat.name}</p>
//               </RouterNavLink>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }
// export default CatIndex
