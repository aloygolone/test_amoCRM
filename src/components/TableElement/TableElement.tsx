import * as S from "./TableElement.styled";

type TableElementType = {
  name: string;
  price: number;
  id: number;
  setSelectedCard: (arg: number) => void;
};

export default function TableElement({
  name,
  price,
  id,
  setSelectedCard,
}: TableElementType) {
  const handleClick = () => {
    setSelectedCard(id);
  };

  return (
    <>
      <S.ElementContainer onClick={handleClick}>
        <S.ElementText>{name}</S.ElementText>
        <S.ElementText>{price} руб.</S.ElementText>
        <S.ElementText>{id}</S.ElementText>
      </S.ElementContainer>
    </>
  );
}
