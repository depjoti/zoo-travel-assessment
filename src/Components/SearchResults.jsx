import React from 'react';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div>No data is available</div>;
  }

  return (
    <div className='flex flex-col space-y-4 mt-4'>
      {results.map((result) => (
        <div key={result.id} className='flex flex-col border border-gray-300 rounded-lg shadow-md p-4 items-center'>
          {result.legs.map((leg) => (
            <div key={leg.ref} className='mb-4 w-full'>
               {/* <div className='text-center font-bold text-lg mb-2'>
                {leg.segmentDetails[0].origin.airport - leg.segmentDetails[0].destination.airport}
              </div> */}
              <div className='text-center font-bold text-lg mb-2'>
                {leg.segment.departureLocation - leg.segment.arrivalLocation}
              </div>
              {leg.segmentDetails.map((segmentDetail) => (
                <div key={segmentDetail.id} className='flex flex-col mb-4'>
                  <div className='text-center mb-2'>
                    <div className='font-bold'>{segmentDetail.origin.dateTime || 'No data available'}</div>
                  </div>
                  <table className='min-w-full bg-white'>
                    <tbody>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Marketing Airline:</td>
                        <td className='border px-4 py-2'>{segmentDetail.fleet.marketing || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Aircraft:</td>
                        <td className='border px-4 py-2'>{segmentDetail.fleet.equipment.code || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Departure Airport:</td>
                        <td className='border px-4 py-2'>{segmentDetail.origin.airport || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Departure DateTime:</td>
                        <td className='border px-4 py-2'>{segmentDetail.origin.dateTime || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Departure Country:</td>
                        <td className='border px-4 py-2'>{segmentDetail.origin.country || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Arrival Airport:</td>
                        <td className='border px-4 py-2'>{segmentDetail.destination.airport || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Arrival Country:</td>
                        <td className='border px-4 py-2'>{segmentDetail.destination.country || 'No data available'}</td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Available Seats:</td>
                        <td className='border px-4 py-2'>
                          {result.pricingInformation[0]?.fare?.passengerInfoList[0]?.passengerInfo?.fareComponents[0]?.segments[0]?.segment?.seatsAvailable || 'No data available'}
                        </td>
                      </tr>
                      <tr>
                        <td className='border px-4 py-2 font-bold'>Baggage:</td>
                        <td className='border px-4 py-2'>{result.baggageInfo[0]?.details[0]?.pieceCount !== undefined ? `${result.baggageInfo[0].details[0].pieceCount} Pcs` : 'No data available'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;


// const SearchResults = ({ results }) => {
//   return (
//     {results?(
//  <div className='flex flex-col space-y-4 mt-4'>
//       {results.map((result) => (
//         <div key={result.id} className='flex flex-col border border-gray-300 rounded-lg shadow-md p-4 items-center'>
//           {result.legs.map((leg) => (
//             <div key={leg.ref} className='mb-4 w-full'>
//               <div className='text-center font-bold text-lg mb-2'>{`${leg.segment.departureLocation} - ${leg.segment.arrivalLocation}`}</div>
//               {/* <div className='text-center font-bold text-lg mb-2'>{`${leg.segmentDetails[0].origin.airport} - ${leg.segmentDetails[0].destination.airport}`}</div> */}
//               {leg.segmentDetails.map((segmentDetail) => (
//                 <div key={segmentDetail.id} className='flex flex-col mb-4'>
//                   <div className='text-center mb-2'>
//                     <div className='font-bold'>{segmentDetail.origin.dateTime}</div>
//                   </div>
//                   <table className='min-w-full bg-white'>
//                     <tbody>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Marketing Airline:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.fleet.marketing}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Aircraft:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.fleet.equipment.code}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Departure Airport:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.origin.airport}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Departure DateTime:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.origin.dateTime}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Departure Country:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.origin.country}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Arrival Airport:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.destination.airport}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Arrival Country:</td>
//                         <td className='border px-4 py-2'>{segmentDetail.destination.country}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Available Seats:</td>
//                         <td className='border px-4 py-2'>{result.pricingInformation[0].fare.passengerInfoList[0].passengerInfo.fareComponents[0].segments[0].segment.seatsAvailable}</td>
//                       </tr>
//                       <tr>
//                         <td className='border px-4 py-2 font-bold'>Baggage:</td>
//                         <td className='border px-4 py-2'>{result.baggageInfo[0].details[0].pieceCount} Pcs</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//     ):(
//     <div>No data is Available</div>
//   )}
   
//   );
// };

// export default SearchResults;
