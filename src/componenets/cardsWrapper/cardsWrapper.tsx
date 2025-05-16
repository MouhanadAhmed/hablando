
'use client';
import { useCatCards } from '@/hooks/useCatCards';
import Card from '../card/Card';


export default function CardsWrapper({ keyword }: { keyword?: string }) {


  const { data: cards, isLoading, error } = useCatCards(keyword);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <>
      {cards?.map((card, idx) => (
        <Card key={idx} data={card} />
      ))}
    </>
  );
}

