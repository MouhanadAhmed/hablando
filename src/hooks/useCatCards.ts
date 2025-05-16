import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios'; 
import { CatCard } from '@/types/catCard';

const getCatCards = async (search?: string): Promise<CatCard[]> => {
  const { data } = await axiosInstance.get('catCard', {
    params: search ? { keyword: search } : {},
  });
  return data.data;
};

// Custom hook with optional search parameter
export const useCatCards = (search?: string) => {
  return useQuery({
    queryKey: ['catCard', search],
    queryFn: () => getCatCards(search),
  });
};
