import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import IndicatorSection from "./components/indicatorSection";
import YearForm from "./components/YearForm";
import Footer from "./components/Footer";

export default function App() {
  const [selectedYear, setSelectedYear] = useState(2017);
  const [data, setData] = useState(null);



  async function fetchIndicators(year) {
    const response = await fetch(
      `../api/indicators?year=${year}`,
      );

    const result = await response.json();
    setData(result.data[0]);
  }

  useEffect(() => {
    fetchIndicators(selectedYear);
  }, [selectedYear]);

  return (
    <Fragment>
      <Header />
      <YearForm
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />

      <IndicatorSection
        year={selectedYear}
        data={data}
      />

      <Footer />
    </Fragment>
  );
}