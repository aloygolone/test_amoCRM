import formatDate from "../../utils/formatDate";
import Loading from "../Loading/Loading";
import * as S from "./LeadCard.styled";

type LeadCardType = {
  isLoading: boolean;
  name?: string;
  id?: number | null;
  taskDate?: number;
};

export default function LeadCard({
  isLoading,
  name,
  id,
  taskDate,
}: LeadCardType) {
  const visibleDate = formatDate(taskDate) || "";

  const getStatusColor = () => {
    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const dateOfTask = new Date(taskDate! * 1000);

    if (dateOfTask < today) {
      return "red";
    } else if (dateOfTask > tomorrow) {
      return "yellow";
    } else if (dateOfTask.toDateString() === today.toDateString()) {
      return "green";
    }
    return "gray";
  };

  return (
    <>
      <S.CardContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <S.CardTitle>Название сделки: {name}</S.CardTitle>
            <div>
              <S.Text>ID сделки: {id}</S.Text>
              <S.TaskContainer>
                <S.Text>Дата ближайшей задачи: {visibleDate}</S.Text>
                <svg width="50" height="50">
                  <circle cx="30" cy="38" r="10" fill={getStatusColor()} />
                </svg>
              </S.TaskContainer>
            </div>
          </>
        )}
      </S.CardContainer>
    </>
  );
}
