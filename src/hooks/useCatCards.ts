import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios'; 
import { CatCard } from '@/types/catCard';

const getCatCards = async (search?: string|{}): Promise<CatCard[]> => {
  const { data } = await axiosInstance.get('catCard', {
    params: search ? search : {},
  });
  return data.data;
};

function decodeQueryString(encoded: string|null) {
  const decoded = decodeURIComponent(encoded as string);
  const params = new URLSearchParams(decoded);
  const result:any = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
}

export const useCatCards = (search?: string|{}) => {
  console.log('search in hook',search)
  if(search==="Search Results"){
    search=decodeQueryString(localStorage.getItem("search"))
    console.log('search qr',search)
  }else{
    localStorage.removeItem("search")
    console.log("serach str",search)
    search = {'keyword':search}
  }
  return useQuery({
    queryKey: ['catCard', search],
    queryFn: () => getCatCards(search),
  });
};
