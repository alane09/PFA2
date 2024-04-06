import './App.css';
import {  Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import CoursesExams from './pages/Courses/Courses';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import File from './components/File';
import UploadFile from './components/UploadFile';
import TA1 from './pages/Courses/TA1';
import S11 from './pages/Courses/S11/S1';
import S12 from './pages/Courses/S2';
import Sem21 from './pages/Courses/TA2/Sem21';
import EAN2 from './pages/Courses/TA2/EAN2';
import EAN3 from './pages/Courses/3TA/EAN3';
import SETP2 from './pages/Courses/TA2/Setp2';
import SETP3 from './pages/Courses/3TA/Setp3';
import SIC2 from './pages/Courses/TA2/SIC2';
import SIC3 from './pages/Courses/3TA/SIC3';
//1TA S1
import Analyse from './pages/Courses/S11/Analyse';
import Probabilité from './pages/Courses/S11/Proba';
import Algo from './pages/Courses/S11/Algo';
import Matlab from './pages/Courses/S11/Matlab';
import Physique from './pages/Courses/S11/Physique';
import MecaniqueFluides from './pages/Courses/S11/MecaniqueFluides';
import CircuitsElectriques from './pages/Courses/S11/CircuitsElectriques';
import Metrologie from './pages/Courses/S11/Metrologie';
import SemiConducteurs from './pages/Courses/S11/SemiConducteurs';
import SystemesMecaniques from './pages/Courses/S11/SystemesMecaniques';
import Anglais1 from './pages/Courses/S11/Anglais1';
import Communication from './pages/Courses/S11/Communication';
import ComptaGest from './pages/Courses/S11/ComptaGest';
//1TA S2
import AN from './pages/Courses/S12/AN';
import Optimisation from './pages/Courses/S12/Optimisation';
import Java from './pages/Courses/S12/Java';
import Thermodynamique from './pages/Courses/S12/Thermo';
import Electcomposants from './pages/Courses/S12/Electcomposants';
import Asservissement from './pages/Courses/S12/Asservissement';
//2TA S1
import CalculSc from './pages/Courses/TA2/s1/CS';
import Statistiques from './pages/Courses/S12/Stat';
import RO from './pages/Courses/TA2/s1/RO';
import Traitement from './pages/Courses/TA2/s1/Traitement';
import RDM from './pages/Courses/TA2/s1/RDM';
import PDM from './pages/Courses/TA2/s1/PDM';
import Transfert from './pages/Courses/TA2/s1/Transfert';
import Modelisation from './pages/Courses/TA2/S2/commun/Modelisation';
import Nano from './pages/Courses/TA2/S2/commun/Nano';
import Capteurs from './pages/Courses/TA2/S2/commun/Capteurs';
import MFMH from './pages/Courses/TA2/S2/setp/MFMH';
import MEconvert from './pages/Courses/TA2/S2/setp/MEconvert';
import BDSE from './pages/Courses/TA2/S2/setp/BDSE';
import Conversion from './pages/Courses/TA2/S2/setp/Conversion';


import Navbar from './components/Navbar';
import Footer from './components/Footer';



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coursesexams' element={<CoursesExams  />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='TA1' element={<TA1 />} />
        <Route path='S11' element={<S11 />} />
        <Route path='S12' element={<S12 />} />
        <Route path='Sem1' element={<Sem21 />} />
        <Route path='EAN2' element={<EAN2 />} />
        <Route path='SETP2' element={<SETP2 />} />
        <Route path='SIC2' element={<SIC2 />} />
        <Route path='EAN3' element={<EAN3 />} />
        <Route path='SETP3' element={<SETP3 />} />
        <Route path='SIC3' element={<SIC3 />} />
        <Route path='File' element={<File />} />


        <Route path='Analyse' element={<Analyse />} />
        <Route path='Probabilité' element={<Probabilité />} />
        <Route path='Algo' element={<Algo />} />
        <Route path='Matlab' element={<Matlab />} />
        <Route path='Physique' element={<Physique />} />
        <Route path='MecaniqueFluides' element={<MecaniqueFluides />} />
        <Route path='CircuitsElectriques' element={<CircuitsElectriques />} />
        <Route path='Metrologie' element={<Metrologie />} />
        <Route path='SemiConducteurs' element={<SemiConducteurs />} />
        <Route path='SystemesMecaniques' element={<SystemesMecaniques />} />
        <Route path='Anglais1' element={<Anglais1 />} />
        <Route path='Communication' element={<Communication />} />
        <Route path='ComptaGest' element={<ComptaGest />} />
        <Route path='AN' element={<AN />} />
        <Route path='Optimisation' element={<Optimisation />} />
        <Route path='Java' element={<Java />} />
        <Route path='Thermodynamique' element={<Thermodynamique />} />
        <Route path='Electcomposants' element={<Electcomposants />} />
        <Route path='Asservissement' element={<Asservissement />} />
        <Route path='Stat' element={<Statistiques />} />
        <Route path='RO' element={<RO />} />
        <Route path='CS' element={<CalculSc />} />
        <Route path='Traitement' element={<Traitement />} />
        <Route path='RDM' element={<RDM />} />
        <Route path='PDM' element={<PDM />} />
        <Route path='Transfert' element={<Transfert />} />
        <Route path='Modelisation' element={<Modelisation />} />
        <Route path='Nano' element={<Nano />} />
        <Route path='Capteurs' element={<Capteurs />} />
        <Route path='MFMH' element={<MFMH />} />
        <Route path='MEconvert' element={<MEconvert />} />
        <Route path='BDSE' element={<BDSE />} />
        <Route path='Conversion' element={<Conversion />} />

        

      </Routes>
      <Footer />
     
      
      
    </div>
  
  );
}

export default App;
