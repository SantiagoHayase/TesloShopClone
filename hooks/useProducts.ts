import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IProduct[]>(`/api${url}`, config);

  //   const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
