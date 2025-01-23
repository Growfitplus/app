const useToday = () => {
  const date = new Date();
  const today = date.getDay() - 1;
  const time = date.getHours();

  return { time, today };
};

export default useToday;
