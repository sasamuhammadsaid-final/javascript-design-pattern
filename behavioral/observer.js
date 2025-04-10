//BEHAVIORAL DESIGN PATTERNS
//Kategori ini berfokus pada bagaimana berbagai komponen dalam suatu program berkomunikasi satu sama lain.

//Observer
/**
 * Pola desain pengamat memungkinkan Anda menentukan mekanisme langganan untuk memberi tahu objek yang berlangganan tentang peristiwa apa pun yang terjadi pada objek yang diamati. 
 * Contoh penting dari pola ini adalah React's useEffect Hook, yang berjalan setiap kali variabel tertentu bermutasi.
 */

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("the value of count has changed");
  }, [count]);
  //the count variable is a dependency of the useEffect Hook
  // this means 
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {count % 2 === 0 ? <p>is even </p> : <p>Not even </p>}
    </>
  );
}

export default App;