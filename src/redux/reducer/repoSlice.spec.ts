import { repoReducer, RepoState, setRepo } from "./repoSlice";

describe('counter reducer', () => {
  const initialState: RepoState = {
    repoURL: ["facebook", "react"],
    repository: { },
  };
  it('should handle initial state', () => {
    expect(repoReducer(undefined, { type: "unknown" })).toEqual({
      repoURL: ["facebook", "react"],
    });
  });

  // it('should handle increment', () => {
  //   const actual = repoReducer(initialState, setRepo());
  //   expect(actual).toEqual(["facebook", "react"]);
  // });

  // it('should handle decrement', () => {
  //   const actual = repoReducer(initialState, decrement());
  //   expect(actual.value).toEqual(2);
  // });

  // it('should handle incrementByAmount', () => {
  //   const actual = repoReducer(initialState, incrementByAmount(2));
  //   expect(actual.value).toEqual(5);
  // });
});
