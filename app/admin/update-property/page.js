// // app/admin/update-property/page.js
// 'use client';

// import React, { useEffect, useState } from 'react';
// import PropertyCard from './PropertyCard';
// // import Image from 'next/image';

// const UpdatePropertiesPage = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     // Fetch all properties when the component mounts
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('/api/properties/fetch-all-properties-to-update');
//         const data = await response.json();
//         setProperties(data.properties);
//       } catch (error) {
//         alert('An error occurred while fetching properties.');
//       }
//     };
//     fetchProperties();
//   }, []);

//   const handleDeleteProperty = (propertyId) => {
//     setProperties(properties.filter((property) => property._id !== propertyId));
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Manage Properties</h1>
//       <div className="grid grid-cols-1 gap-4">
//         {properties.map((property) => (
//           <PropertyCard
//             key={property._id}
//             property={property}
//             onDelete={handleDeleteProperty}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UpdatePropertiesPage;












// app/admin/update-property/page.js
'use client';

import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

const UpdatePropertiesPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch all properties when the component mounts
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/fetch-all-properties-to-update');
        const data = await response.json();
        setProperties(data.properties);
      } catch (error) {
        alert('An error occurred while fetching properties.');
      }
    };
    fetchProperties();
  }, []);

  const handleDeleteProperty = (propertyId) => {
    setProperties(properties.filter((property) => property._id !== propertyId));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Properties</h1>
      <div className="grid grid-cols-1 gap-4">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            onDelete={handleDeleteProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default UpdatePropertiesPage;
