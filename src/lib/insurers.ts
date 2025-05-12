export const convertInsurer = (insurerId: number): string => {
  switch (insurerId) {
    case 1:
      return "Intellicare";
    case 2:
      return "Maxicare";
    default:
      return "Unknown";
  }
};
