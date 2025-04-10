// Utility Types
  export type PinPointEvent<T> = {
    eventName: string;
    params: {
      attributes: T;
      metrics?: Record<string, number>;
      query?: Record<string, any>;
    };
  };
  