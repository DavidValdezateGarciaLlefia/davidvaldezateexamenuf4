// import { ContextoGlobalProvider, ContextoGlobal } from './context/GlobalContext.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Header from './components/Header.jsx';
// import { Route, Routes } from 'react-router-dom'
// import VistaHome from './views/VistaHome.jsx';
// import { useContext, useState } from 'react';
// import ModalForm from './components/Modal';
// import { Tarjetas } from './components/Tarjetas';



// // import React, { useState, useContext } from 'react';
// // import './App.css';
// // import { Button } from "react-bootstrap";
// // import 'bootstrap/dist/css/bootstrap.min.css'

// // import { ContextoGlobal, ContextoGlobalProvider } from './context/ContextoGlobal';


// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentHistoria, setCurrentHistoria] = useState({
//     titulo: '', fecha: '', experiencia: '', comentario: '', imagen: ''
//   });


//   const { agregarHistoria, editarHistoria } = useContext(ContextoGlobal);

//   const abrirModal = (historia = null) => {
//     console.log(historia ? 'Editing story' : 'Creating new story');
//     setCurrentHistoria(historia || { titulo: '', fecha: '', experiencia: '', comentario: '', imagen: '' });
//     setIsModalOpen(true);
//   };

//   const cerrarModal = () => setIsModalOpen(false);

//   const controladorNuevaHistoria = (nuevaHistoria) => {
//     if (currentHistoria && currentHistoria.id) {
//       editarHistoria(currentHistoria.id, nuevaHistoria);
//     } else {
//       agregarHistoria(nuevaHistoria);
//     }
//     console.log("Story managed:", nuevaHistoria);
//     cerrarModal();
//   };
//   return (
//     <>
//       <ContextoGlobalProvider>
//             <Header/>
//             <div className="flex flex-wrap gap-4 items-center">
//               <Tarjetas abrirModal={abrirModal} />
//               <Button className="absolute right-4 bottom-4 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg hover:bg-green-600"
//                       onClick={() => abrirModal(null)} 
//                       style={{ outline: 'none', border: 'none' }}>
//                 +
//               </Button>
//               <ModalForm
//                 isOpen={isModalOpen}
//                 onClose={cerrarModal}
//                 initialData={currentHistoria}
//                 onSubmit={controladorNuevaHistoria}
//               />
//             </div>
//             <Routes>
//                 <Route path='/home' element={<VistaHome/>}/>
//             </Routes>
//       </ContextoGlobalProvider>

    
//     </>
//   );
// }


import './App.css';
import { GlobalContextProvider } from './context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componentes/Header';
import { Route, Routes } from 'react-router-dom';
import VistaHome from './views/VistaHome.jsx';
import VistaCartas from './views/VistaCartas.jsx';

export default function App() {

  return (
    <GlobalContextProvider>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<VistaHome/>}/>
        <Route path='/cartas' element={<VistaCartas/>}/>
      </Routes>
    </GlobalContextProvider>
  );
}