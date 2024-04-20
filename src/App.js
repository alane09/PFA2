import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CoursesExams from './pages/Courses/Courses';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import File from './components/File';
import PDFView from './components/PdfViewer';
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
import Anglais2 from './pages/Courses/S12/Anglais2';
import Droit from './pages/Courses/S12/Droit';
import Philo from './pages/Courses/S12/Philo';
import Statistiques from './pages/Courses/S12/Stat';
//2TA S1
import CalculSc from './pages/Courses/TA2/s1/CS';
import Stochastique from './pages/Courses/TA2/s1/Stoch';
import RO from './pages/Courses/TA2/s1/RO';
import Traitement from './pages/Courses/TA2/s1/Traitement';
import RDM from './pages/Courses/TA2/s1/RDM';
import PDM from './pages/Courses/TA2/s1/PDM';
import Transfert from './pages/Courses/TA2/s1/Transfert';
import GestProj from './pages/Courses/TA2/s1/GestProj';
import Electronique from './pages/Courses/TA2/s1/FctELect';
import Linux from './pages/Courses/TA2/s1/Linux';
import AI from './pages/Courses/TA2/s1/Ai';
import ManagEquip from './pages/Courses/TA2/s1/MangEq';
import Langue from './pages/Courses/TA2/s1/Langue';
import Anglais3 from './pages/Courses/TA2/s1/Anglais3';
import Ecoverte from './pages/Courses/S12/EcoVerte';

