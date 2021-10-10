const Counter = {
  fetchCount: (amount = 1): Promise<{ data: number }> => {
    return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: amount }), 500));
  }
};

export interface ICounter {
  fetchCount: () => Promise<void | string[]>;
}

export default Counter;
