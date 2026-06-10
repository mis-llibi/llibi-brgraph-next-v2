/**
 * Filters out chart data entries with zero values
 * @param rawData - Raw data object containing all possible fields
 * @returns Filtered data object with only non-zero value fields
 */
export const filterNonZeroChartData = (rawData: any) => {
  const { dependents, dependents_percentage, company, ...raw } = rawData;
  
  const total = 
    raw.employees +
    raw.spouse +
    raw.child +
    raw.parent +
    raw.sibling +
    (raw?.other ?? 0);

  // Build chartData object dynamically, only including non-zero values
  const chartData: any = {
    dependents,
    company,
    employees: raw.employees,
    spouse: raw.spouse,
    child: raw.child,
    parent: raw.parent,
    sibling: raw.sibling,
    other: raw?.other ?? 0,
  };

  // Only add percentage fields for non-zero values
  if (raw.employees > 0) {
    chartData.employees_percentage = (raw.employees / total) * 100;
  }
  if (raw.spouse > 0) {
    chartData.spouse_percentage = (raw.spouse / total) * 100;
  }
  if (raw.child > 0) {
    chartData.child_percentage = (raw.child / total) * 100;
  }
  if (raw.parent > 0) {
    chartData.parent_percentage = (raw.parent / total) * 100;
  }
  if (raw.sibling > 0) {
    chartData.sibling_percentage = (raw.sibling / total) * 100;
  }
  if ((raw?.other ?? 0) > 0) {
    chartData.other_percentage = ((raw?.other ?? 0) / total) * 100;
  }

  if (total > 0) {
    chartData.dependents_percentage = (dependents / total) * 100;
  }

  return chartData;
};

/**
 * Generates chart datasets from filtered chart data
 * @param chartData - Filtered chart data object
 * @returns Array of dataset objects for Chart.js
 */
export const generateChartDatasets = (chartData: any) => {
  const datasets: any[] = [];

  // Define category configurations
  const categories = [
    { key: 'employees', label: 'Employees', color: '#002161' },
    { key: 'spouse', label: 'Spouse', color: '#0071c1' },
    { key: 'child', label: 'Child', color: '#810100' },
    { key: 'parent', label: 'Parent', color: '#f3ab84' },
    { key: 'sibling', label: 'Sibling', color: '#7030a0' },
    { key: 'other', label: 'Other', color: '#ff6b9d' },
  ];

  // Add dataset for each category that has a non-zero value
  categories.forEach(({ key, label, color }) => {
    if (chartData[key] > 0) {
      datasets.push({
        label,
        data: [chartData[`${key}_percentage`]],
        backgroundColor: color,
        stack: 'stack1',
      });
    }
  });

  return datasets;
};
