const useToday = () => {
  const date = new Date();
  const today = date.getDay() - 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return { hours, minutes, today };
};

export default useToday;
