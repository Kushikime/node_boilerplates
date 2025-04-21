import { Request } from 'express';

type RequestWithBody<T> = Request<{}, {}, T>;
type RequestWithParams<T> = Request<T>;
type RequestWithQuery<T> = Request<{}, {}, {}, T>;
type RequestWithParamsAndBody<T, B> = Request<T, {}, B>;
type RequestWithParamsAndQuery<T, Q> = Request<T, {}, {}, Q>;

export {
  RequestWithBody,
  RequestWithParams,
  RequestWithQuery,
  RequestWithParamsAndBody,
  RequestWithParamsAndQuery,
};
