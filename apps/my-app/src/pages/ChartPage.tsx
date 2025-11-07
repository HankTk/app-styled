import {
  AxChart,
  AxCard,
  AxHeading3,
  AxParagraph,
  AxGrid,
} from '@ui/components';

export function ChartPage() {
  // Sample data for line and area charts
  const monthlyData = [
    { month: 'Jan', sales: 4000, revenue: 2400, profit: 2000 },
    { month: 'Feb', sales: 3000, revenue: 1398, profit: 1800 },
    { month: 'Mar', sales: 2000, revenue: 9800, profit: 2200 },
    { month: 'Apr', sales: 2780, revenue: 3908, profit: 2500 },
    { month: 'May', sales: 1890, revenue: 4800, profit: 1900 },
    { month: 'Jun', sales: 2390, revenue: 3800, profit: 2100 },
    { month: 'Jul', sales: 3490, revenue: 4300, profit: 2800 },
  ];

  // Sample data for bar chart
  const categoryData = [
    { category: 'Electronics', value: 4000, target: 3500 },
    { category: 'Clothing', value: 3000, target: 3200 },
    { category: 'Food', value: 2000, target: 2500 },
    { category: 'Books', value: 2780, target: 2000 },
    { category: 'Sports', value: 1890, target: 1800 },
  ];

  // Sample data for pie chart
  const pieData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 200 },
    { name: 'Other', value: 100 },
  ];

  return (
    <>
      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Line Chart</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A line chart showing sales, revenue, and profit trends over time
        </AxParagraph>
        <AxChart
          type="line"
          data={monthlyData}
          dataKey="month"
          dataKeys={['sales', 'revenue', 'profit']}
          height={400}
          showLegend={true}
          showGrid={true}
          showTooltip={true}
        />
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Bar Chart</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A bar chart comparing actual values vs targets across different categories
        </AxParagraph>
        <AxChart
          type="bar"
          data={categoryData}
          dataKey="category"
          dataKeys={['value', 'target']}
          height={400}
          showLegend={true}
          showGrid={true}
          showTooltip={true}
        />
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Area Chart</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          An area chart displaying cumulative sales and revenue data
        </AxParagraph>
        <AxChart
          type="area"
          data={monthlyData}
          dataKey="month"
          dataKeys={['sales', 'revenue']}
          height={400}
          showLegend={true}
          showGrid={true}
          showTooltip={true}
        />
      </AxCard>

      <AxCard padding="large" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Pie Chart</AxHeading3>
        <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
          A pie chart showing device distribution
        </AxParagraph>
        <AxChart
          type="pie"
          data={pieData}
          dataKey="name"
          height={400}
          showLegend={true}
          showTooltip={true}
        />
      </AxCard>

      <AxGrid>
        <AxCard padding="large">
          <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Compact Line Chart</AxHeading3>
          <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
            A smaller line chart without grid
          </AxParagraph>
          <AxChart
            type="line"
            data={monthlyData.slice(0, 5)}
            dataKey="month"
            dataKeys={['sales']}
            height={300}
            showLegend={false}
            showGrid={false}
            showTooltip={true}
          />
        </AxCard>

        <AxCard padding="large">
          <AxHeading3 style={{ marginBottom: 'var(--spacing-sm)' }}>Compact Bar Chart</AxHeading3>
          <AxParagraph style={{ marginBottom: 'var(--spacing-xl)' }}>
            A smaller bar chart
          </AxParagraph>
          <AxChart
            type="bar"
            data={categoryData.slice(0, 4)}
            dataKey="category"
            dataKeys={['value']}
            height={300}
            showLegend={false}
            showGrid={true}
            showTooltip={true}
          />
        </AxCard>
      </AxGrid>
    </>
  );
}

