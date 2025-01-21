const useToday = () => {
  const today = new Date().getDay() - 1;

  return { today };
};

export default useToday;
