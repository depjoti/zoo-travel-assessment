export const FlightSearch = ({
    selectedDate,
    setSelectedDate,
    activeButton,
    setActiveButton,
    departureAirport,
    arrivalAirport,
    handleDepartureAirport,
    handleArrivalAirport,
    handleSearch,
    adultCount,
    setAdultCount,
    childrenCount,
    setChildrenCount,
    infantCount,
    setInfantCount,
    classType,
    setClassType,
    isModalOpen,
    setIsModalOpen
  }) => {
    const incrementCount = (setter, value) => {
      setter(value + 1);
    };
  
    const decrementCount = (setter, value) => {
      if (value > 0) {
        setter(value - 1);
      }
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const formatPassengerCount = () => {
      const counts = [];
      if (adultCount > 0) counts.push(`${adultCount} Adult${adultCount > 1 ? 's' : ''}`);
      if (childrenCount > 0) counts.push(`${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}`);
      if (infantCount > 0) counts.push(`${infantCount} Infant${infantCount > 1 ? 's' : ''}`);
      return `${counts.join(', ')} - ${classType}`;
    };
  
    return (
      <div className="flex flex-col p-3">
        <div className='flex justify-center items-center'>
          <button
            className={`btn btn-sm ${activeButton === 'Round Trip' ? ' btn-primary' : 'hover:bg-blue-300'}`}
            onClick={() => setActiveButton('Round Trip')}
          >
            Round Trip
          </button>
          <button
            className={`btn btn-sm ${activeButton === 'One Way' ? ' btn-primary' : 'hover:bg-blue-300'}`}
            onClick={() => setActiveButton('One Way')}
          >
            One Way
          </button>
          <button
            className={`btn btn-sm ${activeButton === 'Multi City' ? 'btn-primary' : 'hover:bg-blue-300'}`}
            onClick={() => setActiveButton('Multi City')}
          >
            Multi City
          </button>
        </div>
  
        <div className="divider"></div>
        <div className='flex flex-nowrap justify-between items-center'>
          <input className='input input-bordered w-full max-w-36' type='text' value={departureAirport} onChange={handleDepartureAirport} placeholder='DAC' />
          <input className='input input-bordered w-full max-w-36' type='text' value={arrivalAirport} onChange={handleArrivalAirport} placeholder='DXB' />
          <input className='input input-bordered max-w-38' type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} min="1950-01-01" max="2030-01-01" />
          <input className='input input-bordered max-w-38' type="text" value={formatPassengerCount()} placeholder='Passenger Count' onClick={() => setIsModalOpen(true)} readOnly />
          <button className="btn btn-sm btn-primary" onClick={handleSearch}>Search</button>
        </div>
        <div className="divider"></div>
  
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="font-bold text-lg">Select Passengers and Class</h2>
              <div className='flex flex-col'>
              <h3 className="font-bold text-lg">Passengers</h3>
                <div className='flex justify-between items-center mb-2'>
                  <div>Adults</div>
                  <div>
                    <button className="btn btn-xs" onClick={() => decrementCount(setAdultCount, adultCount)}>-</button>
                    <span className="px-2">{adultCount}</span>
                    <button className="btn btn-xs" onClick={() => incrementCount(setAdultCount, adultCount)}>+</button>
                  </div>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div>Children</div>
                  <div>
                    <button className="btn btn-xs" onClick={() => decrementCount(setChildrenCount, childrenCount)}>-</button>
                    <span className="px-2">{childrenCount}</span>
                    <button className="btn btn-xs" onClick={() => incrementCount(setChildrenCount, childrenCount)}>+</button>
                  </div>
                </div>
                <div className='flex justify-between items-center mb-2'>
                  <div>Infants</div>
                  <div>
                    <button className="btn btn-xs" onClick={() => decrementCount(setInfantCount, infantCount)}>-</button>
                    <span className="px-2">{infantCount}</span>
                    <button className="btn btn-xs" onClick={() => incrementCount(setInfantCount, infantCount)}>+</button>
                  </div>
                </div>
                <div className='flex flex-col mb-2'>
                  <h4 className="font-bold">Class</h4>
                  <div className='flex flex-col'>
                    <label className='mt-1'>
                      <input type="radio" value="Economy" checked={classType === 'Economy'} onChange={(e) => setClassType(e.target.value)} />
                      <span className="ml-2">Economy</span>
                    </label>
                    <label className='mt-1'>
                      <input type="radio" value="Premium Economy" checked={classType === 'Premium Economy'} onChange={(e) => setClassType(e.target.value)} />
                      <span className="ml-2">Premium Economy</span>
                    </label>
                    <label className='mt-1'>
                      <input type="radio" value="Business" checked={classType === 'Business'} onChange={(e) => setClassType(e.target.value)} />
                      <span className="ml-2">Business</span>
                    </label>
                    <label className='mt-1'>
                      <input type="radio" value="Business" checked={classType === 'Premium Business'} onChange={(e) => setClassType(e.target.value)} />
                      <span className="ml-2">Premium Business</span>
                    </label>
                    <label className='mt-1'>
                      <input type="radio" value="First" checked={classType === 'First'} onChange={(e) => setClassType(e.target.value)} />
                      <span className="ml-2">First</span>
                    </label>
                    <label className='mt-1'>
                      <input type="radio" value="Business" checked={classType === 'Premium First'} onChange={(e) => setClassType(e.target.value)} />
                      <span className="ml-2">Premium First</span>
                    </label>
                  </div>
                </div>
                <div className="modal-action">
                  <button className="btn" onClick={handleModalClose}>Done</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  