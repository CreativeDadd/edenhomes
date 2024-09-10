// 'use client'
// import Loader from "react-loader-spinner";
// // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// export default function loadingPage(){
//   return (
//     <div>
//       <h2>NextJs Spinner Loader - GeeksforGeeks</h2>
//       <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} 
//       /> 
//     </div>
//   )
// }









'use client';
import { Puff } from 'react-loader-spinner';

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        loading...
      <Puff
        height="100"
        width="100"
        radius={1}
        color="#00BFFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
