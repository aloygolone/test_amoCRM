import { useEffect, useState } from "react";
import { useLeads } from "./hooks/useLeads";
import { getData, getDataById } from "./api/api";
import TableHeader from "./components/TableHeader/TableHeader";
import Loading from "./components/Loading/Loading";
import TableElement from "./components/TableElement/TableElement";
import LeadCard from "./components/LeadCard/LeadCard";
import { LeadType } from "./type";
import * as S from "./App.styled";

const leadDirection = "leads";

export default function App() {
  const { leads, setLeads } = useLeads();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [currentLead, setCurrentLead] = useState<LeadType>();
  const [isOpenedCard, setIsOpenedCard] = useState<boolean>(false);
  const [isLoadingLeads, setIsLoadingLeads] = useState<boolean>(false);
  const [isLoadingTask, setIsLoadingTask] = useState<boolean>(false);

  useEffect(() => {
    const fetchLeads = async () => {
      setIsLoadingLeads(true); // Начинаем загрузку
      const startTime = Date.now(); // Запоминаем время начала загрузки

      const data = await getData(leadDirection); // Получаем данные
      setLeads(data); // Устанавливаем данные

      // Проверяем, прошло ли 4 секунды
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(4000 - elapsedTime, 0); // Остаток времени до 4 секунд

      // Устанавливаем таймаут на оставшееся время
      setTimeout(() => {
        setIsLoadingLeads(false); // Скрываем загрузку
      }, remainingTime);
    };

    fetchLeads();
  }, [setLeads]);

  useEffect(() => {
    if (selectedCard) {
      setIsOpenedCard(true);
      setIsLoadingTask(true);

      getDataById(leadDirection, selectedCard).then((data) => {
        setCurrentLead(data!);
        setIsLoadingTask(false);
      });
    } else {
      setIsOpenedCard(false);
    }
  }, [selectedCard]);

  return (
    <>
      <TableHeader />

      <S.TableContainer>
        {isLoadingLeads ? (
          <Loading />
        ) : (
          <>
            <div>
              {leads.map((lead) => (
                <TableElement
                  key={lead.id}
                  name={lead.name}
                  price={lead.price}
                  id={lead.id}
                  setSelectedCard={setSelectedCard}
                />
              ))}
            </div>
            {isOpenedCard && (
              <LeadCard
                name={currentLead?.name}
                id={currentLead?.id}
                taskDate={currentLead?.closest_task_at}
                isLoading={isLoadingTask}
              />
            )}
          </>
        )}
      </S.TableContainer>
    </>
  );
}