//2TA Commun S2
import Modelisation from './pages/Courses/TA2/S2/commun/Modelisation';
import Nano from './pages/Courses/TA2/S2/commun/Nano';
import Capteurs from './pages/Courses/TA2/S2/commun/Capteurs';
import ElectroniqueEmbarquee from './pages/Courses/TA2/S2/commun/ElectroniqueEmbarquée';
import API from './pages/Courses/TA2/S2/commun/API';
import Langue2 from './pages/Courses/TA2/S2/commun/Langue2';
import Anglais4 from './pages/Courses/TA2/S2/commun/Anglais4';
import Culture from './pages/Courses/TA2/S2/commun/Culture';
//2 SETP
import MFMH from './pages/Courses/TA2/S2/setp/MFMH';
import MEconvert from './pages/Courses/TA2/S2/setp/MEconvert';
import BDSE from './pages/Courses/TA2/S2/setp/BDSE';
import Conversion from './pages/Courses/TA2/S2/setp/Conversion';
//2EAN
import Conception from './pages/Courses/TA2/S2/ean/Conception';
import MEMS from './pages/Courses/TA2/S2/ean/Mems';
import Hyper from './pages/Courses/TA2/S2/ean/Hyper';
import Nanocomposite from './pages/Courses/TA2/S2/ean/NanoComposites';
//2Sic
import Manufacturing from './pages/Courses/TA2/S2/sic/Manufacturing';
import MO1 from './pages/Courses/TA2/S2/sic/MO1';
import RO2 from './pages/Courses/TA2/S2/sic/RO2';
import SixSigma from './pages/Courses/TA2/S2/sic/Sixsigma';
//3 Commun
import Bigdata from './pages/Courses/3TA/commun/BigData';
import IOT from './pages/Courses/3TA/commun/IOT';
import Innovation from './pages/Courses/3TA/commun/Innovation';
import AnFin from './pages/Courses/3TA/commun/AnFinanciere';
import Outils5 from './pages/Courses/3TA/commun/Outils5';
import Langue3 from './pages/Courses/3TA/commun/Langue3';
import Anglais5 from './pages/Courses/3TA/commun/Anglais5';
import PPP from './pages/Courses/3TA/commun/PPP';
//3SETP
import SystRE from './pages/Courses/3TA/setp/SystRE';
import REI from './pages/Courses/3TA/setp/REI';
import Audit from './pages/Courses/3TA/setp/Audit';
import SME from './pages/Courses/3TA/setp/SME';
import Batiments from './pages/Courses/3TA/setp/Batiments';
import Centrales from './pages/Courses/3TA/setp/Centrales';
import Eolienne from './pages/Courses/3TA/setp/Eolienne';
import Bio from './pages/Courses/3TA/setp/Bio';
import Biomasse from './pages/Courses/3TA/setp/Biomasse';
import Nucleaires from './pages/Courses/3TA/setp/Technucleaires';
//3SIC
import Lean from './pages/Courses/3TA/sic/Lean';
import BGD from './pages/Courses/3TA/sic/BGD';
import GEI from './pages/Courses/3TA/sic/GEI';
import GRI from './pages/Courses/3TA/sic/GRI';
import SCM from './pages/Courses/3TA/sic/SCM';
import MO2 from './pages/Courses/3TA/sic/MO2';
import CPP from './pages/Courses/3TA/sic/CPP';
import ERP3 from './pages/Courses/3TA/sic/ERP3';
//3EAN
import FPGA from './pages/Courses/3TA/ean/FPGA';
import Video from './pages/Courses/3TA/ean/Video';
import Interfaçage from './pages/Courses/3TA/ean/Interfacage';
import Graph from './pages/Courses/3TA/ean/Graph';
import Microsystemes from './pages/Courses/3TA/ean/Micro';
import Nanocomposants from './pages/Courses/3TA/ean/NanoComp';
import ConceptionEmbarque from './pages/Courses/3TA/ean/Conception';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleSearch = (query) => {
    // Logic for searching
    console.log("Searching for:", query);
    // You can put your search logic here
  };
  return (

    <div>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coursesexams' element={<CoursesExams />} />
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
        <Route path='Anglais2' element={<Anglais2 />} />
        <Route path='Droit' element={<Droit />} />
        <Route path='Philo' element={<Philo />} />
        <Route path='Ecoverte' element={<Ecoverte />} />
        <Route path='RO' element={<RO />} />
        <Route path='CS' element={<CalculSc />} />
        <Route path='Stoch' element={<Stochastique />} />
        <Route path='Traitement' element={<Traitement />} />
        <Route path='RDM' element={<RDM />} />
        <Route path='PDM' element={<PDM />} />
        <Route path='Transfert' element={<Transfert />} />
        <Route path='GestProj' element={<GestProj />} />
        <Route path='FctELect' element={<Electronique />} />
        <Route path='Linux' element={<Linux />} />
        <Route path='Ai' element={<AI />} />
        <Route path='ManagEquip' element={<ManagEquip />} />
        <Route path='Langue' element={<Langue />} />
        <Route path='Anglais3' element={<Anglais3 />} />

        <Route path='Modelisation' element={<Modelisation />} />
        <Route path='Nano' element={<Nano />} />
        <Route path='Capteurs' element={<Capteurs />} />
        <Route path='ElectroniqueEmbarquee' element={<ElectroniqueEmbarquee />} />
        <Route path='API' element={<API />} />
        <Route path='Langue2' element={<Langue2 />} />
        <Route path='Anglais4' element={<Anglais4 />} />
        <Route path='Culture' element={<Culture />} />


        <Route path='MFMH' element={<MFMH />} />
        <Route path='MEconvert' element={<MEconvert />} />
        <Route path='BDSE' element={<BDSE />} />
        <Route path='Conversion' element={<Conversion />} />
        <Route path='Conception' element={<Conception />} />
        <Route path='MEMS' element={<MEMS />} />
        <Route path='Hyper' element={<Hyper />} />
        <Route path='Nanocomposite' element={<Nanocomposite />} />
        <Route path='Manufacturing' element={<Manufacturing />} />
        <Route path='MO1' element={<MO1 />} />
        <Route path='RO2' element={<RO2 />} />
        <Route path='SixSigma' element={<SixSigma />} />


        <Route path='BigData' element={<Bigdata />} />
        <Route path='IOT' element={<IOT />} />
        <Route path='Innovation' element={<Innovation />} />
        <Route path='AnFin' element={<AnFin />} />
        <Route path='Outils5' element={<Outils5 />} />
        <Route path='Langue3' element={<Langue3 />} />
        <Route path='Anglais5' element={<Anglais5 />} />
        <Route path='PPP' element={<PPP />} />


        <Route path='SystRE' element={<SystRE />} />
        <Route path='REI' element={<REI />} />
        <Route path='Audit' element={<Audit />} />
        <Route path='SME' element={<SME />} />
        <Route path='Batiments' element={<Batiments />} />
        <Route path='Centrales' element={<Centrales />} />
        <Route path='Eolienne' element={<Eolienne />} />
        <Route path='Bio' element={<Bio />} />
        <Route path='Biomasse' element={<Biomasse />} />
        <Route path='Nucleaires' element={<Nucleaires />} />


        <Route path='Lean' element={<Lean />} />
        <Route path='BGD' element={<BGD />} />
        <Route path='GEI' element={<GEI />} />
        <Route path='GRI' element={<GRI />} />
        <Route path='SCM' element={<SCM />} />
        <Route path='MO2' element={<MO2 />} />
        <Route path='CPP' element={<CPP />} />
        <Route path='ERP3' element={<ERP3 />} />




        <Route path='FPGA' element={<FPGA />} />
        <Route path='Video' element={<Video />} />
        <Route path='Interfacage' element={<Interfaçage />} />
        <Route path='Graph' element={<Graph />} />
        <Route path='Micro' element={<Microsystemes />} />
        <Route path='NanoComp' element={<Nanocomposants />} />
        <Route path='ConceptionEmbarque' element={<ConceptionEmbarque />} />


        <Route path='PDFView' element={<PDFView />} />

      </Routes>
      <Footer />

    </div>

  );
}

export default App;