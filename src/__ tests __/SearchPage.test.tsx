import '../__mocks__/intersectionObserver.mock';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardsGrid } from "../components/CardsGrid/CardsGrid";
import { ImagesCollection } from "../types/data";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const searchResultMock: ImagesCollection = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?media_type=image&q=orion&year_start=1900&year_end=2024",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0002/collection.json",
        data: [
          {
            center: "KSC",
            title: "Orion's Neutral Buoyancy Lab (NBL) Activities",
            photographer: "NASA/James Blair",
            keywords: [
              "Orion",
              "GSDO",
              "recovery",
              "JSC",
              "NBL",
              "EM-1",
              "exploration",
              "journey to Mars",
            ],
            location: "Orion NBL",
            nasa_id: "JSC-20160921-PH_JNB01_0002",
            media_type: "image",
            date_created: "2016-09-21T00:00:00Z",
            description:
              "U.S. Navy divers are training in the Neutral Buoyancy Laboratory at NASA’s Johnson Space Center in Houston. Navy divers, Air Force pararescuemen and Coast Guard rescue swimmers practice Orion underway recovery techniques using a test version of the Orion spacecraft. Training will help the team prepare for Underway Recovery Test 5 for Exploration Mission 1 aboard the USS San Diego in the Pacific Ocean off the coast of California in October. The Ground Systems Development and Operations Program, along with the U.S. Navy and Lockheed Martin, are preparing the recovery team, hardware and operations to support EM-1 recovery. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0002/JSC-20160921-PH_JNB01_0002~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: {
      total_hits: "14311",
    },
    links: [
      {
        rel: "next",
        prompt: "Next",
        href: "http://images-api.nasa.gov/search?media_type=image&q=orion&year_start=1900&year_end=2024&page=2",
      },
    ],
  },
};

describe("find an element inside search results", () => {
  it("search page", async () => {
    const routes = [
      {
        path: "/",
        element: <CardsGrid data={searchResultMock} />,
      },
    ];

    const rout = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });

    render(<RouterProvider router={rout} />);

    const element = screen.getByText(/James Blair/i);
    expect(element).toBeInTheDocument();
  });
});
