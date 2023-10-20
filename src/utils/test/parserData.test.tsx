import { parserDataCardTvShow, parserDate } from "../parserData";

describe("parserDataCardTvShow", () => {
  it("should parse data correctly", () => {
    const testData = [
      {
        name: "Show 1",
        poster_path: "path/to/poster1",
      },
      {
        name: "Show 2",
        poster_path: "path/to/poster2",
      },
    ] as any;

    const expectedData = [
      {
        title: "Show 1",
        poster_path: "path/to/poster1",
      },
      {
        title: "Show 2",
        poster_path: "path/to/poster2",
      },
    ];

    expect(parserDataCardTvShow(testData)).toEqual(expectedData);
  });

  it("should handle empty data", () => {
    expect(parserDataCardTvShow([])).toEqual([]);
  });
});

describe("parserDate", () => {
  it("should format date correctly", () => {
    const testDate = new Date('2023-10-19T00:00:00');
    expect(parserDate(testDate)).toEqual("2023-10-19");
  });
});
