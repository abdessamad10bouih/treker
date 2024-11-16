import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PlannerContainer from '../components/PlannerContainer'
import PlannerForm from '../components/PlannerForm'
import SecondStep from '../components/Steps/SecondStep';
import ThirdStep from '../components/Steps/ThirdStep';
import FourthStep from '../components/Steps/FourthStep';
import FifthStep from '../components/Steps/FifthStep';

function PlannerSecond() {
  const [steps, setSteps] = useState("first");
  const [formData, setFormData] = useState({});

  const submitFun = (e) => {
    e.preventDefault();
    if (steps === "first") {
      setSteps("second");
    }else if (steps === "second") {
      setSteps("third");
    }else if (steps === "third") {
      setSteps("fourth");
    }else if (steps === "fourth") {
      setSteps("fifth");
    }
  }

  return (
    <section className='w-full flex flex-col items-center'>
        <Navbar />
        <main className='w-full flex flex-col items-center justify-center p-5'>
                <h1 className='text-5xl mb-12 text-primary font-bold text-center mt-10'>Planifiez Votre Voyage <br /> <span className='text-secondary'>Écoresponsable</span> 🌿 </h1>
                {steps === "first" && <PlannerContainer children={<PlannerForm submitFun={submitFun} form={setFormData} />} />}
                {steps === "second" && <PlannerContainer children={<SecondStep formData={formData} suivant={submitFun} retour={() => setSteps("first")} />} />}
                {steps === "third" && <PlannerContainer children={<ThirdStep suivant={submitFun} retour={() => setSteps("second")}  />} />}
                {steps === "fourth" && <PlannerContainer children={<FourthStep form={formData} suivant={submitFun} retour={() => setSteps("third")} />} />}
                {steps === "fifth" && <PlannerContainer children={<FifthStep />} />}
        </main>
    </section>
  )
}

export default PlannerSecond