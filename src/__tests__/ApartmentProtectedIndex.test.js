import { render, screen } from "@testing-library/react"
import ApartmentProtectedIndex from "../pages/ApartmentProtectedIndex"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "test1@example.com",
    }

    const userApartments = [
      {
        id: 1,
        street: "101 Rimrock",
        unit: "9A",
        city: "San Diego",
        state: "CA",
        square_footage: 500,
        price: "1800",
        bedrooms: 2,
        bathrooms: 2.0,
        pets: "yes!",
        details:
          "Experience the epitome of California living at this charming 2-bedroom, 2-bathroom apartment nestled in the heart of San Diego. Located at 101 Rimrock in the vibrant Pacific Village neighborhood, this unit offers 500 square feet of comfortable living space. With a spacious layout, modern amenities, and a pet-friendly policy, this apartment is perfect for those seeking convenience and style. Enjoy the convenience of nearby shopping, dining, and entertainment options, all while basking in the sunny San Diego weather. Don't miss out on this fantastic opportunity | schedule a viewing today!",
        image:
          "https://images1.apartments.com/i2/A41JhQiJb64getK1c4uvF9YV89xtf3p5y0zvd8oXpic/117/the-courtyards-pacific-village-san-diego-ca-building-photo.jpg",
        user_id: 1,
      },
    ]

    render(
      <BrowserRouter>
        <ApartmentProtectedIndex
          apartments={userApartments}
          currentUser={currentUser}
        />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Listings")
    expect(element).toBeInTheDocument()
  })

  it("renders a button", () => {
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex />
      </BrowserRouter>
    )

    expect(
      screen.getByRole("button", { name: /edit listing/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /delete listing/i })
    ).toBeInTheDocument()
  })
})
