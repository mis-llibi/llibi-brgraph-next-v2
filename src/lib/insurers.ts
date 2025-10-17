export const convertInsurer = (insurerId: number): string => {
  switch (insurerId) {
    case 1:
      return "Intellicare";
    case 2:
      return "Maxicare";
    case 3:
      return "Philcare";
    default:
      return "Unknown";
  }
};
