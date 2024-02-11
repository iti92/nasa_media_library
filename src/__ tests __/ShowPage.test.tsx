import "../__mocks__/intersectionObserver.mock";
import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { DetailedCard } from "../components/DetailedCard/DetailedCard";
import { ImageData } from "../types/data";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

enableFetchMocks();

const imageUrl =
  "https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0004/JSC-20160921-PH_JNB01_0004~medium.jpg";

const showResultMock: ImageData = {
  center: "JSC",
  title: "jsc2018e049988",
  photographer: "Victor Zelentsov",
  nasa_id: "jsc2018e049988",
  media_type: "image",
  date_created: "2018-05-19T00:00:00Z",
  description:
    "jsc2018e049988 - Expedition 56 crewmembers Alexander Gerst of the European Space Agency (top right), Serena Aunon-Chancellor of NASA (center) and Sergey Prokopyev of Roscosmos wave to a throng of schoolchildren May 19 upon their arrival at their launch site at the Baikonur Cosmodrome in Kazakhstan. They will launch June 6 on the Soyuz MS-09 spacecraft from the Baikonur Cosmodrome for a six-month mission on the International Space Station...NASA/Victor Zelentsov.",
  keywords: ["Nasa", "Victor", "Zelentsov"],
  location: "No data",
};

describe("find an element inside search results", () => {
  it("search page", async () => {
    const routes = [
      {
        path: "/show/1",
        element: <DetailedCard data={showResultMock} imageUrl={imageUrl} />,
      },
    ];

    const rout = createMemoryRouter(routes, {
      initialEntries: ["/show/1"],
      initialIndex: 0,
    });

    render(<RouterProvider router={rout} />);

    const element = screen.getByText(/Victor Zelentsov/i);
    expect(element).toBeInTheDocument();
  });
});
