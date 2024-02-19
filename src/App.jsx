import { useState, useEffect } from "react"

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])

  const [paciente, setPaciente] = useState({})

  /* useEffect(() => {
    console.log('desde app')
    const obternetLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(pacientesLs)
      setPacientes(pacientesLs)
      console.log('desde app 1111111', pacientes)
    }

    obternetLs()
  }, []) // cuando el componente se monta, es decir cuando se renderiza por primera vez y solo se ejecuta una vez */

  useEffect(() => {
    console.log('desde app 2222222', pacientes)
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const nuevosPacientes = pacientes.filter(p => p.id !== id)
    setPacientes(nuevosPacientes)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
