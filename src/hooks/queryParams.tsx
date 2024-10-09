import { useSearchParams } from 'react-router-dom';

export const useGetParams = (param: string) => {
  const [searchParams] = useSearchParams();
  const getParam = searchParams.get(param);
  return getParam ?? '';
};
export const useChangeParams = (newValues: Record<string, string>) => {
  const [_, setSearchParams] = useSearchParams();
  setSearchParams(newValues);
};
