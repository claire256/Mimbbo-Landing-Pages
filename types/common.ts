// Utility Types
export type APIResponse<T> = {
    message: 'success' | 'FAILED' | 'OK';
    data: T;
    error?: string;
  };
  
  export type PinPointEvent<T> = {
    eventName: string;
    params: {
      attributes: T;
      metrics?: Record<string, number>;
      query?: Record<string, any>;
    };
  };
  