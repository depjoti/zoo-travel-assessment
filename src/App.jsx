import { useState } from 'react';
import './App.css';
import { FlightSearch } from './Components/FlightSearch';
import SearchResults from './Components/SearchResults';
import flightData from './zoo-flight-search.json'

function App() {
  const currentDate = new Date().toISOString().split('T')[0]; // Current date showing in the datepicker
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [activeButton, setActiveButton] = useState(null);
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [classType, setClassType] = useState('Economy');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDepartureAirport = (event) => {
    setDepartureAirport(event.target.value.toUpperCase());
  };

  const handleArrivalAirport = (event) => {
    setArrivalAirport(event.target.value.toUpperCase());
  };

 
  const handleSearch = () => {
    console.log("Departure Airport:", departureAirport);
    console.log("Arrival Airport:", arrivalAirport);
    console.log('Date:', selectedDate);
  
    const filteredFlights = flightData.result.filter((flight) => {
      // const departureMatches = flight.legs?.[0]?.segmentDetails?.some(
      //   (segmentDetail) => segmentDetail.origin?.airport === departureAirport
      // );
      // const arrivalMatches = flight.legs?.[0]?.segmentDetails?.some(
      //   (segmentDetail) => segmentDetail.destination?.airport === arrivalAirport
      // );
      const departureMatches=flight.legs?.[0]?.segment?.departureLocation === departureAirport;
      const arrivalMatches=flight.legs?.[0]?.segment?.arrivalLocation === arrivalAirport;
      const dateMatches = flight.legs?.[0]?.segment?.departureDate === selectedDate;
  
      return (departureMatches && arrivalMatches && dateMatches);
    });
  
    setSearchResults(filteredFlights);
  };
  
  
  
  

  return (
    <div className='container'>
      <FlightSearch
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        departureAirport={departureAirport}
        arrivalAirport={arrivalAirport}
        handleDepartureAirport={handleDepartureAirport}
        handleArrivalAirport={handleArrivalAirport}
        handleSearch={handleSearch}
        adultCount={adultCount}
        setAdultCount={setAdultCount}
        childrenCount={childrenCount}
        setChildrenCount={setChildrenCount}
        infantCount={infantCount}
        setInfantCount={setInfantCount}
        classType={classType}
        setClassType={setClassType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
       <SearchResults results={searchResults} />
    </div>
  );
}

export default App;





