import { renderHook } from "@testing-library/react-hooks";
import { useCoverages } from "./useCoverages";

const setupRefreshAllCoverages = (coverages) => {

  const coveragesJSON = JSON.stringify(coverages, null, 2);

  const res = new Response(new Blob(
    [coveragesJSON],
    {type: 'application/json'},
  ));

  global.fetch = jest.fn().mockImplementationOnce(
    url => new Promise(resolve => {
      expect(url).toBe('http://localhost:3060/coverages');
      resolve(res);
    }),
  );

};

const setupAppendCoverage = (coverage, nextId, coverages) => {

  const coverageJSON = JSON.stringify(coverage);

  global.fetch = jest.fn().mockImplementationOnce(
    (url, options) => new Promise(resolve => {

      expect(url).toBe('http://localhost:3060/coverages');
      expect(options.method).toBe('POST');
      expect(options.headers).toEqual({
        'Content-Type': 'application/json',
      });
      expect(options.body).toBe(coverageJSON);

      coverage.id = nextId;

      const res = new Response(new Blob(
        [JSON.stringify(coverage)],
        {type: 'application/json'},
      ));

      setupRefreshAllCoverages([ ...coverages, coverage ]);

      resolve(res);
    }),
  );

};

describe("useCoverages Hook", () => {

  let coverages;

  beforeEach(() => {

    coverages = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
    ];

    setupRefreshAllCoverages(coverages);

  })

  test("load initial coverage data", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useCoverages());
    expect(result.current.coverages.length).toBe(0);
    await waitForNextUpdate()
    expect(result.current.coverages.length).toBe(3);
  });

  test('append coverage', async() => {

    const newCoverage = { name: 'BBB' };
    const { result, waitForNextUpdate } = renderHook(
      () => useCoverages());

    await waitForNextUpdate()

    setupAppendCoverage(newCoverage, 4, coverages);

    result.current.appendCoverage(newCoverage);

    await waitForNextUpdate()

    expect(result.current.coverages.length).toBe(4);

  });

});
