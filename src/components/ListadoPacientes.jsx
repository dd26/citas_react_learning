import Paciente from "./Paciente"

const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">

      {pacientes && pacientes.length ? (
          <>
            <h2
              className="font-black text-3xl text-center"
            >Listado pacientes</h2>

            <p
              className="text-xl mt-5 mb-10 text-center"
            >
              Administra tus {""}
              <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>

            {
              pacientes.map(paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))
            }
          </>
        ) : (
          <>
            <h2
              className="font-black text-3xl text-center"
            >No hay pacientes</h2>
            <p
              className="text-xl text-indigo-600 font-bold mt-5 mb-10 text-center"
            >
              Añade pacientes para comenzar
            </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes
