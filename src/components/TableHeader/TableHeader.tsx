import * as S from "./TableHeader.styled";

export default function TableHeader() {
  return (
    <>
      <S.HeaderBlock>
        <S.HeaderText>Название</S.HeaderText>
        <S.HeaderText>Бюджет</S.HeaderText>
        <S.HeaderText>ID</S.HeaderText>
      </S.HeaderBlock>
    </>
  );
}
