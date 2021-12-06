import { useState, Dispatch, SetStateAction } from "react";

export type AsyncState<T> = {
  isLoading: boolean;
  hasError: boolean;
  result?: T;
};

type AsyncReturn<T> = [
  state: AsyncState<T>,
  trigger: () => Promise<T>,
  setResult: Dispatch<SetStateAction<T>>
];

export function useAsync<T>(fn: () => PromiseLike<T>): AsyncReturn<T> {
  const [state, setState] = useState<AsyncState<T>>({
    isLoading: false,
    hasError: false,
  });

  async function go() {
    setState((s) => ({ ...s, isLoading: true, hasError: false }));

    try {
      const result = await fn();
      setState((s) => ({ ...s, isLoading: false, result }));
      return result;
    } catch (error) {
      setState((s) => ({ ...s, isLoading: false, hasError: true }));
      throw error;
    }
  }

  function setResult(action: SetStateAction<T>): void {
    if (action instanceof Function) {
      setState((previous) => {
        const result = previous.result
          ? action(previous.result)
          : previous.result;

        return {
          ...previous,
          isLoading: false,
          result,
        };
      });
    } else {
      setState((previous) => ({
        ...previous,
        isLoading: false,
        result: action,
      }));
    }
  }

  return [state, go, setResult];
}
